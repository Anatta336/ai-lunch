<script setup>
import { onMounted, ref, computed } from 'vue';

const inputs = [0.49, 0.90, 0.00, 0.72, 0.00, 0.32];
const weights = [
    [ 0.71, -0.69,  0.64,  0.60, -0.85, -0.11],
    [-0.3,   0.76, -0.92,  0.84, -0.80,  0.43],
    [ 0.53, -0.43, -0.67, -0.88,  0.70,  0.52],
];

const outputs = weights.map((outputWeights) => {
    const sum = outputWeights.reduce((sum, weight, index) => {
        return sum + weight * inputs[index];
    }, 0);

    return Math.max(0, sum);
});

let inputElements = [];
let outputElements = [];
const lineSets = ref([]);
const mouseOverOutput = ref(null);

const explanation = computed(() => {
    if (mouseOverOutput.value === null) {
        return '';
    }

    const weights = lineSets.value[mouseOverOutput.value];

    let explanation = '';
    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        explanation += `(${weight.input.toFixed(1)} × ${weight.weight.toFixed(1)})`;
        sum += weight.weight * weight.input;
        if (i < weights.length - 1) {
            explanation += ' + ';
        }
    }

    explanation += ` = ${sum.toFixed(1)}\n`;

    return explanation;
});

function getLineProperties(inputElement, outputElement, inputIndex, outputIndex) {
    return {
        x1: inputElement.offsetLeft + inputElement.offsetWidth / 2,
        y1: inputElement.offsetTop + inputElement.offsetHeight / 2,
        x2: outputElement.offsetLeft + outputElement.offsetWidth / 2,
        y2: outputElement.offsetTop + outputElement.offsetHeight / 2,
        weight: weights[outputIndex][inputIndex],
        input: inputs[inputIndex],
    };
}

function prepareLineSets() {
    lineSets.value = [];
    outputElements.forEach((output, outputIndex) => {
        const lineProps = [];
        inputElements.forEach((input, inputIndex) => {
            const props = getLineProperties(input, output, inputIndex, outputIndex);
            lineProps.push(props);
        });

        lineSets.value.push(lineProps);
    });
}

onMounted(() => {
    inputElements = document.querySelectorAll('.inputs .dot');
    outputElements = document.querySelectorAll('.outputs .dot');

    outputElements.forEach((output, index) => {
        output.addEventListener('click', () => {
            if (mouseOverOutput.value === index) {
                mouseOverOutput.value = null;
            } else {
                mouseOverOutput.value = index;
            }
        });
    });

    requestAnimationFrame(() => {
        prepareLineSets();
    });
});

</script>
<template>
    <article>
        <h1>Weights</h1>
        <svg v-for="(item, index) in lineSets"
            :key="index"
            class="lines"
            :class="{ 'hidden' : mouseOverOutput !== index }"
        >
            <line v-for="(lineProps, index) in item"
                :key="index"
                :x1="lineProps.x1"
                :y1="lineProps.y1"
                :x2="lineProps.x2"
                :y2="lineProps.y2"
                stroke="#79ffeb"
                stroke-width="4"
                stroke-linecap="round"
                :opacity="Math.max(0.10, Math.min(1.0, 0.10 + (lineProps.weight * 0.90)))"
            />
        </svg>
        <div class="columns">
            <div class="inputs">
                <div v-for="(item, index) in inputs"
                    :key="index"
                    class="input-row"
                >
                    <div>{{ item.toFixed(1) }}</div>
                    <div
                        class="dot"
                        :style="{
                            opacity: Math.max(0.10, Math.min(1.0, 0.10 + (item * 0.90))),
                        }"
                    ></div>
                </div>
            </div>
            <div class="outputs">
                <div v-for="(item, index) in outputs"
                    :key="index"
                    class="output-row"
                >
                    <div
                        class="dot"
                        :style="{
                            opacity: Math.max(0.10, Math.min(1.0, 0.10 + (item * 0.90))),
                        }"
                    ></div>
                    <div>{{ item.toFixed(1) }}</div>
                </div>
            </div>
        </div>
        <p class="explanation">
            {{ explanation }}
        </p>
        <p>
            The values of each node are calculated by multiplying node value from the previous layer
            with the weight for that connection.
            They are added up and put through an activation function.<br/>
            The weights are decided during training.
        </p>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.columns {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-between;
}
.input-row, .output-row {
    display: flex;
    flex-direction: row;
    gap: 15px;
    cursor: default;
}
.inputs, .outputs {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.dot {
    background-color: #79ffeb;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.outputs {
    .dot {
        cursor: pointer;
    }
}
.lines {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.hidden {
    visibility: hidden;
}
p {
    margin: 10px 200px;
}
.explanation {
    margin: 70px 0 0;
    height: 50px;
    width: 100%;
    text-align: center;
}
</style>