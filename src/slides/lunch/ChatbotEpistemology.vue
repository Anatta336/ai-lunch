<script setup></script>
<template>
    <article>
        <h1>What Does an LLM Know?</h1>
        <ul>
            <li>
                Our earlier example learnt the patterns of what number images look like.
                LLMs learn the patterns of language.
            </li>
            <li>
                With a huge amount of training data and using the right architecture (transformer),
                LLMs pick up on many levels of patterns.
                <ul>
                    <li>
                        How sentences are structured.
                    </li>
                    <li>
                        What a good answer to a question looks like.
                    </li>
                    <li>
                        Facts (kind of).
                    </li>
                    <li>
                        Reasoning (kind of).
                    </li>
                </ul>
            </li>
            <li>
                LLMs "just" predict the next word. But being good at predicting text,
                incidentally allows it to do some useful tasks.
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
    margin: 15px 0;
}
</style>