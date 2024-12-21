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
});

</script>
<template>
<div class="wrap">
    <div v-for="result in results" :key="result.label" class="number">
        <div class="bar"
            :style="{ height: `${result.probability * 100}%` }"
        ></div>
        <!-- <label>{{ result.label }}</label> -->
    </div>
</div>
</template>
<style lang="scss" scoped>
.wrap {
    height: 400px;
    display: flex;
    gap: 5px;
}
.bar {
    background-color: #007bff;
    width: 120px;
    transition: height 0.3s;
}
</style>