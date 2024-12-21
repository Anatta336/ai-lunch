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

</script>
<template>
    <div class="wrap">
        <div
            v-for="(row, rowIndex) in itemsByRow"
            class="row"
            :key="rowIndex"
        >
            <div
                v-for="(item, itemIndex) in row"
                :key="`${rowIndex}|${itemIndex}`"
                class="dot"
                :style="{ opacity: 0.25 + (item * 0.75) }"
            >
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-wrap: nowrap;
}
.row {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: nowrap;
}
.dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #79ffeb;
}
</style>