<script setup></script>
<template>
    <article>
        <h1>Code Readability</h1>
        <ul>
            <li>Augment understands English (and several other languages) in addition to code.</li>
            <li>Well named functions and variables help the LLM understand your code.</li>
            <li>Informative and accurate comments can provide hugely valuable context of <strong>why</strong> something is done.
                <ul>
                    <li>Augment can usually work out how code works, but will not know what's intentional behaviour unless we document it.</li>
                </ul>
            </li>
            <li>Augment itself often adds redundant comments.
                <ul>
                    <li>While you're reviewing the code, tidy them up and add your own better comments.</li>
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

    padding: 0 200px;

    > ul > li {
        margin-bottom: 1rem;
    }
}
</style>