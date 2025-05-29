<script setup></script>
<template>
    <article>
        <h1>When LLMs Go Wrong</h1>
        <ul>
            <li>LLMs hate to say "I can't do that" and will always try.</li>
            <li>They're trained to <strong>sound authoritative</strong> and <strong>confident</strong>, even if they're wrong.
                <ul>
                    <li>Often they sound right because they are.</li>
                    <li>Sometimes they're just doing a really good impression of someone who knows what's going on.</li>
                </ul>
            </li>
            <li>If it doesn't know the name of a function, variable, or other symbol, it'll guess.
                <ul>
                    <li>Our IDEs can usually spot this for us.</li>
                    <li>The LLM making guesses like this is often a sign it lacks necessary context.</li>
                </ul>
            </li>
            <li>A common symptom of a coding agent in trouble is when it keeps writing more and more code.
                <ul>
                    <li>Even if the code works, it's often possible to simplify it.</li>
                    <li>Augment itself can do this, just prompt it to do so.</li>
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

    padding: 0 160px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>