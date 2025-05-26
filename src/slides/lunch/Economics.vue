<script setup></script>
<template>
    <article>
        <h1>The Money</h1>
        <ul>
            <li>
                Training new large language models is expensive.
                <ul>
                    <li>
                        Llama 3.1 - $60 million
                    </li>
                    <li>
                        GPT-4 - $100+ million
                        <!-- https://web.archive.org/web/20230418190335/https://www.wired.com/story/openai-ceo-sam-altman-the-age-of-giant-ai-models-is-already-over/ -->
                    </li>
                </ul>
            </li>
            <li>
                Running the models is relatively expensive.
                <ul>
                    <li>
                        Using the latest "reasoning" OpenAI model can cost $15 a minute.
                    </li>
                    <li>
                        Even for the significantly cheaper models, the cost of handling more
                        users of your AI-powered product is meaningful.
                    </li>
                </ul>
            </li>
            <li>
                Per-user cost is very different from the cost profile of traditional software. Markets may have to adjust.
            </li>
            <li>
                Companies like OpenAI have been promising the most powerful technology
                that humanity will ever create, so any cost is justified.
                <ul>
                    <li>
                        Reality is catching up.
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