<script setup></script>
<template>
    <article>
        <h1>Use Cases as an Individual</h1>
        <ul>
            <li>
                Reviewing communication
                <ul>
                    <li>Can directly ask for feedback "does this sound professional?"</li>
                    <li>Or indirectly check you're conveying the right information "list the key action points in this email"</li>
                </ul>
            </li>
            <li>
                Explain-back learning
                <ul>
                    <li>When learning something new, write out how you understand it and ask the LLM for corrections.</li>
                    <li>Documentation written by a human is still preferred for learning initially.</li>
                </ul>
            </li>
            <li>
                Getting started
                <ul>
                    <li>Dangerous to rely on for full research.</li>
                    <li>Can give valuable summaries and starting points for learning about something wholly new.</li>
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

    padding: 0 40px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>