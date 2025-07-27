<script setup>
import ContactFormExample from './ContactFormExample.vue';
</script>
<template>
    <article>
        <div class="content">
            <h1>Attachments</h1>
            <ContactFormExample class="form"/>
            <ul>
                <li>
                    Many of the latest wave of LLMs are actually Visual Language Models (VLMs), including Claude 4 as used by Augment.
                </li>
                <li>
                    They can understand images and incorporate them into their responses.
                </li>
                <li>
                    A concept image of wireframe can be included in a prompt to quickly generate HTML and CSS.
                </li>
            </ul>
            <p class="prompt">
                &quot;Populate <strong>@ContactFormExample.vue</strong> with the frontend of a contact form as shown in the attached image.<br>
                The typeface is Poppins, available from Google fonts.&quot;
            </p>
        </div>
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
    }

    .form {
        float: right;
        max-width: 600px;
        margin-left: 40px;

        box-shadow: 0px 6px 15px 4px rgb(0 0 0 / 60%);
    }
}
</style>