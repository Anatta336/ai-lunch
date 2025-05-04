<script setup></script>
<template>
    <article>
        <h1>Examples of Our Use</h1>
        <ul>
            <li>
                Code writing.
                <ul>
                    <li>On the small scale it can guess what a developer is going to type next and save them time.</li>
                    <li>Given clear enough instructions, AIs can be more independent and write moderately good code.</li>
                    <li>Code you care about working correctly must be reviewed by someone who knows what they're doing.</li>
                </ul>
            </li>
            <li>
                First drafts of reports.
                <ul>
                    <li>We provide relevant information and have an AI generate a first draft of the summary for reports.</li>
                    <li>Gets past the "blank page" stage and can give a good starting point.</li>
                    <li>Will sometimes contain errors or <strong>false promises</strong>, so needs to be reviewed.</li>
                </ul>
            </li>
            <li>
                Unstructured data processing.
                <ul>
                    <li>When data is "messy" and generally unstructured, AI can pull it into a standard format.</li>
                    <li>It will make mistakes, so financial or other critical information needs to be checked.</li>
                </ul>
            </li>
            <li>
                Checking work.
                <ul>
                    <li>Given the original requirements, generate a list of what we should test.</li>
                    <li>Check if a plan covers all the points it was meant to.</li>
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

    padding: 0 40px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>