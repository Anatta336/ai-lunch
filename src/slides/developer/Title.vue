<script setup></script>
<template>
    <article>
        <h1 class="" data-text="AI Assistants">AI Assistants</h1>
        <h1 class="" data-text="For Developers">For Developers</h1>
    </article>
</template>
<style lang="scss" scoped>
article {
    text-wrap: pretty;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    max-width: 60%;
    color: #ffffff;
}
.glitched {
    /* become position anchor for pseudo-elements */
    position: relative;
    z-index: 0;
}

.glitched::before,
.glitched::after {
    content: attr(data-text);

    // non-transparent background to hide original text
    // background-color: #b4dcda;

    // position directly on parent
    position: absolute;
    top: 0;
    z-index: 1;

    animation: glitch-crop 2530ms step-end 0s infinite both,
        glitch-opacity 5340ms step-end 0s infinite both;

    // don't allow user to select the glitch version
    user-select: none;
}

.glitched::before {
    // right: -2px;
    inset: 0;
    text-shadow: -4px 0px #6aff4c;
}

.glitched::after {
    // left: -2px;
    inset: 0;
    text-shadow: 4px 0px #ff34b1;

    // offset and slightly change duration of animation
    animation-delay: -4s;
    animation-duration: 7s;
}

/* generated with:
s = "";
count = 20;
heightMin = 3;
heightMax = 10;
for (let i = 0; i <= count; ++i) {
const height = heightMin + Math.random() * (heightMax - heightMin);
const center = Math.random() * 100;
const top = Math.floor(center - height);
const bottom = Math.floor((100 - center) - height);
    s += `${Math.floor((i / count) * 100)}% {\n`;
    s += `    clip-path: inset(${top}% 0 ${bottom}%);\n`;
    s += `}\n`;
}
console.log(s);
*/

@keyframes glitch-crop {
    0% {
        clip-path: inset(88% 0 2%);
    }
    5% {
        clip-path: inset(46% 0 33%);
    }
    10% {
        clip-path: inset(83% 0 7%);
    }
    15% {
        clip-path: inset(3% 0 81%);
    }
    20% {
        clip-path: inset(46% 0 41%);
    }
    25% {
        clip-path: inset(24% 0 61%);
    }
    30% {
        clip-path: inset(17% 0 65%);
    }
    35% {
        clip-path: inset(21% 0 66%);
    }
    40% {
        clip-path: inset(4% 0 83%);
    }
    45% {
        clip-path: inset(25% 0 65%);
    }
    50% {
        clip-path: inset(28% 0 64%);
    }
    55% {
        clip-path: inset(31% 0 49%);
    }
    60% {
        clip-path: inset(53% 0 36%);
    }
    65% {
        clip-path: inset(24% 0 62%);
    }
    70% {
        clip-path: inset(56% 0 37%);
    }
    75% {
        clip-path: inset(30% 0 62%);
    }
    80% {
        clip-path: inset(76% 0 16%);
    }
    85% {
        clip-path: inset(14% 0 77%);
    }
    90% {
        clip-path: inset(51% 0 31%);
    }
    95% {
        clip-path: inset(29% 0 64%);
    }
    100% {
        clip-path: inset(0% 0 0%);
    }
}
@keyframes glitch-opacity {
    0% {
        opacity: 0;
    }
    99% {
        opacity: 1;
    }
}
</style>