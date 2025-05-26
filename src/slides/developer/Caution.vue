<script setup></script>
<template>
    <article>
        <h1>Dangers</h1>
        <ul>
            <li>LLMs are especially good at writing subtle bugs.
                <ul>
                    <li>Think of AI image generation that looks good as a whole, but the details are wrong.</li>
                </ul>
            </li>
            <li>You must understand the code.
                <ul>
                    <li>You are still responsible for what the LLM writes.</li>
                    <li>It can be a great stepping off point for learning, but don't skip the learning part.</li>
                </ul>
            </li>
            <li>Do not assume the AI knows better.
                <ul>
                    <li>Its training data likely had more student projects than high quality professional code.</li>
                </ul>
            </li>
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

    padding: 0 100px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>