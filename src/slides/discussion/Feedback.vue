<script setup></script>
<template>
    <article>
        <h1>Discussion</h1>
        <ul>
            <li>General experience using AI in your work.</li>
            <li>What puts you off using AI?</li>
            <li>Examples of it working well for you.</li>
            <li>Has it caused problems or wasted time?</li>
            <li>What has surprised you?</li>
            <li>Your advice for other developers.</li>
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

    padding: 0 160px;

    p {
        margin: 0;
    }

    > ul > li {
        margin-bottom: 1rem;
    }

    code {
        background-color: #455e80;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 24px;
    }
}
</style>