<script setup>
const layers = [];
const xSpace = 35;
const ySpace = 30;

for (let i = 0; i < 6; i++) {
    const nodes = [];

    const nodeCount = i % 2 === 0 ? 4 : 3;
    const offset = i % 2 === 0 ? 0 : ySpace * 0.5;
    for (let j = 0; j < nodeCount; j++) {
        nodes.push({
            key: `${i}-${j}`,
            x: 5 + i * xSpace,
            y: 5 + j * ySpace + offset,
        });
    }

    layers.push(nodes);
}

const edges = [];
for (let i = 0; i < layers.length - 1; i++) {
    const sourceLayer = layers[i];
    const targetLayer = layers[i + 1];

    for (const sourceNode of sourceLayer) {
        for (const targetNode of targetLayer) {
            edges.push({
                key: `${sourceNode.key}-${targetNode.key}`,
                source: sourceNode,
                target: targetNode,
            });
        }
    }
}
</script>
<template>
    <div class="background">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            transform="rotate(-5) translate(88, 35)"
        >
            <g v-for="layer in layers"
            >
                <circle
                    v-for="node in layer"
                    :key="node.key"
                    :cx="node.x"
                    :cy="node.y"
                    r="0.6"
                    fill="#6de6ec"
                />
            </g>
            <path v-for="edge in edges"
                :key="edge.key"
                :d="`
                    M ${edge.source.x},${edge.source.y}
                    L ${edge.target.x},${edge.target.y}
                `"
                stroke="#6de6ec"
                stroke-width="0.08"
            />
        </svg>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.background {
    position: relative;
}
svg {
    position: absolute;
    inset: 0;
}
</style>