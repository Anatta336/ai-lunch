<script setup></script>
<template>
    <article>
        <h1>Example - Slow SQL Query</h1>
        <p>A report was generating results very slowly from a complex Eloquent database query.</p>
        <ul>
            <li>Access the raw SQL query.
                <ul>
                    <li>In Laravel <code>dd($query->toRawSql());</code></li>
                </ul>
            </li>
            <li>Get analysis information from MySQL (or whatever the database server is).
                <ul>
                    <li>Add <code>EXPLAIN ANALYZE</code> at the start and run it.</li>
                </ul>
            </li>
            <li>Put the original SQL query into a file, prompt Augment with the <code>EXPLAIN ANALYZE</code> results and request it improve performance.</li>
            <li>Test the new SQL query.
                <ul>
                    <li>Check it really is faster.</li>
                    <li>Make sure the results are always the same.</li>
                </ul>
            </li>
            <li>Keeping the same agent context, prompt Augment to update the original Eloquent query to apply the same changes.</li>
            <li>Make sure you fully understand the new query and the changes.</li>
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

    p {
        margin: 0;
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
}
</style>