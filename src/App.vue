<script setup>
import Title from './slides/Title.vue';
import ExampleOne from './slides/ExampleOne.vue';
import Background from './components/Background.vue';
import FixedSize from './components/FixedSize.vue';
import SlideChanger from './components/SlideChanger.vue';
</script>

<template>
    <Background>
        <FixedSize
            class="slide-container"
            :width="1600"
            :height="900"
            :margin="40"
        >
            <SlideChanger
                :slides="[
                    Title,
                    ExampleOne,
                ]"
            />
        </FixedSize>
    </Background>
</template>

<style lang="scss" scoped>
.slide-container {
    position: relative;

    border-radius: 10px;

    backdrop-filter: blur(15px);
    background-color: rgba(52, 47, 72, 0.8);

    // Mask off 20px border. So the element can be large enough to pick up nearby
    // background to blur, without actually being that large.
    // Not compatible with border-radius.
    // mask: linear-gradient(black, black) 20px 20px/calc(100% - 40px) calc(100% - 40px) no-repeat;
}
</style>
