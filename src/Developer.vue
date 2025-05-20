<script setup>
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';
import BadPrompt from './slides/developer/BadPrompt.vue';
import BetterPrompt from './slides/developer/BetterPrompt.vue';
import ContextBuilding from './slides/developer/ContextBuilding.vue';
import FailureModes from './slides/developer/FailureModes.vue';
import Iterative from './slides/developer/Iterative.vue';
import Title from './slides/developer/Title.vue';
import WhatLlmsDo from './slides/developer/WhatLlmsDo.vue';
import ModelLifecycle from './slides/developer/ModelLifecycle.vue';
import NumberConvolutionInside from './slides/developer/NumberConvolutionInside.vue';
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
                WhatLlmsDo,
                ModelLifecycle,
                BadPrompt,
                BetterPrompt,
                ContextBuilding,
                FailureModes,
                Iterative,
                NumberConvolutionInside
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
