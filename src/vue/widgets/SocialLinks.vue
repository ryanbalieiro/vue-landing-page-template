<template>
    <div class="social-links">
        <!-- Social Link -->
        <a v-for="item in props.items" :class="buttonClass" :href="item['href']" target="_blank" :aria-label="item['faIcon']">
            <!-- Social Link Icon -->
            <i :class="item['faIcon']" />
        </a>
    </div>
</template>

<script setup>
import {computed} from "vue"
import {useConstants} from "../../composables/constants.js"

/**
 * @property {Array} items
 * @property {String} size
 * @property {String} color
 */
const props = defineProps({
    items: Array,
    size: String,
    color: String,
})

const constants = useConstants()

/**
 * @type {ComputedRef<String>}
 */
const buttonClass = computed(() => {
    let classList = "btn btn-social"
    const sizeClass = props.size || '';
    const colorClass = props.color || '';

    classList += ` ${sizeClass} ${colorClass}`;
    return classList
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

@mixin create-btn-social-size($std-font-size, $md-down-font-size) {
    $font-size: $std-font-size;

    font-size: $font-size;
    width: calc($font-size * 2.4);
    height: calc($font-size * 2.4);

    @include media-breakpoint-down(md) {
        font-size: $md-down-font-size;
        width: calc($md-down-font-size * 2.4);
        height: calc($md-down-font-size * 2.4);
    }
}

@mixin create-btn-social-color($color, $bg-color, $border-color, $hover-color, $hover-bg-color, $hover-border-color) {
    color: $color;
    background-color: $bg-color;
    border-color: $border-color;

    &:hover {
        color: $hover-color;
        background-color: $hover-bg-color;
        border-color: $hover-border-color;
    }
}

.btn-social {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    margin-left: 0.25rem;
    margin-right: 0.25rem;

    border-radius: 100%;
    border-width: 2px;
    color: $white;

    @include create-btn-social-size(1rem, 0.85rem);
    @include create-btn-social-color(
            $white, lighten($primary, 10%), lighten($primary, 25%),
            $white, lighten($dark, 15%), lighten($dark, 25%),
    )
}

.btn-social-md {
    @include create-btn-social-size(1.2rem, 1rem);
}

.btn-social-lg {
    @include create-btn-social-size(1.4rem, 1.2rem);
}

.btn-social-xl {
    @include create-btn-social-size(1.8rem, 1.6rem);
}

.btn-social-dark-and-white {
    @include create-btn-social-color(
            $white, $dark, $white,
            $primary, $white, $white
    )
}

.btn-social-dark {
    @include create-btn-social-color(
            $white, $dark, lighten($dark, 10%),
            $white, $primary, darken($primary, 5%)
    )
}

.btn-social-black {
    @include create-btn-social-color(
            $white, lighten($black, 7%), lighten($black, 13%),
            $white, $primary, darken($primary, 5%)
    )
}

.btn-social-light-dark {
    @include create-btn-social-color(
            $white, lighten($dark, 5%), lighten($dark, 20%),
            $white, lighten($primary, 5%), lighten($primary, 20%),
    )
}
</style>