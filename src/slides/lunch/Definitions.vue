<script setup></script>
<template>
    <article>
        <figure>
            <div class="set">
                <h2>Classical programming</h2>
                <p>
                    This covers almost everything we do in software and web development,
                    and how we generally interact with computers.
                </p>
            </div>

            <div class="set">
                <h2>Machine learning</h2>

                <div class="set">
                    <h2>Speech recognition</h2>
                </div>

                <div class="set">
                    <h2>Prediction</h2>
                    <ul>
                        <li>YouTube recommendations</li>
                    </ul>
                </div>

                <div class="set">
                    <h2>Image generation</h2>
                    <ul>
                        <li>Stable Diffusion</li>
                        <li>Midjourney</li>
                        <li>DALL-E (OpenAI)</li>
                    </ul>
                </div>

                <div class="set" id="llm">
                    <h2>Large language models</h2>
                    <ul>
                        <li>ChatGPT (OpenAI)</li>
                        <li>Claude (Anthropic)</li>
                        <li>Gemini (Google)</li>
                        <li>LLama (Meta)</li>
                    </ul>
                </div>
            </div>

            <figcaption>
                Mostly we control computers using classical symbolic programming.
                Machine learning offers an alternative approach.
                "AI" products are a combination of machine learning and symbolic programming.
            </figcaption>
        </figure>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
ul {
    margin: 0;
}
figure {
    display: grid;
    grid-template-columns: 1.3fr 4fr;
    gap: 10px;
    margin: 0 20px;

    figcaption {
        grid-column: 1 / -1;
    }
}

.set {
    border-radius: 20px;

    padding: 14px 32px;
    min-height: 60px;
    min-width: 60px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: stretch;
    justify-content: center;
    gap: 10px;

    h2 {
        flex: 1 0 100%;
        text-align: center;
        line-height: 1.0;
        margin: 0 0 5px 0;
    }

    #llm {
        background-color: #ae4e66;
    }

    background-color: #455e80;
    .set {
        background-color: #4ba194;
        flex: 1 0 300px;
    }
}
</style>