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
    <div class="slide-wrapper">
        <div
            class="control left"
            @click="slideIndex = Math.max(slideIndex - 1, 0)"
        >←</div>
        <div class="control right"
            @click="slideIndex = Math.min(slideIndex + 1, props.slides.length - 1)"
        >→</div>
        <component
            :is="currentSlide"
        />
    </div>
</template>
<style lang="scss" scoped>
.slide-wrapper {
    position: relative;

    .control {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;

        user-select: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 1;
        }

        &.left {
            left: 0;
        }
        &.right {
            right: 0;
        }
    }
}
</style>