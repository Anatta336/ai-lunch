<script setup>
import Title from './slides/Title.vue';
import BackgroundNodes from './components/BackgroundNodes.vue';
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';
import Outline from './slides/Outline.vue';
import MachineLearning from './slides/MachineLearning.vue';
import NumberFeedForward from './slides/NumberFeedForward.vue';
import ArtificialNeuralNetworks from './slides/ArtificialNeuralNetworks.vue';
import MachineLearningMilestones from './slides/MachineLearningMilestones.vue';
import NumberFeedForwardInside from './slides/NumberFeedForwardInside.vue';
import NumberConvolution from './slides/NumberConvolution.vue';
import NumberConvolutionInside from './slides/NumberConvolutionInside.vue';
import Weights from './slides/Weights.vue';
import Training from './slides/Training.vue';
</script>

<template>
    <div class="app">
        <FixedSize
            class="slide-container"
            :width="1600"
            :height="900"
            :margin="10"
        >
            <!-- <BackgroundNodes class="background" /> -->
            <SlideChanger
                class="slide"
                :slides="[
                    Title,
                    MachineLearning,
                    NumberFeedForward,
                    NumberFeedForwardInside,
                    Weights,
                    Training,
                    NumberConvolution,
                    NumberConvolutionInside,
                    ArtificialNeuralNetworks,
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
