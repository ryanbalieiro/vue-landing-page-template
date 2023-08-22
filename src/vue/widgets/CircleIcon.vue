<template>
    <!-- Icon Stack -->
    <span class="icon-stack fa-stack">
        <i class="fas fa-circle fa-stack-2x text-primary"/>
        <i class="fa-stack-1x fa-inverse" :class="props.faIcon"/>
    </span>
</template>

<script setup>
/**
 * @property {String} faIcon
 */
const props = defineProps({
    faIcon: String,
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.icon-stack {
    --font-size:3rem;
    @include media-breakpoint-down(xxl) {--font-size: 2.5rem}
    @include media-breakpoint-down(xl) {--font-size: 2.25rem}
    @include media-breakpoint-down(lg) {--font-size: 2rem}
    @include media-breakpoint-down(md) {--font-size: 1rem}

    font-size: var(--font-size);
}
</style>