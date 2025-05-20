<script setup></script>
<template>
    <article>
        <div class="content">
            <h1>What it is like to be an LLM?</h1>
            <ul>
                <li>It's a bad idea to anthropomorphise machines, but let's do it anyway!
                    <ul>
                        <li>Humans are very good at understanding how complex human-like minds work.</li>
                        <li>Just remember we're using this as a shortcut for learning, and LLMs do not have consciousness.<br> Probably.</li>
                    </ul>
                </li>
            </ul>
            <img src="@/assets/images/empty-mind.png" alt="Empty-mind" />
            <ul>
                <li>We'll imagine we are an LLM going through training and inference.</li>
                <li>You start out knowing nothing.</li>
                <li>You have no body and no senses, you don't experience the passage of time.</li>
                <li>Your memory for facts is broadly like a human's.
                    <ul>
                        <li>You can't remember every detail.</li>
                        <li>Memories get fuzzy and mixed up sometimes.</li>
                        <li>You <strong>do not</strong> have a database to store information.</li>
                    </ul>
                </li>
            </ul>
        </div>
    </article>
</template>
<style lang="scss" scoped>
article {
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