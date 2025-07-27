<script setup></script>
<template>
    <article>
        <h1>Summary</h1>
        <ul>
            <li>LLMs are pretty good at a lot of coding tasks and can be a valuable tool.</li>
            <li>Work on the assumption it will get some things wrong, and you need to find them.</li>
            <li>Offload the "grunt work" to the AI, not your understanding and decisions.</li>
            <li>The code quality and the project's success is still your responsibility.</li>
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

    padding: 0 160px;

    p {
        margin: 0;
    }

    > ul > li {
        margin-bottom: 1rem;
    }

    code {
        background-color: #455e80;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 24px;
    }
}
</style>