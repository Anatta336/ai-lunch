<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    results: {
        type: Array,
        required: true,
        validator: (results) => {
            return results.every(item  => {
                return typeof item === 'number';
            });
        },
    },
    itemsPerRow: {
        type: Number,
        default: 100,
    },
    dotSize: {
        type: Number,
        default: 15,
    },
    square: {
        type: Boolean,
        default: false,
    },
});

const normalizedResults = computed(() => {
    let highest = Math.max(...props.results);
    if (highest === 0) {
        highest = 1;
    }

    return props.results.map(result => Math.max(0, result) / highest);
});

const rowCount = computed(() => {
    return Math.ceil(normalizedResults.value.length / props.itemsPerRow);
});

const itemsByRow = computed(() => {
    const result = [];
    for (let rowIndex = 0; rowIndex < rowCount.value; rowIndex++) {
        result.push(
            normalizedResults.value.slice(
                rowIndex * props.itemsPerRow,
                (rowIndex + 1) * props.itemsPerRow
            )
        );
    }

    return result;
});

const gapSize = computed(() => {
    return Math.max(1, Math.floor(props.dotSize / 5));
});
const borderRadius = computed(() => {
    return props.square ? 0 : '50%';
});

</script>
<template>
    <div
        class="wrap"
        :style="{
            gap: `${gapSize}px`,
        }"
    >
        <div
            v-for="(row, rowIndex) in itemsByRow"
            :key="rowIndex"
            class="row"
            :style="{
                gap: `${gapSize}px`,
            }"
        >
            <div
                v-for="(item, itemIndex) in row"
                :key="`${rowIndex}|${itemIndex}`"
                class="dot"
                :style="{
                    opacity: 0.10 + (item * 0.93),
                    width: `${props.dotSize}px`,
                    height: `${props.dotSize}px`,
                    borderRadius: `${borderRadius}`,
                }"
            >
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
.row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.dot {
    background-color: #fffcd6;
}
</style>