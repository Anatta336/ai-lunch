<script setup></script>
<template>
    <article>
        <h1>Input to the LLM</h1>
        <figure>

                <div class="set">
                    <h2>Directly from us</h2>
                    <div class="set">
                        Prompt
                    </div>
                    <div class="set">
                        Directly referenced files
                    </div>
                    <div class="set">
                        .augment-guidelines
                    </div>
                    <div class="set">
                        Augment memories
                    </div>
                    The prompt and referenced files will be specific to each request, guidelines and memories are set up in advance.
                </div>

                <div class="set">
                    <h2>Provided by the agent</h2>
                    <div class="set">
                        Other files in the project
                    </div>
                    <div class="set">
                        Summary from when it indexed the project
                    </div>
                    <div class="set">
                        Online documentation
                    </div>
                    <div class="set" id="ignored">
                        Skips files in .gitignore and .augment-ignore
                    </div>
                    Augment's agent will read your question and try to find sources of relevant information to help it answer.
                </div>

        </figure>
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
}
ul {
    margin: 0;
}

.arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-shadow: #fff3ed 1px 0px 0px, #fff3ed -1px 0px 0px, #fff3ed 0px 1px 0px, #fff3ed 0px -1px 0px
}

figure {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 0 20px;
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

    flex: 1 0 300px;
    text-align: center;

    h2 {
        flex: 1 0 100%;
        text-align: center;
        margin: 0;
    }

    #ignored {
        background-color: #af381d;
    }

    background-color: #455e80;
    .set {
        background-color: #4ba194;


        .set {
            background-color: #5f2e7e;
        }
    }
}
</style>