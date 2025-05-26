<script setup></script>
<template>
    <article>
        <h1>Dangers - Anthropomorphism</h1>
        <ul>
            <li>
                LLMs sound a lot like a human.
                <ul>
                    <li>The only natural language humans have ever encountered is from other humans.</li>
                    <li>We tend to treat LLMs as much more human than other software.</li>
                </ul>
            </li>
            <li>
                Users tend to assign more trust to LLMs than they should.
            </li>
            <li>
                Users may start to feel a personal connection to the LLM and if they're in a vulnerable state, put too much emotional weight on the LLM's responses.
            </li>
            <li>
                AI companies are already optimising models towards keeping users engaged.
                <ul>
                    <li>ChatGPT's default personality loves to suggest follow-up questions to keep the user engaged.</li>
                    <li>As budgets tighten, charging money to keep talking to "your friend" may become a common business model.</li>
                </ul>
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

    padding: 0 80px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>