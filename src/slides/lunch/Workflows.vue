<script setup></script>
<template>
    <article>
        <h1>Workflows</h1>
        <ul>
            <li>
                The output from an LLM can be fed in to another LLM or a traditional program.
                <ul>
                    <li>
                        This can be used to create a "workflow" that achieves more than an LLM working alone can.
                    </li>
                </ul>
            </li>
        </ul>
        <figure>
            <div class="set user">
                <h2>User</h2>
                <p>Describes their dream kitchen.</p>
            </div>
            <div class="arrow">→</div>
            <div class="set llm">
                <h2>LLM</h2>
                <p>Extracts list of requirements for the kitchen.</p>
            </div>

            <div></div>
            <div></div>
            <div class="arrow">↓</div>


            <div class="set llm">
                <h2>LLM</h2>
                <p>Builds description based on products found.</p>
            </div>
            <div class="arrow">←</div>
            <div class="set database">
                <h2>Database</h2>
                <p>Finds products to match requirements.</p>
            </div>

            <div class="arrow">↓</div>
            <div></div>
            <div></div>


            <div class="set expert-human">
                <h2>Expert Human</h2>
                <p>Reviews results and makes corrections.</p>
            </div>
            <div class="arrow">→</div>
            <div class="set user">
                <h2>User</h2>
                <p>Receives plan and costing.</p>
            </div>

        </figure>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 80px;
}

figure {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    gap: 10px;
    row-gap: 0px;
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

    &.user {
        background-color: #455e80;
    }
    &.llm {
        background-color: #ae4e66;
    }
    &.database {
        background-color: #484aa9;
    }
    &.expert-human {
        background-color: #4ba194;
    }
}
</style>