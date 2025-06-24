<script setup></script>
<template>
    <article>
        <h1>Large Language Model Lifecycle</h1>
        <figure>
            <div class="set">
                <h2>Training</h2>

                <div class="set">
                    Pre-training
                </div>
                <div class="set">
                    Supervised fine-tuning
                </div>
                <div class="set">
                    Reinforcement learning from human feedback
                </div>
                <p>Training LLMs is very expensive. Augment's main model was trained by Anthropic at significant cost. It's general purpose and can do many things other than write code.</p>
            </div>
            <div class="arrow">
                →
            </div>
            <div class="set">
                <h2>Inference</h2>

                <ul>
                    <li>Provide prompt and context.</li>
                    <li>Model generates a response which might activating its tools, editing files, or writing a message to the user.</li>
                    <li>The model is <strong>not</strong> learning during use.</li>
                </ul>
                <p>Using an LLM effectively is about giving it the right input.</p>
            </div>
        </figure>
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
}
ul {
    margin: 0;
}
figure {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    gap: 10px;
    margin: 0 20px;

    figcaption {
        grid-column: 1 / -1;
    }
}

.arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-shadow: #fff3ed 1px 0px 0px, #fff3ed -1px 0px 0px, #fff3ed 0px 1px 0px, #fff3ed 0px -1px 0px
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
        margin: 0;
    }

    background-color: #455e80;
    .set {
        background-color: #4ba194;
        flex: 1 0 300px;

        text-align: center;

        .set {
            background-color: #755026;
            .set {
                background-color: #e0a0b0;
            }
        }
    }
}
</style>