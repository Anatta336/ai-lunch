<script setup></script>
<template>
    <article>
        <h1>LLM Psychology</h1>
        <ul>
            <li>
                They are trained to give answers that look correct and helpful.
                <ul>
                    <li>
                        Often they achieve that by actually being correct and helpful.
                    </li>
                    <li>
                        Sometimes not.
                    </li>
                    <li>
                        The best models get things wrong less often than older or weaker models, but they will always get things wrong.
                    </li>
                </ul>
            </li>
            <li>
                They have a fuzzy memory of having read the internet, and a clearer view of whatever is in their context.
                <ul>
                    <li>
                        Integrating an LLM into a product is mainly about giving it the right context.
                    </li>
                </ul>
            </li>
            <li>
                Answers have a little bit of randomness, and will change each time you ask.
            </li>
            <li>
                They are always playing a role.
                <ul>
                    <li>
                        Usually we see them playing the role of a helpful assistant.
                    </li>
                    <li>
                        Even without a direct instruction, they pick up on hints at the role they should play.
                    </li>
                    <li>
                        There's no "real" personality behind the roles they play.
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

    padding: 0 40px;

    > ul > li {
        margin-bottom: 3rem;
    }
}
</style>