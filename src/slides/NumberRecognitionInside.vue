<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref, } from 'vue';
import LayerAsDots from '@/components/LayerAsDots.vue';
import InputCanvas from '@/components/InputCanvas.vue';

// Get Vite to tell us the URL for accessing this file.
const modelUrl = new URL('@/assets/models/numbers/model.json', import.meta.url).href;

const layerOutputs = ref([]);
const rowLengths = ref([
    28, 12, 6, 6, 1
]);

let model = null;
const trimmedModels = [];

onMounted(() => {
    fetchModel();
});

async function fetchModel() {
    model = await tf.loadLayersModel(modelUrl);

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
        <h1>Inside the Model</h1>
        <InputCanvas
            @clear="initOutputsFromModel"
            @input="getPrediction"
            :px-per-pixel="7"
        />
        <div class="layers">
            <LayerAsDots
                v-for="(output, index) in layerOutputs"
                :key="index"
                :results="output"
                :items-per-row="rowLengths[index]"
            />
        </div>
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
.layers {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>