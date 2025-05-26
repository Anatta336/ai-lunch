<script setup>
import RefreshIcon from '@/assets/svg/refresh.svg';
import { onMounted, ref, useTemplateRef, watch } from 'vue';

const props = defineProps({
    pxPerPixel: {
        type: Number,
        default: 10,
    },
    initialImage: {
        type: String,
        default: '',
    },
});

const emit = defineEmits([
    'clear',
    'input',
]);

let ctx = null;
const predictDelayMs = ref(100);
const inputCanvas = useTemplateRef('inputCanvas');
const isDrawing = ref(false);
let predictionInterval = null;

onMounted(() => {
    initCanvas();
    loadInitialImage();
});

function initCanvas() {
    ctx = inputCanvas.value.getContext('2d', {
        willReadFrequently: true,
        alpha: false,
    });
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
}

async function loadInitialImage() {
    if (!props.initialImage || !ctx) return;

    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 28, 28);
        // Trigger initial prediction
        const imageData = ctx.getImageData(0, 0, 28, 28);
        const pixels = new Float32Array(28 * 28);
        emit('input', { imageData, pixels });
    };
    img.src = props.initialImage;
}

// Watch for changes to initialImage prop
watch(() => props.initialImage, loadInitialImage);

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    emit('clear');
}

function startDrawing(e) {
    isDrawing.value = true;
    draw(e);
    // Start interval for prediction every 500ms
    if (!predictionInterval) {
        predictionInterval = setInterval(() => {
            const imageData = ctx.getImageData(0, 0, 28, 28);
            const pixels = new Float32Array(28 * 28);
            emit('input', { imageData, pixels });
        }, predictDelayMs.value);
    }
}

function stopDrawing() {
    if (!isDrawing.value) {
        // Already stopped.
        return;
    }

    isDrawing.value = false;
    ctx.beginPath();

    // Stop interval and run prediction one last time
    if (predictionInterval) {
        clearInterval(predictionInterval);
        predictionInterval = null;
    }
    const imageData = ctx.getImageData(0, 0, 28, 28);
    const pixels = new Float32Array(28 * 28);
    emit('input', { imageData, pixels });
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

</script>
<template>
<div class="canvas-wrap">
    <canvas
        ref="inputCanvas"
        width="28"
        height="28"
        :style="{
            width: `${28 * props.pxPerPixel}px`,
            height: `${28 * props.pxPerPixel}px`,
            border: '1px solid black',
            imageRendering: 'pixelated',
        }"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
    >
    </canvas>
    <img
        :src="RefreshIcon"
        alt="Clear"
        class="clickable"
        @click="clearCanvas"
    />
</div>
</template>
<style lang="scss" scoped>
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