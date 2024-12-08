<script setup>
import { useTemplateRef, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    width: Number,
    height: Number,
    margin: Number,
});

const sizedElement = useTemplateRef('sized');

onMounted(() => {
    sizedElement.value.style.width = `${props.width}px`;
    sizedElement.value.style.height = `${props.height}px`;

    zoomToFit();
    window.addEventListener('resize', zoomToFit);
});

onUnmounted(() => {
    window.removeEventListener('resize', zoomToFit);
});

function zoomToFit() {
    const widthRatio = window.innerWidth / (props.width + props.margin * 2);
    const heightRatio = window.innerHeight / (props.height + props.margin * 2);

    sizedElement.value.style.zoom = Math.min(widthRatio, heightRatio);
}
</script>
<template>
    <div ref="sized">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped></style>
