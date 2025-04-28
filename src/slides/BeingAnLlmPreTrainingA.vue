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
                    Everything you deal with is handled as "tokens".
                    <ul>
                        <li>Some words are multiple tokens.</li>
                        <li>Punctuation marks are also tokens.</li>
                        <li>There are some special tokens to mark things like the start and end of text blocks.</li>
                        <li>10,000 words would be around 15,000 tokens.</li>
                    </ul>
                </li>
                <li>
                    You're given a large amount of written content to learn from.
                </li>
                <li>
                    You learn the text by being shown a block of text with some tokens removed, and you're asked to guess what should be there.
                    <ul>
                        <li>"The capital of ___ is Paris."</li>
                        <li>"Evan cried out in ___ when he saw he'd won the lottery."</li>
                        <li>"The glass ___ on the floor when it fell from the table."</li>
                        <li>"$total = $unitCost * ___;"</li>
                    </ul>
                </li>
                <li>
                    The weights of your neural network are adjusted until you usually get the missing tokens right.
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
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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