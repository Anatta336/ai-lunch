<script setup></script>
<template>
    <article>
        <h1>Handling Problems</h1>
        <ul>
            <li>
                Sometimes the agent will struggle to do what is needed.
            </li>
            <li>
                Make use of git commits to keep changes you're happy with. If you end up with a lot of commits you can combine them using an interactive rebase and the "fixup" or "squash" option.
            </li>
        </ul>
        <p class="prompt">
            git rebase -i HEAD~3
        </p>
        <ul>
            <li>
                Warning signs the agent is struggling:
                <ul>
                    <li>
                        It keeps saying it found a problem and adding more code to fix it. LLMs love adding code, and even if it ends up working the tangled code can be a net negative for the project.
                    </li>
                    <li>
                        If you find yourself repeatedly correcting the agent.
                    </li>
                </ul>
            </li>
            <li>
                Fresh context with a clearer prompt can help. Be as specific as possible about what the expected changes are and what files should be changed.
            </li>
            <li>
                Some tasks are just not well suited to LLMs. It's worth trying, but sometimes the answer is to cut your losses and do it yourself.
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

    h1 {
        text-align: center;
    }

    p {
        margin: 0;
    }

    ul {
        width: 100%;
        margin: 1rem 0;
    }

    > ul > li {
        margin-bottom: 1rem;
    }

    code {
        background-color: #455e80;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 24px;
    }

    .prompt {
        background-color: #455e80;
        padding: 10px 20px;
        border-radius: 10px;
        text-align: center;
        max-width: 800px;
        margin-bottom: 10px;
    }

    .form {
        float: right;
        max-width: 600px;
        margin-left: 40px;

        box-shadow: 0px 6px 15px 4px rgb(0 0 0 / 60%);
    }
}
</style>