<script setup></script>
<template>
    <article>
        <h1>Identifying Good Uses</h1>
        <p>Do use LLMs, but do it with a critical eye.</p>
        <ul>
            <li>
                Is it a problem when the LLM gets something wrong?
                <ul>
                    <li>Will the error be noticed and corrected?</li>
                    <li>Are the repercussions of it going wrong sufficiently small?</li>
                </ul>
            </li>
            <li>
                Will the LLM actually save time?
                <ul>
                    <li>Checking the result may take almost as long as just doing it.</li>
                    <li>Preparing information the LLM will need can take time.</li>
                </ul>
            </li>
            <li>
                How often is the LLM getting the task right?
                <ul>
                    <li>This can vary hugely depending on the task.</li>
                    <li>There are general principles for what works, but the best test is to try it and record outcomes.</li>
                    <li>If you cannot reliably measure the quality of the outcome, that's a sign to not use AI.</li>
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

    padding: 0 80px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>