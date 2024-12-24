<script setup></script>
<template>
    <article>
        <h1>Artificial Neural Networks</h1>
        <ul>
            <li>
                Originally inspired by neurons, but have diverged significantly.
            </li>
            <li>
                Networks are made up of layers of nodes that pass numbers between them.
            </li>
            <li>
                <strong>Weights</strong> control how numbers transfer between nodes.
            </li>
            <li>
                Each operation is simple, but the combined effect can be complex.
            </li>
            <li>
                Training is setting these weights to get the expected results.
                <ul>
                    <li>Typically using <strong>backpropagation</strong>.</li>
                    <li>Training needs lots of example data.</li>
                </ul>
            </li>
            <li>
                The architecture can have a big impact on how well it performs.
            </li>
        </ul>
    </article>
</template>
<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>