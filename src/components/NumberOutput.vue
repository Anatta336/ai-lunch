<script setup>
import { defineProps } from 'vue';

defineProps({
    results: {
        type: Array,
        required: true,
        validator: (results) => {
            return results.every(result =>
                typeof result.label === 'string' &&
                typeof result.probability === 'number'
            );
        },
    },
    height: {
        type: Number,
        default: 400,
    },
});

</script>
<template>
<div
    class="wrap"
    :style="{ height: `${height}px` }"
>
    <div v-for="result in results" :key="result.label" class="number">
        <label>{{ result.label }}</label>
        <div class="bar"
            :style="{ height: `${result.probability * 100}%` }"
        ></div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;

    .number {
        flex: 1 0 3px;
    }
}
label {
    display: block;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #79ffeb;
}
.bar {
    width: 100%;
    transition: height 0.3s;
    border-radius: 0 0 5px 5px;
    background: linear-gradient(75deg, #ffffd8, #79ffeb);
}
</style>