<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const inputText = ref('The capital of France is Paris.');
const inputRef = ref(null);

const subwordTokens = computed(() => {
    // Split input into words and punctuation, keeping both as tokens
    // \w+ matches words, \W matches single non-word (punctuation/space)
    const regex = /\w+|\W/g;
    const matches = inputText.value.match(regex) || [];
    return matches
        .map(token => {
            if (/^\w+$/.test(token)) {
                // Word: split into subwords
                const chunks = [];

                if (token.length <= 6) {
                    // Keep short words as a single token.
                    return { type: 'word', chunks: [token] };
                }

                // Split longer words into chunks of 3 or 4 characters
                let i = 0;
                while (i < token.length) {
                    const len = (i % 2 === 0 && token.length - i > 3) ? 4 : 3;
                    chunks.push(token.slice(i, i + len));
                    i += len;
                }
                return { type: 'word', chunks };
            } else if (/^\W+$/.test(token)) {
                // Punctuation or whitespace: treat each char as a token, but skip spaces
                return { type: 'punct', chunks: token.split('').filter(c => c !== ' ') };
            }
        })
        .filter(obj => obj && obj.chunks.length > 0);
});

function handleKeydown(e) {
    // Only trap if input is focused
    if (
        inputRef.value &&
        document.activeElement === inputRef.value &&
        (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
    ) {
        e.stopPropagation();
        // Allow default behavior (cursor movement)
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown, true);
});
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown, true);
});
</script>
<template>
    <article>
        <div class="content">
            <h1>Tokens</h1>
            <p>
                Just as our image model needed the image split into pixels, a language model needs text split up into tokens.
            </p>
            <p>
                Tokens can be whole words, parts of words, punctuation, or special markers used in training. They are the basic units the model understands.
                Real language models use more complex tokenization than this demo.
            </p>
            <p>
                Mostly you can just think of language models as working with words.
            </p>
            <input
                id="token-input"
                v-model="inputText"
                type="text"
                placeholder="Type something..."
                style="width: 100%;"
                ref="inputRef"
            />
            <div class="tokens">
                <template v-for="(tokenObj, tIdx) in subwordTokens" :key="'tok-' + tIdx">
                    <span v-if="tokenObj.type === 'word'" class="subword-group">
                        <span v-for="(token, idx) in tokenObj.chunks" :key="'subword-' + tIdx + '-' + idx" class="token">
                            {{ token }}
                        </span>
                    </span>
                    <span v-else class="punct-group">
                        <span v-for="(token, idx) in tokenObj.chunks" :key="'punct-' + tIdx + '-' + idx" class="token punct">
                            {{ token }}
                        </span>
                    </span>
                </template>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
    text-align: center;
}
input {
    padding: 10px;
    font-size: 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.tokens {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-top: 1em;

    .subword-group {
        display: flex;
        gap: 3px;
    }
    .punct-group {
        display: flex;
        gap: 3px;
    }
    .token {
        background: #455e80;
        border-radius: 4px;
        padding: 0.2em 0.5em;
        font-family: monospace;
    }
    .token.punct {
        background: #e0a800;
        color: #222;
    }
}
</style>