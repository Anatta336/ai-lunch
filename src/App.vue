<script setup>
</script>

<template>
    <div class="app">
        <router-view />
    </div>
</template>

<style lang="scss" scoped>
.app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    background: rgb(11, 11, 13);
    color: #fff3ed;

    font-family: 'LeagueSpartan', sans-serif;

    @font-face {
        font-family: 'LeagueSpartan';
        src: url('/src/assets/fonts/LeagueSpartan-VariableFont_wght.ttf') format('truetype');
    }
}
</style>
