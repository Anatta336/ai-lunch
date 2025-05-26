<script setup>
import trainingTwo from '../../assets/images/training-two.png';
import trainingFour from '../../assets/images/training-four.png';
import trainingNine from '../../assets/images/training-nine.png';

</script>
<template>
    <article>
        <h1>Training</h1>
        <ul>
            <li>
                The weights between nodes are set by "training" the model.
            </li>
            <li>
                Training relies on having a large set of example input data with correct output values.
            </li>
            <div class="example-images">
                <img :src="trainingTwo" alt="Handwritten number two" />
                <img :src="trainingFour" alt="Handwritten number four" />
                <img :src="trainingNine" alt="Handwritten number nine" />
                <div>...and 69,997 more.</div>
            </div>
            <li>
                For each example, the model is run and the "error" is found by comparing the output to the correct value.
                <ul>
                    <li>
                        The weights of the model are adjusted to reduce the error.
                    </li>
                    <li>
                        That's (usually) done using a technique called backpropagation.
                    </li>
                </ul>
            </li>
            <li>
                A small model like this was trained in a few minutes on my PC.
            </li>
            <li>
                The training data <strong>is not</strong> stored by the model.
                <ul>
                    <li>
                        The model isn't looking through its training data to find a match.
                    </li>
                    <li>
                        This number example is trained on 18,637 KB of images, but the model is only 30 KB.
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 100px;
}
li {
    margin: 10px 0;
}
.example-images {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>