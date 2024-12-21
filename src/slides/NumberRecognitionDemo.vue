<script setup>
import * as tf from '@tensorflow/tfjs';
import { onMounted, ref, useTemplateRef } from 'vue';
import NumberOutput from '@/components/NumberOutput.vue';

// Get Vite to tell us the URL for accessing this file.
const modelUrl = new URL('@/assets/models/numbers/model.json', import.meta.url).href;

const inputCanvas = useTemplateRef('inputCanvas');
const isDrawing = ref(false);
const predictions = ref([
    { label: '0', probability: 0.0 },
    { label: '1', probability: 0.0 },
    { label: '2', probability: 0.0 },
    { label: '3', probability: 0.0 },
    { label: '4', probability: 0.0 },
    { label: '5', probability: 0.0 },
    { label: '6', probability: 0.0 },
    { label: '7', probability: 0.0 },
    { label: '8', probability: 0.0 },
    { label: '9', probability: 0.0 },
]);
let ctx = null;
let model = null;

onMounted(() => {
    initializeCanvas();
    fetchModel();
});

async function fetchModel() {
    model = await tf.loadLayersModel(modelUrl);
    console.log(model);
}

function initializeCanvas() {
    ctx = inputCanvas.value.getContext('2d', { willReadFrequently: true });
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
}

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let i = 0; i < predictions.value.length; i++) {
        predictions.value[i].probability = 0.0;
    }
}

function startDrawing(e) {
    isDrawing.value = true;
    draw(e);
}

function stopDrawing() {
    if (!isDrawing.value) {
        // Already stopped.
        return;
    }

    isDrawing.value = false;
    ctx.beginPath();

    getPrediction();
}

function draw(e) {
    if (!isDrawing.value) return;

    const rect = inputCanvas.value.getBoundingClientRect();
    const scaleX = inputCanvas.value.width / rect.width;
    const scaleY = inputCanvas.value.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

async function getPrediction() {
    const imageData = ctx.getImageData(0, 0, 28, 28);
    const pixels = new Float32Array(28 * 28);

    // Convert to grayscale and normalize
    for (let i = 0; i < imageData.data.length; i += 4) {
        pixels[i/4] = (255 - imageData.data[i]) / 255;
    }

    const tensor = tf.tensor(pixels, [1, 28, 28]);
    const prediction = await model.predict(tensor).data();

    predictions.value = Array.from(prediction).map((probability, index) => {
        return {
            label: index.toString(),
            probability
        };
    });

    // Clean up to prevent memory leaks
    tensor.dispose();
}

</script>
<template>
    <article>
        <h1>Recognising Handwritten Numbers</h1>
        <canvas
            ref="inputCanvas"
            width="28"
            height="28"
            style="width: 280px; height: 280px; border: 1px solid black; image-rendering: pixelated;"
            @mousedown="startDrawing"
            @mousemove="draw"
            @mouseup="stopDrawing"
            @mouseleave="stopDrawing"
        >
        </canvas>
        <button @click="clearCanvas">Clear</button>
        <NumberOutput :results="predictions" />
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