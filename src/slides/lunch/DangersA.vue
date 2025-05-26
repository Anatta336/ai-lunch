<script setup></script>
<template>
    <article>
        <h1>Dangers - Information</h1>
        <ul>
            <li>
                Mass surveillance
                <ul>
                    <li>
                        Intelligence agencies recording all communication became possible in the late 20th century.
                        <ul>
                            <li>Tempora, Bullrun/Edgehill, Echelon</li>
                            <li>"[...] unlawful and incompatible with the conditions necessary for a democratic society." - 2018 European Court of Human Rights on the UK's systems</li>
                        </ul>
                    </li>
                    <li>Analysing it all is now possible.
                        <ul>
                            <li>It will also make mistakes in that analysis.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                Misinformation campaigns
                <ul>
                    <li>
                        "We estimate that the [Chinese] government fabricates and posts about 448 million social media comments a year." - 2017 https://gking.harvard.edu/files/gking/files/50c.pdf
                    </li>
                    <li>
                        A (highly unethical) experiment found LLMs are better at convincing people to change their opinions than humans are.
                        <ul>
                            <li>https://retractionwatch.com/wp-content/uploads/2025/04/ExtendedAbstract-Zurich-AI-Reddit.pdf</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 120px;

    > ul > li {
        margin-bottom: 2rem;
    }
}
</style>