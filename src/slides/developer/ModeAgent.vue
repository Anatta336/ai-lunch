<script setup></script>
<template>
    <article>
        <h1>Agent</h1>
        <ul>
            <li>Although Chat mode can suggest code, Agent mode is the best way to get Augment to write or change code.</li>
            <li>It can even run terminal commands, including adding dependencies or making curl requests to your APIs.
                <ul>
                    <li>"Auto" mode stops it asking permission before running commands. You want it to ask.</li>
                </ul>
            </li>
            <li>Before starting an Agent session, <strong>commit your changes</strong>.
                <ul>
                    <li>Augment can make edits to multiple files and they might be totally misguided.</li>
                    <li>Committing often means you can always restore back to a good state.</li>
                </ul>
            </li>
            <li>Agent mode can run for minutes at a time, but don't just ignore it.
                <ul>
                    <li>Follow along with what it's doing and see if you agree.</li>
                    <li>If it's on the wrong track stop, start a new Agent session, and add more information to your prompt.</li>
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

    padding: 0 180px;

    > ul > li {
        margin-bottom: 1rem;
    }
}
</style>