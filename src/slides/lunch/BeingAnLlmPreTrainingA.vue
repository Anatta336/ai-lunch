<script setup></script>
<template>
    <article>
        <div class="content">
            <h1>Pre-Training</h1>

            <p>
                Pre-training gives knowledge.
            </p>

            <img src="@/assets/images/pre-training.png" alt="Pre-training" />
            <ul>
                <li>
                    The model is given a large amount of written content to learn from.
                </li>
                <li>
                    It learns the text by being shown a block of text with some tokens removed, and asked to guess what should be there.
                    <ul>
                        <li>"The capital of ___ is Paris."</li>
                        <li>"Evan cried out in ___ when he saw he'd won the lottery."</li>
                        <li>"The glass ___ after the cat pushed it off the table."</li>
                        <li>"$total = $unitCost * ___;"</li>
                    </ul>
                </li>
                <li>
                    The weights in the model are adjusted until it usually gets the missing tokens right.
                    <ul>
                        <li>This is repeated trillions of times to cover all the training text.</li>
                    </ul>
                </li>
            </ul>
        </div>
    </article>
</template>
<style lang="scss" scoped>
article {
    height: 100%;
    text-wrap: pretty;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 160px;

    .content > ul > li {
        margin-bottom: 1.3rem;
    }
}
h1 {
    text-align: center;
}
img {
    float: right;
    max-width: 600px;
    margin-left: 20px;
}
</style>