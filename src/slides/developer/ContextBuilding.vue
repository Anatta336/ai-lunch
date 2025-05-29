<script setup></script>
<template>
    <article>
        <h1>Feeding the Beast</h1>
        <ul>
            <li>Along with our prompt, the LLM is given <strong>context</strong> to help it understand the code.</li>
            <li>Augment working well is all about finding the right context and feeding it into the LLM.</li>
            <li>It's able to find things itself, but any references and starting points we give will help.</li>
            <li>
                LLMs are more likely to <strong>hallucinate</strong> if we don't give them the context they need.
                <ul>
                    <li>LLMs are very bad at admitting they cannot do something and will produce something - even if its nonsense.</li>
                </ul>
            </li>
            <li>Giving <em>too much</em> context also causes problems.
                <ul>
                    <li>LLMs get measurably less capable if they have to shift through irrelevant context.</li>
                    <li>Always start a new chat or agent session for a different subject.</li>
                    <li>If Augment was doing the wrong thing, it's usually better to start fresh than try to correct it.</li>
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