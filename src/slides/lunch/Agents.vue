<script setup></script>
<template>
    <article>
        <h1>Agents</h1>
        <ul>
            <li>
                Add self-checking and loops to a workflow, and you've built an agent.
            </li>
            <li>
                Agents are often combined with "tool use" where the LLM is is given a list of programs it can use.
                <ul>
                    <li>
                        Rather than the LLM trying to do things it's bad at like calculating numbers, it can use a much faster and more accurate calculator tool.
                    </li>
                </ul>
            </li>
            <li>
                There's lots of exciting possibilities with agents, but they are still in the early stages.
                <ul>
                    <li>
                        The hope is to be able to make fully autonomous agents, but they go wrong often enough that they still need human supervision for practical tasks.
                    </li>
                </ul>
            </li>
            <li>
                Agents that write computer code are one of the more successful cases.
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

    padding: 0 120px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>