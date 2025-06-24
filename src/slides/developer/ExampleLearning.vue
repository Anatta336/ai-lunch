<script setup></script>
<template>
    <article>
        <h1>Example - Learning</h1>
        <p>You want to learn a language, framework, platform, technology, design pattern, or almost anything else.</p>
        <ul>
            <li>Start with real human resources.
                <ul>
                    <li>An expert human will always give better information than the LLM.</li>
                    <li>The first steps are most important for building up your mental model correctly.</li>
                </ul>
            </li>
            <li>Jump in to making something.
                <ul>
                    <li>Avoid prompting Augment to make the whole thing.</li>
                    <li>It definitely can make a tutorial app in a single prompt, but you'll learn much less.</li>
                    <li>Instead, build it up step by step.</li>
                    <li>When you hit blockers, ask Augment.</li>
                </ul>
            </li>
            <li>Ask lots of questions.
                <ul>
                    <li>The AI is not as good as a real human expert, but it has infinite patience.</li>
                    <li>"Why do I need to pass this by reference instead of value?"</li>
                    <li>"How does this block of code work?"</li>
                    <li>"Does this for loop break when modifying the collection it's iterating over?"</li>
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