<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

// Configuration for the dots
const dotCount = 80;
const dotSize = 2;
const speed = ref(1.5);
const canvasSize = 400;

// Reactive state
const percentFlowing = ref(0);
const canvas = ref(null);
const ctx = ref(null);
const animationId = ref(null);

// Create dots with random positions and directions
const dots = ref([]);

// Generate a random angle in radians
const randomAngle = Math.random() * Math.PI * 2;

// Set a common direction for the flowing dots - randomly chosen but constant
const commonDirection = ref({
    dx: Math.cos(randomAngle) * speed.value,
    dy: Math.sin(randomAngle) * speed.value,
});

const initDots = () => {
    dots.value = [];
    for (let i = 0; i < dotCount; i++) {
        // Generate a random angle for each dot
        const angle = Math.random() * Math.PI * 2;

        // Use same magnitude (speed) for all dots, but random direction
        dots.value.push({
            x: Math.random() * canvasSize,
            y: Math.random() * canvasSize,
            angle,
            dx: Math.cos(angle) * speed.value,
            dy: Math.sin(angle) * speed.value,
        });
    }
};

// Update velocities when speed changes
const updateVelocities = () => {
    // Update common direction
    commonDirection.value = {
        dx: Math.cos(randomAngle) * speed.value,
        dy: Math.sin(randomAngle) * speed.value,
    };

    // Update individual dot velocities
    dots.value.forEach(dot => {
        dot.dx = Math.cos(dot.angle) * speed.value;
        dot.dy = Math.sin(dot.angle) * speed.value;
    });
};

// Watch for speed changes
watch(speed, () => {
    updateVelocities();
});

const updateDots = () => {
    const flowingDotsCount = Math.floor((percentFlowing.value / 100) * dotCount);

    dots.value.forEach((dot, index) => {
        // If this dot should be flowing, use common direction
        if (index < flowingDotsCount) {
            dot.x += commonDirection.value.dx;
            dot.y += commonDirection.value.dy;
        } else {
            // Otherwise move in random direction
            dot.x += dot.dx;
            dot.y += dot.dy;
        }

        // Wrap around the canvas
        dot.x = (dot.x + canvasSize) % canvasSize;
        dot.y = (dot.y + canvasSize) % canvasSize;
    });
};

const drawDots = () => {
    if (!ctx.value) return;

    // Clear canvas
    ctx.value.fillStyle = 'black';
    ctx.value.fillRect(0, 0, canvasSize, canvasSize);

    // Draw dots
    ctx.value.fillStyle = 'white';
    dots.value.forEach(dot => {
        ctx.value.beginPath();
        ctx.value.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.value.fill();
    });
};

const animate = () => {
    updateDots();
    drawDots();
    animationId.value = requestAnimationFrame(animate);
};

// Lifecycle hooks
onMounted(() => {
    ctx.value = canvas.value.getContext('2d');
    initDots();
    animate();
});

onBeforeUnmount(() => {
    if (animationId.value) {
        cancelAnimationFrame(animationId.value);
    }
});
</script>

<template>
    <article>
        <h1>Example - Disposable Code</h1>

        <div class="wrap">
            <div>
                <ul>
                    <li>Show a black square with 40 white dots.</li>
                    <li>Show an HTML slider bar that selects a value between 0% and 100%.</li>
                    <li>Each dot should move at a constant speed, in a constant randomly chosen direction.</li>
                    <li>However the fraction given by that slider bar should all be moving in the same direction as one-another.</li>
                    <li>The dots should "wrap around" the square, so if they exit off the top they appear on the bottom.</li>
                </ul>
            </div>

            <div>
                <div class="canvas-container">
                    <canvas ref="canvas" :width="canvasSize" :height="canvasSize"></canvas>
                </div>

                <div class="controls">
                    <label for="flow-slider">Coherence: {{ percentFlowing }}%</label>
                    <input
                        id="flow-slider"
                        type="range"
                        v-model="percentFlowing"
                        min="0"
                        max="100"
                        class="slider"
                    />
                </div>

                <div class="controls">
                    <label for="speed-slider">Speed: {{ speed }}x</label>
                    <input
                        id="speed-slider"
                        type="range"
                        v-model="speed"
                        min="0.1"
                        max="3"
                        step="0.1"
                        class="slider"
                    />
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 80px;

    > ul > li {
        margin-bottom: 2rem;
    }
}

.wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.canvas-container {
    margin: 0;

    canvas {
        border: 1px solid #333;
        background-color: black;
    }
}

.controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;

    label {
        margin: 20px 0 0;
    }

    .slider {
        width: 100%;
        margin-top: 10px;
    }
}
</style>