<template>
    <!-- Icon Stack -->
    <span class="icon-stack fa-stack">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fa-stack-1x fa-inverse" :class="props.faIcon"></i>
    </span>
</template>

<script setup>
const props = defineProps(['faIcon'])
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.icon-stack {
    --font-size:3rem;
    @include media-breakpoint-down(lg) {--font-size: 2rem}
    @include media-breakpoint-down(md) {--font-size: 1rem}

    font-size: var(--font-size);
}
</style>