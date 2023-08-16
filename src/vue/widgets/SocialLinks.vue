<template>
    <div class="social-links">
        <!-- Social Link -->
        <a v-for="item in props.items" :class="buttonClass" :href="item.href" :aria-label="item.icon">
            <!-- Social Link Icon -->
            <i :class="item.icon" />
        </a>
    </div>
</template>

<script setup>
import {computed} from "vue"

const props = defineProps(['items', 'size', 'color'])

const buttonClass = computed(() => {
    let classList = "btn btn-social"
    switch(props.size) {
        case 'xl': classList += ' btn-social-xl'; break
        case 'lg': classList += ' btn-social-lg'; break
        case 'md': classList += ' btn-social-md'; break
    }

    switch(props.color) {
        case 'darkAndWhite': classList += ' btn-social-dark-and-white'; break
        case 'dark': classList += ' btn-social-dark'; break
        case 'lightDark': classList += ' btn-social-light-dark'; break
    }

    return classList
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

@mixin create-btn-social-size($std-font-size, $md-font-size) {
    $font-size: $std-font-size;
    @include media-breakpoint-down(lg) {
        $size: $md-font-size;
    }

    font-size: $font-size;
    width: calc($font-size * 2.4);
    height: calc($font-size * 2.4);
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
    color: white;

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

.btn-social-light-dark {
    @include create-btn-social-color(
        $white, lighten($dark, 5%), lighten($dark, 20%),
        $white, lighten($primary, 5%), lighten($primary, 20%),
    )
}
</style>