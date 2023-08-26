<template>
    <header class="agency-header">
        <!-- Background -->
        <div class="bg-promo-image">
            <div class="bg-promo-image-overlay">
            </div>
        </div>

        <!-- Content -->
        <div class="container-xxl">
            <div class="content-wrapper">
                <!-- Logo -->
                <ImageView :src="props.headerData['imageUrl']"
                           :alt="'logo'"
                           class="img-logo"/>

                <!-- Texts -->
                <h1 class="heading">{{ props.headerData['title'] }}</h1>
                <h4 class="subheading">{{ props.headerData['subtitle'] }}</h4>

                <!-- Button -->
                <XLButton :icon="props.headerData['button'].icon"
                          :label="props.headerData['button'].label"
                          @click="_onButtonClick"/>
            </div>
        </div>
    </header>
</template>

<script setup>
import ImageView from "../widgets/ImageView.vue"
import XLButton from "../widgets/XLButton.vue"
import {useLayout} from "../../composables/layout.js"

/**
 * @type {Object} headerData
 */
const props = defineProps({
    headerData: Object
})

/**
 * @private
 */
const _onButtonClick = () => {
    useLayout().smoothScrollToElement(props.headerData['button']['targetSection'], true)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.agency-header {
    --height: clamp(650px, 100vh, 1050px);
    --content-margin-top: 80px;
    --max-logo-proportion:45vw;
    --max-logo-height:50vh;
    @include media-breakpoint-down(xl) {--max-logo-height: 35vh;}
    @include media-breakpoint-down(lg) {--max-logo-height: 30vh; }
    @include media-breakpoint-down(md) {--content-margin-top: 65px;}

    --content-height: calc(var(--height) - var(--content-margin-top));
    --logo-proportion: clamp(190px, 45vw, min(37.5vh, 35vw, 350px));

    position: relative;
    height: var(--height);

    .container-xxl {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--height);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 2rem;
    }

    .content-wrapper {
        text-align: center;
        margin-top:var(--content-margin-top);
    }

    .img-logo {
        height: var(--logo-proportion);
        width: var(--logo-proportion);
    }

    h1.heading {
        color:$white;
        text-transform: uppercase;
        font-weight: 700;
        font-size: calc(var(--logo-proportion)/6);
        padding: calc(var(--logo-proportion)/8) 0 calc(var(--logo-proportion)/180);
    }

    .subheading {
        font-family: $custom-subheadings-font-family;
        color: $light-5;

        font-size: calc(var(--logo-proportion)/13);
        padding: calc(var(--logo-proportion)/20) 0;
    }
}
</style>