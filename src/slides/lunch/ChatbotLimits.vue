<script setup></script>
<template>
    <article>
        <h1>What Doesn't an LLM Know?</h1>
        <ul>
            <li>
                This way of "knowing facts", "making decisions" and "reasoning" is fundamentally different
                from how humans do it.
                <ul>
                    <li>
                        It can be effective.
                    </li>
                    <li>
                        It gets things wrong in ways very different from humans.
                    </li>
                </ul>
            </li>
            <li>
                On its own, an LLM has no concept of truth. Just high probability outputs.
                <ul>
                    <li>
                        They will often "hallucinate" and produce incorrect information.
                    </li>
                    <li>
                        This is inherent to their nature.
                    </li>
                    <li>
                        Something that "sounds right" is as true to the LLM as something that actually is right.
                    </li>
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

    padding: 0 100px;
}
li {
    margin: 15px 0;
}
</style>