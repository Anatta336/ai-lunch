<script setup>
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';

import Title from './slides/Title.vue';
import Definitions from './slides/Definitions.vue';
import FlowPerception from './slides/FlowPerception.vue';
import Takeaways from './slides/Takeaways.vue';
import MachineLearningIntro from './slides/MachineLearningIntro.vue';
import ModelLifecycle from './slides/ModelLifecycle.vue';
import ArtificialNeuralNetworks from './slides/ArtificialNeuralNetworks.vue';
import NumberConvolutionInside from './slides/NumberConvolutionInside.vue';
import Weights from './slides/Weights.vue';
import ArchitectureComparison from './slides/ArchitectureComparison.vue';
import Training from './slides/Training.vue';
import BeingAnLlm from './slides/BeingAnLlm.vue';
import BeingAnLlmPreTrainingA from './slides/BeingAnLlmPreTrainingA.vue';
import BeingAnLlmPreTrainingB from './slides/BeingAnLlmPreTrainingB.vue';
import SupervisedFineTuning from './slides/SupervisedFineTuning.vue';
import ReinforcementLearningHumanFeedback from './slides/ReinforcementLearningHumanFeedback.vue';
import ChatbotBehindScenes from './slides/ChatbotBehindScenes.vue';
import ChatbotExample from './slides/ChatbotExample.vue';
import LlmCharacteristics from './slides/LlmCharacteristics.vue';
import UsageExamples from './slides/UsageExamples.vue';
import Economics from './slides/Economics.vue';
import DangersPre from './slides/DangersPre.vue';
import DangersA from './slides/DangersA.vue';
import DangersB from './slides/DangersB.vue';
import DangersC from './slides/DangersC.vue';
import DangersD from './slides/DangersD.vue';
import IdentifyingUse from './slides/IdentifyingUse.vue';
</script>

<template>
    <div class="app">
        <FixedSize
            class="slide-container"
            :width="1600"
            :height="900"
            :margin="10"
        >
            <SlideChanger
                class="slide"
                :slides="[
                    Title,
                    Definitions,

                    FlowPerception,

                    Takeaways,

                    MachineLearningIntro,
                    NumberConvolutionInside,
                    Weights,
                    Training,
                    ModelLifecycle,
                    ArchitectureComparison,
                    ArtificialNeuralNetworks,

                    BeingAnLlm,
                    BeingAnLlmPreTrainingA,
                    BeingAnLlmPreTrainingB,
                    SupervisedFineTuning,
                    ReinforcementLearningHumanFeedback,
                    ChatbotExample,
                    ChatbotBehindScenes,

                    LlmCharacteristics,
                    UsageExamples,
                    Economics,
                    DangersPre,
                    DangersA,
                    DangersB,
                    DangersC,
                    DangersD,
                    IdentifyingUse,

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
