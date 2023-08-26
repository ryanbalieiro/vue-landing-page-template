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
    faIcon: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.icon-stack {
    @include generate-dynamic-styles-with-hash((
        xxxl: (font-size: 3rem),
        xxl:  (font-size: 2.5rem),
        xl:   (font-size: 2.25rem),
        lg:   (font-size: 2rem),
        md:   (font-size: 1.5rem),
        sm:   (font-size: 1rem),
    ));
}
</style>