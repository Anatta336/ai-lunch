<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref } from 'vue';
import NumberOutput from '@/components/NumberOutput.vue';
import InputCanvas from '@/components/InputCanvas.vue';
import threeImage from '@/assets/images/three.png';

let model = null;
let modelReady = null;
const predictions = ref(
    Array.from({ length: 10 }, (_, i) => ({
        label: i.toString(),
        probability: 0.0
    }))
);

onMounted(() => {
    modelReady = fetchModel();
});

function clearPredictions() {
    for (let i = 0; i < predictions.value.length; i++) {
        predictions.value[i].probability = 0.0;
    }
}

async function fetchModel() {
    model = await tf.loadLayersModel('/models/numbers/model.json');
}

async function getPrediction({ imageData, pixels }) {
    await modelReady;

    // Convert to grayscale and normalize
    for (let i = 0; i < imageData.data.length; i += 4) {
        pixels[i/4] = (255 - imageData.data[i]) / 255;
    }

    const inputTensor = tf.tensor(pixels, [1, 28, 28]);
    const prediction = await model.predict(inputTensor).data();

    predictions.value = Array.from(prediction).map((probability, index) => {
        return {
            label: index.toString(),
            probability
        };
    });

    inputTensor.dispose();
}

</script>
<template>
    <article>
        <h1>Recognising Numbers - Basic Model</h1>
        <InputCanvas
            @clear="clearPredictions"
            @input="getPrediction"
            :initial-image="threeImage"
        />
        <NumberOutput
            :results="predictions"
            style="
                padding: 0 50px;
            "
        />
    </article>
</template>
<style lang="scss" scoped>
article {
    height: 100%;
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>