<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';

const props = defineProps({
    slides: Array,
});

const emit = defineEmits(['change-slide']);

const slideIndex = ref(0);
const currentSlide = computed(() => props.slides[slideIndex.value]);
const cachedTitles = ref(new Map());
const isLoadingTitles = ref(false);

watch(slideIndex, (newIndex, oldIndex) => {
    emit('change-slide', {
        newIndex,
        oldIndex,
    });

    // Try to extract h1 from the currently rendered slide
    nextTick(() => {
        extractCurrentSlideTitle(newIndex);
    });
});

// Function to extract h1 from currently rendered slide
function extractCurrentSlideTitle(index) {
    if (cachedTitles.value.has(index)) return; // Already cached

    try {
        // Find the slide wrapper and look for h1 elements
        const slideWrapper = document.querySelector('.slide-wrapper');
        if (slideWrapper) {
            const h1Elements = slideWrapper.querySelectorAll('h1');
            if (h1Elements.length > 0) {
                const title = Array.from(h1Elements)
                    .map(el => el.textContent?.trim())
                    .filter(Boolean)
                    .join(' ');

                if (title) {
                    cachedTitles.value.set(index, title);
                }
            }
        }
    } catch (error) {
        console.debug('Could not extract title from slide:', error);
    }
}

// Computed property to get slide labels
const slideLabels = computed(() => {
    return props.slides.map((slide, index) => {
        // First check if we have a cached title from h1 extraction
        if (cachedTitles.value.has(index)) {
            return cachedTitles.value.get(index);
        }

        // Fall back to component name
        let componentName = slide.name || slide.__name;

        // If no component name, check for __file property and extract filename
        if (!componentName && slide.__file) {
            const match = slide.__file.match(/\/([^\/]+)\.vue$/);
            if (match) {
                componentName = match[1];
            }
        }

        if (componentName) {
            // Convert PascalCase to readable format
            return componentName.replace(/([A-Z])/g, ' $1').trim();
        }

        // Final fallback to slide index
        return `Slide ${index + 1}`;
    });
});

onMounted(() => {
    window.addEventListener('keydown', onKeydown);

    nextTick(() => {
        extractCurrentSlideTitle(slideIndex.value);

        setTimeout(() => {
            extractAllTitles();
        }, 300);
    });
});

onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown);
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

function goToSlide(index) {
    slideIndex.value = index;
}

// Function to quickly visit all slides to extract their h1 titles
async function extractAllTitles() {
    const originalIndex = slideIndex.value;
    isLoadingTitles.value = true;

    for (let i = 0; i < props.slides.length; i++) {
        if (!cachedTitles.value.has(i)) {
            slideIndex.value = i;
            await nextTick();
            await new Promise(resolve => setTimeout(resolve, 50)); // Small delay to ensure rendering
            extractCurrentSlideTitle(i);
        }
    }

    slideIndex.value = originalIndex;
    isLoadingTitles.value = false;
}
</script>
<template>
    <div class="slide-wrapper">

        <div v-if="isLoadingTitles" class="loading-overlay">
            <div class="loading-message">
                <div class="loading-spinner"></div>
                <span>Preparing Slides...</span>
            </div>
        </div>

        <div
            class="control left"
            @click="slideIndex = Math.max(slideIndex - 1, 0)"
        >←</div>
        <div class="control right"
            @click="slideIndex = Math.min(slideIndex + 1, props.slides.length - 1)"
        >→</div>

        <!-- Navigation panel -->
        <div class="navigation-panel">
            <div
                v-for="(label, index) in slideLabels"
                :key="index"
                class="nav-item"
                :class="{ active: index === slideIndex }"
                @click="goToSlide(index)"
                :title="label"
            >
                <div class="nav-item-content">
                    <span class="nav-label">{{ label }}</span>
                </div>
            </div>
        </div>

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

    .navigation-panel {
        position: absolute;
        bottom: 5px;
        left: 5px;
        width: calc(60px * 8 + 6px * 7 + 6px * 2);
        display: flex;
        gap: 6px;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.3s ease;
        overflow-x: auto;
        padding: 6px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        backdrop-filter: blur(5px);
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        &:hover {
            opacity: 1;
        }

        .nav-item {
            width: 60px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.1);
            border: 2px solid transparent;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;

            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.3);
            }

            &.active {
                background-color: rgba(255, 255, 255, 0.3);
                border-color: rgba(255, 255, 255, 0.5);
            }

            .nav-item-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2px;
                padding: 4px;

                .nav-label {
                    font-size: 10px;
                    color: rgba(255, 255, 255, 0.7);
                    text-align: center;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 1.1;
                }
            }
        }

        /* Scrollbar styling for better appearance */
        &::-webkit-scrollbar {
            height: 4px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
        }
    }

    .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;

        .loading-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            color: white;
            font-size: 18px;
            font-weight: 500;

            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
        }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}
</style>