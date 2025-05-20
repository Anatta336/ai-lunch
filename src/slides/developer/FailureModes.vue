<script setup></script>
<template>
    <article>
        <h1>When LLMs Go Wrong</h1>
        <ul>
            <li>LLMs hate to say "I can't do that" and will always try.</li>
            <li>They're trained to <em>sound like they're right</em>.
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
            <li>A common sign an coding agent is in trouble is when it keeps writing more and more code.
                <ul>
                    <li>LLMs usually solve problems by adding more code, which can add more problems.</li>
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

    padding: 0 100px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>