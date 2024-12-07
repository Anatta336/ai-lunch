<script setup>
// TODO: generate pretty curved lines.
</script>
<template>
    <div class="background">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            <path d="
            M 0,0
            C 0,100 100,100 100,0
            "
            stroke="#fff3ed" />
        </svg>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.background {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background: #100d1e;
    color: #fff3ed;
}
svg {
    position: absolute;
    inset: 0;
}

</style>