<script setup></script>
<template>
    <article>
        <h1>Leading the Conversation</h1>
        <ul>
            <li>Read what the LLM is writing while it "thinks" to monitor it.
                <ul>
                    <li>It'll write out its plan - does it make sense given what you know?</li>
                    <li>Is it looking at files not related to the problem?</li>
                </ul>
            </li>
            <li>Start reviewing code as soon as it writes it.</li>
            <li>If you don't understand why it made a change, ask it.
                <ul><li>Remember, it is trained to sound like it knows what it's doing. Remain critical.</li></ul>
            </li>
            <li>Tell it about edge-cases you spot.</li>
            <li>If it is seriously wrong start a new session to clear context.
                <ul>
                    <li>Start fresh with a prompt that directs away from this bad path.</li>
                    <li>Keeping the same "conversation" going will include all the wrong context that'll confuse it.</li>
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