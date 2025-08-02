<script setup></script>
<template>
    <article>
        <h1>Identifying Good Uses</h1>

        <figure>
            <div class="set">
                <h2>Ability</h2>
                <ul>
                    <li>Can the LLM do the task well?</li>
                    <li>We we able to measure the quality of the outcome?</li>
                </ul>
            </div>
            <div class="arrow">→</div>
            <div class="set">
                <h2>Mistakes</h2>
                <ul>
                    <li>Does it matter if the LLM gets it wrong?</li>
                    <li>Will mistakes be noticed and corrected?</li>
                </ul>
            </div>

            <div></div>
            <div></div>
            <div class="arrow">↓</div>

            <div class="set">
                <h2>Time</h2>
                <ul>
                    <li>With setup and checks, is an LLM actually faster?</li>
                </ul>
            </div>
            <div class="arrow">←</div>
            <div class="set">
                <h2>Setup</h2>
                <ul>
                    <li>Are we able to gather the information the LLM will need?</li>
                </ul>
            </div>

            <div class="arrow">↓</div>
            <div></div>
            <div></div>

            <div class="set">
                <h2>Cost</h2>
                <ul>
                    <li>LLMs are not free to run, especially the larger more capable models.</li>
                </ul>
            </div>
            <figcaption>Try using LLMs where you can, but do it with a critical eye.</figcaption>
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

    padding: 0 80px;

    > ul > li {
        margin-bottom: 2rem;
    }
}

figure {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    gap: 10px;
    row-gap: 0px;
    margin: 0 20px;

    figcaption {
        grid-column: 2 / -1;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0 80px;
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
    row-gap: 0px;

    background-color: #455e80;

    h2 {
        flex: 1 0 100%;
        text-align: center;
        margin: 0;
    }

    ul {
        margin: 0;
    }

    &.user {
        background-color: #455e80;
    }
    &.llm {
        background-color: #ae4e66;
    }
    &.database {
        background-color: #484aa9;
    }
    &.expert-human {
        background-color: #4ba194;
    }
}
</style>