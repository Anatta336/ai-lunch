<script setup></script>
<template>
    <article>
        <h1>Poor Prompting</h1>
        <p>&quot;The user page is bugged can you fix it and make the button layout work better on mobile too.&quot;</p>
        <ul>
            <li>Even a human would find this unworkable without more information.</li>
            <li>Not clear what the bug is, or how we want it to work once fixed.</li>
            <li>The LLM cannot see the page so will have to guess what's wrong with the button layout.</li>
            <li>Combining two unrelated changes.</li>
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