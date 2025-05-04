<script setup></script>
<template>
    <article>
        <h1>What is Machine Learning?</h1>
        <ul>
            <li>
                An alternative to giving computers a series of instructions.
            </li>
            <li>
                Instead of instructions, provide a lot of example inputs with their correct output.
            </li>
            <li>
                The computer "learns" rules for itself based on those examples.
            </li>
            <li>
                The recent widely known advances in AI have been around Large Language Models and Diffusion Models, which are all examples of machine learning being used for generation of text and images.
                <ul>
                    <li>Known as generative AI.</li>
                </ul>
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

    padding: 0 100px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
li {
    margin: 10px 0;
}
</style>