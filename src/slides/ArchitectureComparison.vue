<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref } from 'vue';
import NumberOutput from '@/components/NumberOutput.vue';
import InputCanvas from '@/components/InputCanvas.vue';
import threeImage from '@/assets/images/three.png';

let convolutionModel = null;
let denseModel = null;
let modelReady = null;

const densePredictions = ref(
    Array.from({ length: 10 }, (_, i) => ({
        label: i.toString(),
        probability: 0.0
    }))
);

const convolutionPredictions = ref(
    Array.from({ length: 10 }, (_, i) => ({
        label: i.toString(),
        probability: 0.0
    }))
);

onMounted(() => {
    modelReady = fetchModel();
});

function clearPredictions() {
    for (let i = 0; i < convolutionPredictions.value.length; i++) {
        convolutionPredictions.value[i].probability = 0.0;
    }
    for (let i = 0; i < densePredictions.value.length; i++) {
        densePredictions.value[i].probability = 0.0;
    }
}

async function fetchModel() {
    convolutionModel = await tf.loadLayersModel('/models/numbers-convolution/model.json');
    denseModel = await tf.loadLayersModel('/models/numbers/model.json');
}

async function getPrediction({ imageData, pixels }) {
    await modelReady;

    // Convert to grayscale and normalize
    for (let i = 0; i < imageData.data.length; i += 4) {
        pixels[i/4] = (255 - imageData.data[i]) / 255;
    }

    const convolutionInput = tf.tensor(pixels, [1, 28, 28, 1]);
    const convolutionRaw = await convolutionModel.predict(convolutionInput).data();
    convolutionPredictions.value = Array.from(convolutionRaw).map((probability, index) => {
        return {
            label: index.toString(),
            probability
        };
    });
    convolutionInput.dispose();

    const inputTensor = tf.tensor(pixels, [1, 28, 28]);
    const denseRaw = await denseModel.predict(inputTensor).data();
    densePredictions.value = Array.from(denseRaw).map((probability, index) => {
        return {
            label: index.toString(),
            probability
        };
    });
    denseInput.dispose();
}

</script>
<template>
    <article>
        <h1>Architecture Comparison</h1>
        <InputCanvas
            @clear="clearPredictions"
            @input="getPrediction"
            :initial-image="threeImage"
        />
        <div>Result from dense model (52 KB)</div>
        <NumberOutput
            :results="densePredictions"
            style="
                padding: 0px 50px 50px;
            "
        />
        <div>Result from convolution model (30 KB)</div>
        <NumberOutput
            :results="convolutionPredictions"
            style="
                padding: 0px 50px 50px;
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
</style>