<script setup></script>
<template>
    <article>
        <h1>Tips</h1>
        <ul>
            <li>Slow SQL query?
                <ul>
                    <li>Add "EXPLAIN ANALYZE" at the start and run it.</li>
                    <li>Put the query and the result into Augment and ask it to suggest optimisations.</li>
                </ul>
            </li>
            <li>Learn big picture concepts from human sources.
                <ul>
                    <li>Let the LLM help you apply them.</li>
                    <li>Ask questions to the LLM that clarify your understanding.</li>
                </ul>
            </li>
            <li>Try literally using the objective or action of a task as your prompt.
                <ul>
                    <li>Even if it doesn't work, it'll often show what extra information you need to give.</li>
                    <li>If it is enough, you can save a huge amount of time.</li>
                </ul>
            </li>
            <li>When it has finished writing code, just add "Can you make this code better?"
                <ul>
                    <li>It is not going to be offended.</li>
                </ul>
            </li>
            <li>It can generate Mermaid diagrams, ready for documenting projects.</li>
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

    padding: 0 160px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>