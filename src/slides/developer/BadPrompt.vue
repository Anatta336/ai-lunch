<script setup></script>
<template>
    <article>
        <h1>Poor Prompting</h1>
        <p class="prompt">
            &quot;The user update page is bugged can you fix it and the button layout<br>doesn't fit on mobile.&quot;
        </p>
        <ul>
            <li>Even a human would find this unworkable without more information.</li>
            <li>Not clear what the bug is, or how we want it to work once fixed.</li>
            <li>Remember the LLM cannot (currently) see the page itself so will have to guess what's wrong with the button layout.</li>
            <li>Combining two unrelated changes.</li>
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

    .prompt {
        background-color: #455e80;
        padding: 10px 20px;
        border-radius: 10px;
        text-align: center;
    }
}
</style>