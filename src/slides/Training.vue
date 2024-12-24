<script setup>
import trainingTwo from '../assets/images/training-two.png';
import trainingFour from '../assets/images/training-four.png';
import trainingNine from '../assets/images/training-nine.png';

</script>
<template>
    <article>
        <h1>Training</h1>
        <ul>
            <li>Before a model can be used it must be trained.</li>
            <li>Training sets the parameters of the model, such as the weights for the connections between layers.</li>
            <li>Training relies on having a large set of example input data with correct output values.</li>
            <li>For each example, the model is run and the "error" is found by comparing the output to the correct value.</li>
            <li>The parameters of the model are adjusted to to reduce the error.</li>
            <li>The maths behind that adjustment is called "backpropagation".</li>
        </ul>
        <div class="example-images">
            <img :src="trainingTwo" alt="Handwritten number two" />
            <img :src="trainingFour" alt="Handwritten number four" />
            <img :src="trainingNine" alt="Handwritten number nine" />
        </div>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.example-images {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 2rem;
}
</style>