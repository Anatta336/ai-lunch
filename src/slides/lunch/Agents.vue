<script setup></script>
<template>
    <article>
        <h1>Agents</h1>
        <ul>
            <li>
                Rather than the pre-defined steps of a workflow, an "agent" is an LLM that decides what it'll do next.
            </li>
            <li>
                By giving the LLM access to a set of tools it can choose which to use, and use the results of those tools to decide its next steps.
                <ul>
                    <li>
                        Rather than the LLM trying to do things it's bad at like calculating numbers, it can use a much faster and more accurate calculator tool.
                    </li>
                </ul>
            </li>
            <li>
                There's lots of exciting possibilities with agents, and they're doing very useful things when properly supervised.
                <ul>
                    <li>
                        People like to get excited about fully autonomous agents, but for now they almost always get stuck or go wrong.
                    </li>
                </ul>
            </li>
            <li>
                Agents that help a developer write computer code are one of the more successful cases.
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