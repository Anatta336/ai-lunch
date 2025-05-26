<script setup></script>
<template>
    <article>
        <div class="content">
            <h1>Reinforcement Learning from Human Feedback - RLHF</h1>
            <p>
                The model practices its new skills, and is graded based on what humans think.
            </p>
            <img src="@/assets/images/rlhf.png" alt="rlhf" />
            <ul>
                <li>
                    Presented with an instruction and asked to give a response, just like it will be when used in real life.
                    <ul>
                        <li>Responses that humans like are rewarded.</li>
                        <li>Usually not checked by an actual human.</li>
                        <li>Another LLM has been trained on human ratings to rate the new model's responses much faster than a human could.</li>
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

    padding: 0 80px;

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