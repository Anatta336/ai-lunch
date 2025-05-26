<script setup></script>
<template>
    <article>
        <div class="content">
            <h1>What it is like to be an LLM?</h1>
            <ul>
                <li>It's a bad idea to anthropomorphise machines, but let's do it anyway!
                    <ul>
                        <li>Humans are very good at understanding how complex human-like minds work.</li>
                        <li>Just remember we're using this as a shortcut for learning.</li>
                    </ul>
                </li>
            </ul>
            <img src="@/assets/images/empty-mind.png" alt="Empty-mind" />
            <ul>
                <li>We'll imagine an LLM going through training and inference.</li>
                <li>It starts out knowing nothing.</li>
                <li>It doesn't think about things, just waits for input.</li>
                <li>Its memory is more like a human's than a database.
                    <ul>
                        <li>Can't remember every detail.</li>
                        <li>Memories get fuzzy and mixed up sometimes.</li>
                    </ul>
                </li>
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