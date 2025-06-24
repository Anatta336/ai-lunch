<script setup></script>
<template>
    <article>
        <div class="content">
            <h1>A Delusional Sycophant with Nothing to Lose</h1>
            <p>
                From a combination of how they're trained and how the underlying technology works, LLMs tend to have certain "personality" traits.
            </p>
            <img src="@/assets/images/rlhf.png" alt="rlhf" />
            <ul>
                <li>Literally doesn't know if it's guessing ("hallucinating") or actually knows something.</li>
                <li>Rarely says "I don't know" or "I can't do that".</li>
                <li>Very good at sounding helpful and correct, even when they're not.</li>
                <li>Prefer to agree with the user, even when they're wrong.</li>
                <li>They will suffer no consequences for destroying your project.</li>
            </ul>
        </div>
    </article>
</template>
<style lang="scss" scoped>
article {
    height: 100%;
    text-wrap: pretty;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 80px;

    .content > ul > li {
        margin-bottom: 1rem;
    }
}
h1 {
    text-align: center;
}
img {
    float: right;
    max-width: 600px;
    margin-left: 20px;
}
</style>