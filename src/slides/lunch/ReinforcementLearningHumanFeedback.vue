<script setup></script>
<template>
    <article>
        <div class="content">
            <h1>Reinforcement Learning from Human Feedback - RLHF</h1>
            <p>
                You start practicing your new skills, and are graded by what humans think.
            </p>
            <img src="@/assets/images/rlhf.png" alt="rlhf" />
            <ul>
                <li>
                    You're presented with an instruction and asked to give a response.
                    <ul>
                        <li>If that response is something humans like, you are rewarded.</li>
                        <li>Your responses aren't usually checked by an actual human.</li>
                        <li>Another AI has been trained on a thousands of human ratings to rate your millions of responses.</li>
                        <li>This is called reinforcement learning from human feedback or RLHF.</li>
                    </ul>
                </li>
                <li>Because you're trained to give answers that sound useful and pleasing to humans, you learn to sound confident - regardless of whether you're correct.</li>
                <!-- <li>Other types of domain-specific reinforcement learning can be done.
                    <ul>
                        <li>Given a treat if the code you write actually works.</li>
                        <li>Given a treat if the mathematical equation you write gives the right answer.</li>
                        <li>There needs to be a way to mark how good the response the LLM gave is.</li>
                        <li>It's hard to accurately check if a business plan in a response is going to make profit, but it's possible to check if it sounds right.</li>
                    </ul>
                </li> -->
                <li>Being "rewarded" actually means your weights are adjusted to make giving responses like that more likely.</li>
            </ul>
        </div>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content > ul > li {
        margin-bottom: 3rem;
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