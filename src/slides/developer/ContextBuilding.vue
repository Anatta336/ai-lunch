<script setup></script>
<template>
    <article>
        <h1>Feeding the Beast - Context</h1>
        <ul>
            <li>Along with our prompt, the LLM is given context to help it understand the code.</li>
            <li>Systems like Augment are basically all about finding the right context and feeding it into the LLM.</li>
            <li>It's able to find things itself, but any pointers and starting points we give will help.</li>
            <li>
                LLMs are more likely to <em>hallucinate</em> if we don't give them the context they need.
                <ul>
                    <li>LLMs are very bad at admitting they cannot do something and will produce something - even if its nonsense.</li>
                </ul>
            </li>
            <li>Giving too much context causes problems.
                <ul>
                    <li>LLMs get measurably less capable if they have to shift through irrelevant context.</li>
                </ul>
            </li>
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