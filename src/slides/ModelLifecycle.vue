<script setup></script>
<template>
    <article>
        <h1>Model Life Cycle</h1>
        <ul>
            <li>Training and running the model are entirely separate.</li>
            <li>
                Training
                <ul>
                    <li>Feeding in lots of example data.</li>
                    <li>Sets weights (a.k.a. parameters) of the model until it can predict mostly correctly.</li>
                </ul>
            </li>
            <li>
                Inference
                <ul>
                    <li>Actually using the model.</li>
                    <li>Giving an input and receiving an output.</li>
                    <li>Doesn't change the model.</li>
                    <li>The model is <strong>not</strong> learning when it's used.</li>
                </ul>
            </li>
            <li>
                Developers might end up using the inputs from inference for future training.
            </li>
        </ul>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>