<script setup></script>
<template>
    <article>
        <h1>Chat</h1>
        <ul>
            <li>The most "traditional" LLM experience. You can ask questions to Augment.</li>
            <li>If you would ask a question to ChatGPT, try it in Augment. It'll have access to context of the project which can often lead to a better answer.</li>
            <li>Extremely useful for getting up to speed on an unfamiliar codebase.
                <ul>
                    <li>"Explain how this project syncs orders with Xero."</li>
                </ul>
            </li>
            <li>Ask it to check your understanding: "I think this will break if the user has no orders, is that right?"</li>
            <li>Ask it to review code: "How could this function be made more robust?"
                <ul>
                    <li>Or efficient, or readable, etc.</li>
                </ul>
            </li>
            <li>LLMs don't have a sense of persistant self or introspection.
                <ul>
                    <li>"Why did you write the code that way?"</li>
                    <li>Will give a guess by the LLM rather than really explaining its thinking.</li>
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

    padding: 0 180px;

    > ul > li {
        margin-bottom: 1rem;
    }
}
</style>