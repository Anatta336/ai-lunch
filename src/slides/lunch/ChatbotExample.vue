<script setup>

</script>
<template>
    <article>
        <h1>Conversation with an LLM</h1>
        <p class="input">
            What is the capital of Nigeria?
        </p>
        <p class="output">
            The capital of Nigeria is Abuja.
        </p>
        <p class="input">
            When did it become the capital?
        </p>
        <p class="output">
            Abuja was declared the capital of Nigeria in 1991, and it officially
            took over from Lagos as the capital on December 12, 1991.
            This decision was made by the Nigerian government to provide a neutral
            location for the country's seat of government, away from the regional
            influence of Lagos.
        </p>
        <p>
            The chatbot demonstrates general knowledge, and understands the context
            of a conversation to know what "it" refers to in the user's second question.
        </p>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 100px;
}

.input, .output {
    width: 80%;
    max-width: 800px;
    padding: 12px 16px;
    margin: 8px 0;
    border-radius: 12px;

    box-shadow: inset 0px -5px 7px 0px rgba(255, 255, 255, 0.2);
}

.input {
    align-self: flex-start;
    background-color: #0f6d49;
}

.output {
    align-self: flex-end;
    background-color: #216daf;
}

p {
    margin-bottom: 8px;
}
</style>