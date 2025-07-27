<script setup></script>
<template>
    <article>
        <h1>Planning</h1>
        <ul>
            <li>
                So long as we have enough information on what exactly is needed, Augment can refer to the project's code to plan the implementation of a new feature.
            </li>
            <li>
                Even in agent mode, it doesn't have to change files.
            </li>
        </ul>
        <p class="prompt">
            &quot;Prepare a plan to add the ability for users to drag items on the calendar to change their ordering within the day.&quot;
        </p>
        <ul>
            <li>
                Review that plan, ask questions and suggest improvements.
            </li>
            <li>
                If there were significant changes, copy-paste the latest plan in to a new agent session to reduce unrelated context.
            </li>
        </ul>
        <p class="prompt">
            &quot;Please implement this plan to add the ability to change the ordering of items on the calender.&quot;
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

    ul {
        width: 100%;
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