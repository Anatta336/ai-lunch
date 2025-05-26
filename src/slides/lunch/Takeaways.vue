<script setup></script>
<template>
    <article>
        <h1>Take-aways</h1>
        <ul>
            <li>
                LLMs are a genuinely new technology.
                <ul>
                    <li>You should think about them quite differently from classic computing.</li>
                </ul>
            </li>
            <li>
                It's still not settled what the best uses are.
                <ul>
                    <li>Reliable business models haven't been established yet.</li>
                </ul>
            </li>
            <li>
                They <em>will</em> get things wrong.
                <ul>
                    <li>If your usage doesn't account for the LLM being wrong, you're in danger.</li>
                </ul>
            </li>
            <li>
                Truly general artificial intelligence that'll take everyone's job is a long way off.
                <ul>
                    <li>Sewing machines and factories didn't remove the need for workers, but they did have large impacts.</li>
                </ul>
            </li>
        </ul>
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

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>