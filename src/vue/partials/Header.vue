<template>
    <header class="agency-header">
        <!-- Background -->
        <div class="content-top-bg">
            <div class="content-top-bg-overlay">
            </div>
        </div>

        <div class="container">
            <div class="content-wrapper">
                <!-- Logo -->
                <ImageView :src="props.headerData.logo"
                           :alt="'logo'"
                           class="logo" />

                <!-- Texts -->
                <h1 class="heading">{{ props.headerData.title }}</h1>
                <h4 class="subheading">{{ props.headerData.subtitle }}</h4>

                <!-- Button -->
                <XLButton :icon="props.headerData.button.icon" :label="props.headerData.button.label" @click="_onButtonClicked()"/>
            </div>
        </div>
    </header>
</template>

<script setup>
import ImageView from "../widgets/ImageView.vue"
import XLButton from "../widgets/XLButton.vue"
import {useLayout} from "../../composables/layout.js"

const props = defineProps(['headerData'])
const layout = useLayout()

const _onButtonClicked = () => {
    layout.scrollToElement(props.headerData.button.targetSection);
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.agency-header {
    display: flex;
    position: relative;
    min-height: max(100vh, 900px);

    @include media-breakpoint-down(md) {
        min-height: max(90vh, 700px);
    }
}

.content-top-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;

    background-image: url('../../assets/header-bg.jpeg');
    background-position: center;
    background-size: cover;

    .content-top-bg-overlay {
        position: relative;
        height: 100%;
        width: 100%;

        background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 30, 30, 0.73)), color-stop(70%, rgba(30, 30, 30, 0.86)), color-stop(80%, rgba(30, 30, 30, 0.99)), to(rgba(30, 30, 30, 1)));
        background-image: linear-gradient(180deg, rgba(30, 30, 30, 0.73) 0%, rgba(30, 30, 30, 0.86) 30%, rgba(30, 30, 30, 0.99) 60%, rgba(30, 30, 30, 1) 100%);
    }
}

.container {
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

.content-wrapper {
    padding-top: 35px;
    text-align: center;
    color: white;

    @include media-breakpoint-down(lg) {
        padding-top: 0;
    }
}

.logo {
    --height: 40vh;
    @include media-breakpoint-down(lg) {--height: 35vh;}
    @include media-breakpoint-down(md) {--height: 32.5vh;}
    @include media-breakpoint-down(sm) {--height: 30vh;}

    height: var(--height);
    width: var(--height);
}

h1.heading {
    --font-size: 3.5rem;
    --margin-top: 3rem;
    --margin-bottom: 1rem;

    @include media-breakpoint-down(lg) {--font-size: 3rem;}
    @include media-breakpoint-down(md) {--font-size: 2.5rem; --margin-top:2rem; --margin-bottom: 1.15rem;}
    @include media-breakpoint-down(sm) {--font-size: 1.65rem;}

    margin-top: var(--margin-top);
    margin-bottom: var(--margin-bottom);

    font-size: var(--font-size);
    font-weight: 700;
    text-transform: uppercase;
}

.subheading {
    --font-size: 1.4em;
    --margin-bottom: 1.5rem;

    @include media-breakpoint-down(lg) {--font-size: 1.3rem; --margin-bottom: 1rem}
    @include media-breakpoint-down(md) {--font-size: 1.1rem;}
    @include media-breakpoint-down(sm) {--font-size: 1rem;}

    font-size: var(--font-size);
    margin-bottom: var(--margin-bottom);
    font-family: $custom-subheadings-font-family;
    color: $gray-500;

}
</style>