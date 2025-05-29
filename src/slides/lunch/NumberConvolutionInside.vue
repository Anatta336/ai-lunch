<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref, toRaw } from 'vue';
import InputCanvas from '@/components/InputCanvas.vue';
import LayerVisualiser from '@/components/LayerVisualiser.vue';
import threeImage from '@/assets/images/three.png';

let model = null;
let modelReady = null;
const layers = ref([]);
const finalResult = ref(0);
const finalCertainty = ref(0);

onMounted(() => {
    modelReady = fetchModel();
});

async function fetchModel() {
    model = await tf.loadLayersModel('/models/numbers-convolution/model.json');

    layers.value = [];
    for (let i = 1; i < model.layers.length; i++) {
        const layer = model.layers[i];

        if (!layer.name.includes('dense')
            && !layer.name.includes('conv2d')
        ) {
            // Only including some of the layers for visualisation.
            continue;
        }

        const outputModel = tf.model({
            inputs: model.inputs,
            outputs: layer.output,
        });

        layers.value.push({
            name: layer.name,
            shape: layer.output.shape,
            trimmedModel: outputModel,
            filterCount: layer.output.shape[3] ?? 1,
            isFlat: layer.output.shape.length === 2,
            resultsData: [],
        });
    }
}

function clearResults() {
    for (let i = 0; i < layers.value.length; i++) {
        layers.value[i].resultsData = [];
    }
}

async function getPrediction({ imageData, pixels }) {
    await modelReady;

    for (let i = 0; i < imageData.data.length; i += 4) {
        pixels[i / 4] = (255 - imageData.data[i]) / 255;
    }

    const inputTensor = tf.tensor(pixels, [1, 28, 28, 1]);

    for (let i = 0; i < layers.value.length; i++) {
        const layer = layers.value[i];
        const model = toRaw(layer.trimmedModel);

        const data = await model.predict(inputTensor).data();
        layer.resultsData = Array.from(data);

        if (i == layers.value.length - 1) {
            const highest = Math.max(...data);
            const index = data.indexOf(highest);
            finalResult.value = index;
            finalCertainty.value = highest;
        }
    }

    inputTensor.dispose();
}

</script>
<template>
    <article>
        <h1
            style="margin: 0;"
        >
            Machine Learning for Handwriting Recognition
        </h1>

        <div class="columns">
            <InputCanvas
                @clear="clearResults"
                @input="getPrediction"
                :px-per-pixel="7"
                style="margin-right: 20px;"
                :initial-image="threeImage"
            />
            <LayerVisualiser
                v-for="(layer, index) in layers"
                :key="index"
                :layer="layer"
                :node-size="index == layers.length - 1 ? 20 : (layer.isFlat ? 16 : 9)"
            />
            <div class="result">
                {{ finalResult }}
                <small>{{ (finalCertainty * 100).toFixed(0) }}%</small>
            </div>
        </div>
        <p>
            This network uses convolution layers followed by dense layers.
            It's known as a Convolutional Neural Network (CNN).
        </p>
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
.columns {
    height: 780px;
    display: flex;
    flex-direction: row;
    gap: 20px;
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