<script setup></script>
<template>
    <article>
        <h1>Large Language Models</h1>
        <ul>
            <li><strong>Large Language Models</strong> (LLMs) are the technology behind services like ChatGPT and coding assistants like Augment.</li>
            <li>Trained on huge amounts of text, mostly pulled from the internet.</li>
            <li>From that training they have learnt to generate text, including code and answers to questions.</li>
            <li>The LLM has an imperfect "memory" of everything it saw during training.</li>
            <li>It's better at things that show up more often in its original training data.</li>
            <!-- <li>It has more accurate access to information in its <strong>Context Window</strong>.</li>
            <li>Don't try to replace your knowledge and experience with an LLM, but do let it speed you up.</li> -->
        </ul>
    </article>
</template>
<style lang="scss" scoped>
article {
    height: 100%;
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 180px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>