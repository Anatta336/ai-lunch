<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref, } from 'vue';
import LayerAsDots from '@/components/LayerAsDots.vue';
import InputCanvas from '@/components/InputCanvas.vue';
import threeImage from '@/assets/images/three.png';

const layerOutputs = ref([]);
const rowLengths = ref([
    28, 12, 6, 6, 1
]);

let model = null;
let modelReady = null;
const trimmedModels = [];

onMounted(() => {
    modelReady = fetchModel();
});

async function fetchModel() {
    model = await tf.loadLayersModel('/models/numbers/model.json');

    layerOutputs.value = [];
    rowLengths.value = [];

    for (let i = 1; i < model.layers.length; i++) {
        trimmedModels.push(tf.model({
            inputs: model.inputs,
            outputs: model.layers[i].output
        }));

        if (i === model.layers.length - 1) {
            // Last layer is output, which we show as one item per row.
            rowLengths.value.push(1);
            continue;
        }

        rowLengths.value.push(Math.ceil(Math.sqrt(model.layers[i].output.shape[1])));
    }

    initOutputsFromModel();
}

function initOutputsFromModel() {
    layerOutputs.value = [];

    for (let i = 1; i < model.layers.length; i++) {
        layerOutputs.value.push(
            Array.from({ length: model.layers[i].output.shape[1] }, () => 0),
        );
    }
}

async function getPrediction({ imageData, pixels }) {
    await modelReady;

    // Convert to grayscale and normalize
    for (let i = 0; i < imageData.data.length; i += 4) {
        pixels[i/4] = (255 - imageData.data[i]) / 255;
    }

    const inputTensor = tf.tensor(pixels, [1, 28, 28]);

    for (let i = 0; i < trimmedModels.length; i++) {
        const prediction = await trimmedModels[i].predict(inputTensor).data();
        layerOutputs.value[i] = Array.from(prediction);
    }

    inputTensor.dispose();
}

</script>
<template>
    <article>
        <h1>Inside the Basic Model</h1>
        <InputCanvas
            @clear="initOutputsFromModel"
            @input="getPrediction"
            :px-per-pixel="7"
            :initial-image="threeImage"
        />
        <div class="layers">
            <LayerAsDots
                v-for="(output, index) in layerOutputs"
                :key="index"
                :results="output"
                :items-per-row="rowLengths[index]"
                square
            />
        </div>
        <p>
            This network can be described as a Multilayer Perceptron (MLP) with 3 hidden layers.
        </p>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.layers {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>