<script setup></script>
<template>
    <article>
        <h1>Standard Machine Learning Lifecycle</h1>
        <figure>
            <div class="set">
                <h2>Training</h2>
                <ul>
                    <li>Feeding in lots of example data.</li>
                    <li>Sets weights (a.k.a. parameters) of the model until it can predict mostly correctly.</li>
                </ul>
                <p>Training a small model is cheap, but needs a lot of data.</p>
            </div>
            <div class="arrow">
                →
            </div>
            <div class="set">
                <h2>Inference</h2>
                <ul>
                    <li>Actually using the model.</li>
                    <li>Giving an input and receiving an output.</li>
                    <li>Doesn't change the model.</li>
                    <li>The model is <strong>not</strong> learning during use.</li>
                </ul>
            </div>
        </figure>
        <p>
            Our example was images as input and a number as output, but models can be built for all sorts of data.
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
}
ul {
    margin: 0;
}
figure {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    gap: 10px;
    margin: 0 20px;

    figcaption {
        grid-column: 1 / -1;
    }
}

.arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-shadow: #fff3ed 1px 0px 0px, #fff3ed -1px 0px 0px, #fff3ed 0px 1px 0px, #fff3ed 0px -1px 0px
}

.set {
    border-radius: 20px;

    padding: 14px 32px;
    min-height: 60px;
    min-width: 60px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: stretch;
    justify-content: center;
    gap: 10px;

    h2 {
        flex: 1 0 100%;
        text-align: center;
        margin: 0;
    }

    background-color: #455e80;
    .set {
        background-color: #4ba194;
        flex: 1 0 300px;
        .set {
            background-color: #755026;
            .set {
                background-color: #e0a0b0;
            }
        }
    }
}
</style>