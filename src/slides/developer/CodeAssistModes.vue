<script setup></script>
<template>
    <article>
        <h1>Ways to Use an AI Coding Assistant</h1>
        <figure>
            <div class="set">
                <h2>Auto-Complete</h2>
                <p>Looks at what you're typing and guesses the rest of the line(s).</p>
                <ul>
                    <li>Good naming and leading with a comment help it guess what to do.</li>
                </ul>
            </div>
            <div class="set">
                <h2>Chat</h2>
                <p>The classic ChatGPT-like experience, but with access to your project files.</p>
                <ul>
                    <li>"How is syncing to Xero handled?"</li>
                    <li>"Where are uploaded photos stored?"</li>
                </ul>
            </div>
            <div class="set">
                <h2>Agent</h2>
                <p>Given a goal it will edit files and run commands to try to achieve it.</p>
                <ul>
                    <li>Can be a huge time saver.</li>
                    <li>Very powerful, and easy to misuse.</li>
                </ul>
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
    grid-template-columns: 1fr 1fr 1fr;
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
    align-content: flex-start;
    align-items: stretch;
    justify-content: center;
    gap: 10px;

    h2 {
        flex: 1 0 100%;
        text-align: center;
        margin: 0;
    }

    background-color: #455e80;

    &:nth-of-type(2) {
        background-color: #478c81;
    }
    &:nth-of-type(3) {
        background-color: #94534e;
    }
}
</style>