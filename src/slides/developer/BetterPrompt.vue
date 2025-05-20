<script setup></script>
<template>
    <article>
        <h1>Better Prompting</h1>
        <p>&quot;After saving changes to a user, the Role dropdown is always blank. Vue 2 component <em>@User.vue</em> and backend <em>@UserController.php</em> in Laravel 11. The dropdown uses VueSelect 3.&quot;</p>
        <ul>
            <li>We still haven't worked out the cause, but we give enough information that the LLM has a decent chance of finding it.</li>
            <li>Although we don't explicitly state expected behaviour, an LLM is able to infer that the Role dropdown shouldn't be blank.</li>
            <li>Reference files we think are relevant.
                <ul>
                    <li>Using @ with Augment allows you to select a file to include in the context.</li>
                </ul>
            </li>
            <li>Relevant version numbers. Especially good if we're using an unusual version.</li>
            <li>Just one change. We'll deal with the button layout in a separate agent session.</li>
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
        margin-bottom: 1rem;
    }
}
</style>