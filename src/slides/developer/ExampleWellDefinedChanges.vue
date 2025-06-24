<script setup></script>
<template>
    <article>
        <h1>Example - A Simple Feature Addition</h1>
        <p>A report needs a new date filter added.</p>
        <ul>
            <li>Define as clearly as you can what the end result should be.
                <ul>
                    <li>A new date picker filter.</li>
                    <li>If a date is selected, only show orders placed after that date.</li>
                    <li>When no date is selected, do not apply any filtering.</li>
                </ul>
            </li>
            <li>Use references.
                <ul>
                    <li>Use a date picker like that in <code>@InvoiceReport.vue</code></li>
                    <li>This report's filters are applied in <code>@OrderReportService.php</code></li>
                </ul>
            </li>
            <li>Review and test.
                <ul>
                    <li>Assume it got something wrong.</li>
                    <li>Make sure you completely understand the code, and why it was set up as it was.</li>
                    <li>Very likely there will be improvements you can make.</li>
                </ul>
            </li>
            <li>Enjoy a rapid delivery for these kind of small changes.</li>
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