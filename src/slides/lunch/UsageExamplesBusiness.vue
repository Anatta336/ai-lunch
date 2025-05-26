<script setup></script>
<template>
    <article>
        <h1>Use Cases within the Business</h1>
        <ul>
            <li>
                Code writing
                <ul>
                    <li>On the small scale it can guess what a developer is going to type next and save them time.</li>
                    <li>Given clear enough instructions, agents can be more independent and write moderately good code.</li>
                    <li>Code you care about working correctly must be reviewed by someone who knows what they're doing.</li>
                </ul>
            </li>
            <li>
                First drafts of reports
                <ul>
                    <li>We provide relevant information and have an LLM generate a first draft.</li>
                    <li>Gets past the "blank page" stage and gives a good starting point. Can be good enough to be left.</li>
                    <li>Will sometimes contain errors or <strong>false promises</strong>, so needs to be reviewed.</li>
                </ul>
            </li>
            <li>
                Checking work
                <ul>
                    <li>Check if text (either written by a human or an LLM) covers all the points it was meant to.</li>
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