<script setup></script>
<template>
    <article>
        <h1>Dangers - Confidently Incorrect</h1>
        <p>ChatGPT actively suggested generating a diagram, which it got wrong.</p>
        <div class="images">
            <img src="@/assets/images/trigeminal-ai.png" alt="Open AI generating an incorrect neuro-anatomy diagram" />
            <img src="@/assets/images/trigeminal-real.png" alt="A basic but accurate diagram from mqneurosurgery.com.au" />
        </div>
        <p>Knowing how this image generation works, it was very unlikely to get an anatomical diagram correct. But the system still confidently offered to create it.</p>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 160px;

    > ul > li {
        margin-bottom: 2rem;
    }

    .images {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        img {
            max-width: 600px;
            margin: 0 20px;
        }
    }
}
</style>