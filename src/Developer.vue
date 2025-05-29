<script setup>
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';
import BadPrompt from './slides/developer/BadPrompt.vue';
import BetterPrompt from './slides/developer/BetterPrompt.vue';
import ContextBuilding from './slides/developer/ContextBuilding.vue';
import FailureModes from './slides/developer/FailureModes.vue';
import Iterative from './slides/developer/Iterative.vue';
import Title from './slides/developer/Title.vue';
import LlmsA from './slides/developer/LlmsA.vue';
import NumberConvolutionInside from './slides/developer/NumberConvolutionInside.vue';
import Caution from './slides/developer/Caution.vue';
import LlmLifecycle from './slides/developer/LlmLifecycle.vue';
import LlmInput from './slides/developer/LlmInput.vue';
import CodeQuality from './slides/developer/CodeQuality.vue';
import ModeAutoComplete from './slides/developer/ModeAutoComplete.vue';
import ModeChat from './slides/developer/ModeChat.vue';
import ModeAgent from './slides/developer/ModeAgent.vue';
import Tips from './slides/developer/Tips.vue';
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
                LlmsA,
                LlmLifecycle,
                CodeQuality,
                ModeAutoComplete,
                ModeChat,
                ModeAgent,
                LlmInput,
                ContextBuilding,
                BadPrompt,
                BetterPrompt,
                FailureModes,
                Iterative,
                Caution,
                Tips,
                NumberConvolutionInside,
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
