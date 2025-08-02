<script setup></script>
<template>
    <article>
        <h1>LLM Demo</h1>
        <ul>
            <li>
                The big models like those by ChatGPT need specialist hardware.
            </li>
            <li>
                The smallest LLMs can be run on a laptop and even some phones.
                <ul>
                    <li>They perform noticeably worse, but work the same way.</li>
                </ul>
            </li>
        </ul>
        <figure>
            <div class="set user">
                <h2>User</h2>
                <p>Types in a prompt for the LLM.</p>
            </div>
            <div class="arrow">→</div>
            <div class="set llm">
                <h2>LLM</h2>
                <p>Reads the prompt and generates a reply based on its built-in knowledge.</p>
            </div>
        </figure>
        <ul>
            <li>
                Note that LLMs can run without an internet connection.
                <ul>
                    <li>
                        In practice most LLMs get connected up to external services to let them do more things.
                    </li>
                    <li>
                        But your zombie apocalypse can have LLMs.
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
}

figure {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    gap: 10px;
    row-gap: 0px;
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