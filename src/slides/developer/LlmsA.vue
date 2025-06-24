<script setup></script>
<template>
    <article>
        <h1>Large Language Models</h1>
        <ul>
            <li><strong>Large Language Models</strong> (LLMs) are the technology behind services like ChatGPT and coding assistants like Augment.</li>
            <li>Trained on huge amounts of text, mostly pulled from the internet.</li>
            <li>From that training they have learnt many things including how to follow instructions, answer questions, and write code.</li>
            <li>The LLM has an imperfect "memory" of everything it saw during training.</li>
            <li>An LLM can <strong>almost</strong> do almost anything.</li>
            <li>Possibly the biggest change in what computers can do since the internet.</li>
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