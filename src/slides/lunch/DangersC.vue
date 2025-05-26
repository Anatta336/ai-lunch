<script setup></script>
<template>
    <article>
        <h1>Dangers - Crime</h1>
        <ul>
            <li>
                Automated scams
                <ul>
                    <li>Organised scam call centres moving from cheap human labour to AI.</li>
                </ul>
            </li>
            <li>
                Phishing
                <ul>
                    <li>Producing individually tailored attacks is much more feasible at scale.</li>
                </ul>
            </li>
            <li>
                Pig butchering
                <ul>
                    <li>AI pretends to be a human and builds an online relationship with a victim.</li>
                    <li>Convince the victim to transfer money.</li>
                    <li>LLMs are better at this and cheaper than a human.</li>
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

    padding: 0 80px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>