<script setup>
import FixedSize from './components/FixedSize.vue';
</script>

<template>
    <FixedSize
        class="slide-container"
        :width="1600"
        :height="900"
        :margin="10"
    >
        <div class="slide">
            <nav class="nav-links">
                <a href="/lunch">Lunch and Learn</a>
                <a href="/developer">Developers - Phase 1</a>
                <a href="/developer-discussion">Developers - Phase 2</a>
            </nav>
        </div>
    </FixedSize>
</template>

<style lang="scss" scoped>
.slide-container {
    position: relative;
}

.slide {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(farthest-corner at 90% 50%, rgb(7 47 133 / 27%) 0%, #2e062e 90%),
        radial-gradient(farthest-corner at 10% 10%, rgb(88 9 140 / 49%) 0%, #1d052d 100%);
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 2.5rem;
    a {
        color: #fff;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        background: rgba(44, 9, 70, 0.6);
        transition: background 0.2s;
        &:hover {
            background: rgba(88, 9, 140, 0.8);
        }
    }
}
</style>
