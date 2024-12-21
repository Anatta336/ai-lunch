<script setup>
import Title from './slides/Title.vue';
import Background from './components/Background.vue';
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';
import Outline from './slides/Outline.vue';
import MachineLearning from './slides/MachineLearning.vue';
import NumberRecognitionDemo from './slides/NumberRecognitionDemo.vue';
import ArtificialNeuralNetworks from './slides/ArtificialNeuralNetworks.vue';
import MachineLearningMilestones from './slides/MachineLearningMilestones.vue';
</script>

<template>
    <div class="app">
        <FixedSize
            class="slide-container"
            :width="1600"
            :height="900"
            :margin="20"
        >
            <Background class="background" />
            <SlideChanger
                class="slide"
                :slides="[
                    NumberRecognitionDemo,
                    Title,
                    Outline,
                    MachineLearning,
                    ArtificialNeuralNetworks,
                    MachineLearningMilestones,
                ]"
            />
        </FixedSize>
    </div>
</template>

<style lang="scss" scoped>
.app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background: rgb(11, 11, 13);
    color: #fff3ed;
}

.slide-container {
    position: relative;
}

.background {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.slide {
    width: 100%;
    height: 100%;

    border-radius: 10px;
    backdrop-filter: blur(12px);
    background-color: rgba(45, 39, 69, 0.4);
    z-index: 1;
}

</style>
