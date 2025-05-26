<script setup></script>
<template>
    <article>
        <h1>Reasoning Models</h1>
        <ul>
            <li>
                Rather than giving an answer directly, a model can be trained to "think through" a problem by talking to itself.
                <ul>
                    <li>
                        This can be called "reasoning", "chain of thought", or "thinking".
                    </li>
                    <li>
                        Generally improves performance on more complex tasks.
                    </li>
                    <li>
                        But it seems to also increase hallucinations, especially with weaker models which can talk themselves into wrong answers.
                    </li>
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

    padding: 0 80px;

    > ul > li {
        margin-bottom: 3rem;
    }
}
</style>