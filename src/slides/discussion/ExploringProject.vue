<script setup></script>
<template>
    <article>
        <h1>Exploring a Project</h1>
        <ul>
            <li>
                Augment is especially good at finding relevant code in projects, even if they are quite large.
            </li>
            <li>
                Understanding how a project currently works to know where your new feature or fix will need to go.
            </li>
        </ul>
        <p class="prompt">
            &quot;Users can add photos to jobs in this system. How are the files handled?&quot;
        </p>

        <ul>
            <li>
                Even if not directly related to your task, finding similar code can help make sure you fit in with the project's style and code standards.
            </li>
        </ul>
        <p class="prompt">
            &quot;Give an example of code from this project that generates a PDF export.&quot;
        </p>
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

    h1 {
        text-align: center;
    }

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

    .prompt {
        background-color: #455e80;
        padding: 10px 20px;
        border-radius: 10px;
        text-align: center;
        max-width: 800px;
        margin-bottom: 10px;
    }

    .form {
        float: right;
        max-width: 600px;
        margin-left: 40px;

        box-shadow: 0px 6px 15px 4px rgb(0 0 0 / 60%);
    }
}
</style>