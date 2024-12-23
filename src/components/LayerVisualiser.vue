<script setup>
import { computed } from 'vue';
import LayerAsDots from './LayerAsDots.vue';

const props = defineProps({
    layer: Object,
    required: true,
    validator: (value) => {
        return [
            'name',
            'shape',
            'model',
            'filterCount',
            'isFlat',
            'resultsData',
        ].every((key) => key in value);
    }
});

const filterResults = computed(() => {
    if (props.layer.isFlat) {
        return [
            {
                itemsPerRow: 1,
                results: Array.from({ length: props.layer.shape[1] }, (_, i) => props.layer.resultsData[i] ?? 0),
            }
        ];
    }

    const results = [];

    const fullData = props.layer.resultsData;
    const featureHeight = props.layer.shape[1];
    const featureWidth = props.layer.shape[2];
    const featureCount = props.layer.shape[3];

    for (let featureIndex = 0; featureIndex < featureCount; featureIndex++) {
        const dataForFeature = [];

        for(let h = 0; h < featureHeight; h++) {
            for(let w = 0; w < featureWidth; w++) {
                const index = (h * featureWidth * featureCount)
                    + (w * featureCount)
                    + featureIndex;

                dataForFeature.push(fullData[index] ?? 0);
            }
        }

        results.push({
            itemsPerRow: featureWidth,
            results: dataForFeature,
        });
    }

    return results;
});


</script>
<template>
<div :class="{
    'grid': !props.layer.isFlat,
    'line': props.layer.isFlat,
}">
    <LayerAsDots
        v-for="(filter, index) in filterResults"
        :key="index"
        :results="filter.results"
        :items-per-row="filter.itemsPerRow"
        :dot-size="8"
    />
</div>
</template>
<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    max-height: 100%;
}
.line {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 100%;
}
</style>