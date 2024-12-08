<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';

const props = defineProps({
    slides: Array,
});

const emit = defineEmits(['change-slide']);

const slideIndex = ref(0);
const currentSlide = computed(() => props.slides[slideIndex.value]);

watch(slideIndex, (newIndex, oldIndex) => {
    emit('change-slide', {
        newIndex,
        oldIndex,
    });
});

onMounted(() => {
    window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
    window.addEventListener('keydown', onKeydown);
});

function onKeydown(event) {
    if (event.key === 'ArrowRight') {
        slideIndex.value = Math.min(slideIndex.value + 1, props.slides.length - 1)

        return;
    }
    if (event.key === 'ArrowLeft') {
        slideIndex.value = Math.max(slideIndex.value - 1, 0);

        return;
    }
}
</script>
<template>
    <component
        :is="currentSlide"
    />
</template>
<style lang="scss" scoped></style>