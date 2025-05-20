<script setup></script>
<template>
    <article>
        <h1>What LLMs Do</h1>
        <ul>
            <li><em>Large Language Models</em> are the technology behind services like ChatGPT and coding assistants.</li>
            <li>Trained on huge amounts of text, based on that they generate text which includes code and answers to questions.</li>
            <li>The LLM has a fuzzy "memory" of all the training text. It has much better access to information in its <em>Context Window.</em>
                <ul>
                    <li>Your prompt.</li>
                    <li>Context added in.</li>
                </ul>
            </li>
            <li>It's better at things that show up more often in its original training data.
                <ul>
                    <li>The training data is code it read on the internet, <em>not</em> your project's code.</li>
                </ul>
            </li>
            <li>The LLM can try doing almost anything. We guide it towards the thing we do want it to do.</li>
            <li>Don't try to replace your knowledge and experience with an LLM, but do let it speed you up.</li>
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
</style>