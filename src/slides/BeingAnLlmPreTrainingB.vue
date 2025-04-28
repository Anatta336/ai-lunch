<script setup></script>
<template>
    <article>
        <h1>Pre-Training</h1>
        <p>Although you're "just" guessing the missing tokens, there's more going on.</p>
        <ul>
            <li>
                To do it accurately you need to:
                <ul>
                    <li>Understand how sentences are structured.</li>
                    <li>Know facts about the world.</li>
                    <li>Understand how people react to events.</li>
                    <li>Know how physical systems react to events.</li>
                </ul>
            </li>
            <li>
                The knowledge you build is very different to how a human would know the same things.
                <ul>
                    <li>You've never seen a sunset.</li>
                    <li>You've trained on books about the physics of Rayleigh scattering.</li>
                    <li>You've trained on thousands of poems about the experience of watching a sunset.</li>
                    <li>You've trained on philosophy about the difference between knowing something and experiencing it.</li>
                </ul>
            </li>
            <li>
                This process is the most expensive part of training.
                <ul>
                    <li>Takes weeks to months and costs millions of dollars.</li>
                </ul>
            </li>
        </ul>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>