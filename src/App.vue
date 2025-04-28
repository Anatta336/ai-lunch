<script setup>
import Title from './slides/Title.vue';
import BackgroundNodes from './components/BackgroundNodes.vue';
import ChatbotBehindScenes from './slides/ChatbotBehindScenes.vue';
import ChatbotExample from './slides/ChatbotExample.vue';
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';
import Takeaways from './slides/Takeaways.vue';
import UsageExamples from './slides/UsageExamples.vue';
import MachineLearningIntro from './slides/MachineLearningIntro.vue';
import ModelLifecycle from './slides/ModelLifecycle.vue';
import NumberFeedForward from './slides/NumberFeedForward.vue';
import ArtificialNeuralNetworks from './slides/ArtificialNeuralNetworks.vue';
import MachineLearningMilestones from './slides/MachineLearningMilestones.vue';
import NumberFeedForwardInside from './slides/NumberFeedForwardInside.vue';
import ArchitectureComparison from './slides/ArchitectureComparison.vue';
import NumberConvolutionInside from './slides/NumberConvolutionInside.vue';
import Weights from './slides/Weights.vue';
import Training from './slides/Training.vue';
import ChatbotEpistemology from './slides/ChatbotEpistemology.vue';
import ChatbotLimits from './slides/ChatbotLimits.vue';
import ChatbotExcitement from './slides/ChatbotExcitement.vue';
import Economics from './slides/Economics.vue';
import LanguageStrengths from './slides/LanguageStrengths.vue';
import SimulatedReasoning from './slides/SimulatedReasoning.vue';

import BeingAnLlm from './slides/BeingAnLlm.vue';
import BeingAnLlmPreTrainingA from './slides/BeingAnLlmPreTrainingA.vue';
import BeingAnLlmPreTrainingB from './slides/BeingAnLlmPreTrainingB.vue';
import SupervisedFineTuning from './slides/SupervisedFineTuning.vue';
import ReinforcementLearningHumanFeedback from './slides/ReinforcementLearningHumanFeedback.vue';

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
                    Takeaways,

                    MachineLearningIntro,
                    NumberConvolutionInside,
                    ArtificialNeuralNetworks,
                    Training,
                    ModelLifecycle,
                    ArchitectureComparison,

                    BeingAnLlm,
                    BeingAnLlmPreTrainingA,
                    BeingAnLlmPreTrainingB,
                    SupervisedFineTuning,
                    ReinforcementLearningHumanFeedback,

                    UsageExamples,

                    Takeaways,
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

    font-family: 'LeagueSpartan', sans-serif;

    @font-face {
        font-family: 'LeagueSpartan';
        src: url('/src/assets/fonts/LeagueSpartan-VariableFont_wght.ttf') format('truetype');
    }
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
    z-index: 1;

    background: radial-gradient(farthest-corner at 90% 50%, rgb(7 47 133 / 27%) 0%, #2e062e 90%),
        radial-gradient(farthest-corner at 10% 10%, rgb(88 9 140 / 49%) 0%, #1d052d 100%);
}

</style>
