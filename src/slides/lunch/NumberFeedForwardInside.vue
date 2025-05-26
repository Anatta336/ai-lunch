<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref, computed } from 'vue';
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

const finalCertainty = computed(() => {
    const lastLayer = layerOutputs.value[layerOutputs.value.length - 1] ?? [0];
    return Math.max(...lastLayer);
});

const finalResult = computed(() => {
    const lastLayer = layerOutputs.value[layerOutputs.value.length - 1] ?? [0];
    return lastLayer.indexOf(Math.max(...lastLayer));
});

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

        if (i == 1) {
            rowLengths.value.push(Math.ceil(Math.sqrt(model.layers[i].output.shape[1])));
        } else {
            rowLengths.value.push(Math.max(1, Math.ceil(model.layers[i].output.shape[1] / 20)));
        }
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
            />
            <div class="result">
                {{ finalResult }}
                <small>{{ (finalCertainty * 100).toFixed(0) }}%</small>
            </div>
        </div>
        <p>
            This is a densely connected network with 3 hidden layers. Sometimes referred to as a Multilayer Perceptron (MLP).
        </p>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
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
.result {
    width: 70px;

    small {
        font-size: 1.2rem;
        color: #a4fbeb;
    }
}
</style>