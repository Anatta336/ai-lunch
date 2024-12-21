<script setup>
import * as tf from '@tensorflow/tfjs';
import imgUrl from '@/assets/exapunks-code.png';
import modelWeightsUrl from '@/assets/models/numbers/group1-shard1of1.bin';

// Get Vite to tell us the URL for accessing this file.
const modelUrl = new URL('@/assets/models/numbers/model.json', import.meta.url).href;

console.log(imgUrl);
console.log(modelUrl);
console.log(modelWeightsUrl);

async function fetchModel() {
    const model = await tf.loadLayersModel(modelUrl);
    console.log(model);
}

</script>
<template>
    <article>
        <h1>Recognising Handwritten Numbers</h1>
        <div>[MNIST Demo]</div>
        <button
            @click="fetchModel"
        >
            Load Model
        </button>
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