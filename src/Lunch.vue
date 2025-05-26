<script setup>
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';

import Title from './slides/lunch/Title.vue';
import Definitions from './slides/lunch/Definitions.vue';
import FlowPerception from './slides/lunch/FlowPerception.vue';
import Takeaways from './slides/lunch/Takeaways.vue';
import MachineLearningIntro from './slides/lunch/MachineLearningIntro.vue';
import ModelLifecycle from './slides/lunch/ModelLifecycle.vue';
import NumberConvolutionInside from './slides/lunch/NumberConvolutionInside.vue';
import Weights from './slides/lunch/Weights.vue';
import Training from './slides/lunch/Training.vue';
import BeingAnLlm from './slides/lunch/BeingAnLlm.vue';
import BeingAnLlmPreTrainingA from './slides/lunch/BeingAnLlmPreTrainingA.vue';
import SupervisedFineTuning from './slides/lunch/SupervisedFineTuning.vue';
import ReinforcementLearningHumanFeedback from './slides/lunch/ReinforcementLearningHumanFeedback.vue';
import ChatbotBehindScenes from './slides/lunch/ChatbotBehindScenes.vue';
import ChatbotExample from './slides/lunch/ChatbotExample.vue';
import LlmCharacteristics from './slides/lunch/LlmCharacteristics.vue';
import Economics from './slides/lunch/Economics.vue';
import DangersA from './slides/lunch/DangersA.vue';
import DangersB from './slides/lunch/DangersB.vue';
import DangersC from './slides/lunch/DangersC.vue';
import DangersD from './slides/lunch/DangersD.vue';
import IdentifyingUse from './slides/lunch/IdentifyingUse.vue';
import LlmLifecycle from './slides/lunch/LlmLifecycle.vue';
import Tokens from './slides/lunch/Tokens.vue';
import Reasoning from './slides/lunch/Reasoning.vue';
import Workflows from './slides/lunch/Workflows.vue';
import Agents from './slides/lunch/Agents.vue';
import UsageExamplesIndividual from './slides/lunch/UsageExamplesIndividual.vue';
import UsageExamplesBusiness from './slides/lunch/UsageExamplesBusiness.vue';
</script>

<template>
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

                MachineLearningIntro,
                NumberConvolutionInside,
                Weights,
                Training,
                ModelLifecycle,

                LlmLifecycle,
                BeingAnLlm,
                Tokens,
                BeingAnLlmPreTrainingA,
                SupervisedFineTuning,
                ReinforcementLearningHumanFeedback,
                LlmLifecycle,
                ChatbotExample,
                ChatbotBehindScenes,

                LlmCharacteristics,
                Reasoning,
                Workflows,
                Agents,

                UsageExamplesBusiness,
                UsageExamplesIndividual,
                FlowPerception,

                Economics,
                DangersA,
                DangersB,
                DangersC,
                DangersD,
                IdentifyingUse,

                Takeaways,
            ]"
        />
    </FixedSize>
</template>

<style lang="scss" scoped>
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
