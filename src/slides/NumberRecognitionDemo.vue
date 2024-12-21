<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref } from 'vue';
import NumberOutput from '@/components/NumberOutput.vue';
import InputCanvas from '@/components/InputCanvas.vue';

// Get Vite to tell us the URL for accessing this file.
const modelUrl = new URL('@/assets/models/numbers/model.json', import.meta.url).href;
let model = null;

const predictions = ref(
    Array.from({ length: 10 }, (_, i) => ({
        label: i.toString(),
        probability: 0.0
    }))
);

onMounted(() => {
    fetchModel();
});

function clearPredictions() {
    for (let i = 0; i < predictions.value.length; i++) {
        predictions.value[i].probability = 0.0;
    }
}

async function fetchModel() {
    model = await tf.loadLayersModel(modelUrl);
}

async function getPrediction({ imageData, pixels }) {
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
        <h1>Recognising Handwritten Numbers</h1>
        <InputCanvas
            @clear="clearPredictions"
            @input="getPrediction"
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.canvas-wrap {
    position: relative;

    img {
        position: absolute;
        top: 0px;
        right: -24px;
    }
}
.clickable {
    cursor: pointer;
}
</style>