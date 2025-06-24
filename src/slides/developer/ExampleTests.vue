<script setup></script>
<template>
    <article>
        <h1>Example - Writing Tests</h1>
        <p>You've written a feature and want to make sure it's working as it should, and will keep doing so in the future.</p>
        <ul>
            <li>Refer Augment to the relevant files, prompt with an overview of what the feature should be doing and request it to write automated tests.
                <ul>
                    <li>If you have good quality comments explaining the purpose of your code, you don't need to explain it again to Augment.</li>
                    <li>The objective of your task can often work well here.</li>
                </ul>
            </li>
            <li>Review the tests carefully.
                <ul>
                    <li>You know best what the correct behaviour is, make sure the tests are really setting up and testing it.</li>
                    <li>Now the boring work of scaffolding the tests is done, you can add more that cover the interesting cases.</li>
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