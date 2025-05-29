<script setup></script>
<template>
    <article>
        <h1>Auto-Complete</h1>
        <ul>
            <li>Augment can suggest code as you type, based on the surrounding context and what you've typed so far.</li>
            <li>It can also do <strong>next edit</strong> prediction that guesses where you'll go next.
                <ul>
                    <li>If I import a component in Vue, it might suggest moving down and adding it to the Components list.</li>
                </ul>
            </li>
            <li>Start with a comment that explains what the next block of code will do, or start writing a function with a clear name. Augment will be much better at predicting the code.</li>
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
        margin-bottom: 1rem;
    }
}
</style>