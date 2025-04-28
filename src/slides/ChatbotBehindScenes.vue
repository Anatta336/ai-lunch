<script setup>
import NumberOutput from '@/components/NumberOutput.vue';
import { ref, computed } from 'vue';

const input = ref(
`SYSTEM: You are a general purpose assistant. Answer the user's questions.
USER: What is the capital of Nigeria?
ASSISTANT: `);

const remainingOutput = 'The capital of Nigeria is Abuja.'.split(' ');

const possibleOutput = [
    [
        { label: 'The',        probability: 0.94 },
        { label: 'Nigeria\'s', probability: 0.06 },
        { label: 'Abuja.',      probability: 0.02 },
    ],
    [
        { label: 'capital', probability: 0.98 },
        { label: 'current', probability: 0.04 },
        { label: 'city', probability: 0.02 },
    ],
    [
        { label: 'of',       probability: 0.89 },
        { label: 'city',     probability: 0.12 },
        { label: 'province', probability: 0.01 },
    ],
    [
        { label: 'Nigeria', probability: 0.99 },
        { label: 'the',     probability: 0.02 },
        { label: 'modern',  probability: 0.01 },
    ],
    [
        { label: 'is',     probability: 0.98 },
        { label: 'was',    probability: 0.04 },
        { label: 'became', probability: 0.02 },
    ],
    [
        { label: 'Abuja.', probability: 0.99 },
        { label: 'Lagos.', probability: 0.02 },
        { label: 'the',    probability: 0.01 },
    ],
];

const nextToken = ref(remainingOutput.shift());
const indexOfPossible = ref(0);

const hasNextToken = computed(() => !!nextToken.value);

const possibleTokens = computed(() => possibleOutput[indexOfPossible.value] ?? []);

function advance() {
    if (hasNextToken.value) {
        input.value += nextToken.value + ' ';
    }

    nextToken.value = remainingOutput.shift();

    indexOfPossible.value += 1;
}
</script>
<template>
    <article>
        <h1>The LLM Chatbot - Behind the Scenes</h1>
        <p>
            Input to the model:
        </p>
        <pre>{{ input }}</pre>


        <NumberOutput
            :results="possibleTokens"
            height="200"
        />

        <!-- <pre v-if="hasNextToken">{{ nextToken }}</pre>
        <pre v-else>[END]</pre> -->
        <button
            :disabled="!hasNextToken"
            @click="advance"
        >
            Predict
        </button>
        <p>
            The chatbot produces a response by predicting what what word is likely to
            come next given the text up to that point.
        </p>
        <p>
            It proceeds one word (actually one token) at a time, adding the word it predicted
            back into its input for the next prediction.
        </p>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 100px;
}
p {
    width: 100%;
}
pre {
    width: 100%;
    margin: 0;
}

button {
    margin-top: 20px;
    scale: 2;
}
</style>