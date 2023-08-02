<template>
  <header class="page-header d-flex">
    <!-- Background -->
    <div class="content-top-bg">
      <div class="content-top-bg-overlay">
      </div>
    </div>

    <!-- Bootstrap Container -->
    <div class="container m-auto">
      <div class="content-wrapper">
        <!-- Logo -->
        <img :src="data.srcImage" alt="logo" class="img-fluid logo">

        <!-- Texts -->
        <h1 class="heading mt-4">{{ data.title }}</h1>
        <p class="subheading">{{ data.subtitle }}</p>

        <!-- Button -->
        <XLButton :icon="data.button.icon" :label="data.button.label" @click="_onButtonClicked()"></XLButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import XLButton from "../../components/XLButton.vue"
import {useLayout} from '../../composables/layout.js'

const props = defineProps(['data'])

const _onButtonClicked = () => {
  useLayout().scrollToSection(props.data.button.targetSection);
}
</script>

<style scoped lang="scss">
@import "../../scss/_theming.scss";

.page-header {
  min-height: max(100vh, 900px);
  position: relative;
}

.content-top-bg {
  background-image: url('../../assets/header-bg.jpeg');
  background-position: center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;

  .content-top-bg-overlay {
    position: relative;
    height: 100%;
    width: 100%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 30, 30, 0.73)), color-stop(70%, rgba(30, 30, 30, 0.86)), color-stop(80%, rgba(30, 30, 30, 0.99)), to(rgba(30, 30, 30, 1)));
    background-image: linear-gradient(180deg, rgba(30, 30, 30, 0.73) 0%, rgba(30, 30, 30, 0.86) 30%, rgba(30, 30, 30, 0.99) 60%, rgba(30, 30, 30, 1) 100%);
  }
}

.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

.content-wrapper {
  text-align: center;
  color: white;
  @include media-breakpoint-up(lg) {
    padding-top: 35px;
  }
}

.logo {
  min-height: 200px;
  max-height: 30vh;

  @include media-breakpoint-up(sm) {
    max-height: 32.5vh;
  }

  @include media-breakpoint-up(md) {
    max-height: 35vh;
  }

  @include media-breakpoint-up(lg) {
    max-height: 40vh;
  }
}

.heading {
  font-size: 2rem;
  line-height: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: $headings-font-family;

  @include media-breakpoint-up(sm) {
    font-size: 2.5rem;
    line-height: 4rem;
  }

  @include media-breakpoint-up(md) {
    font-size: 3rem;
    line-height: 5.25rem;
  }

  @include media-breakpoint-up(lg) {
    font-size: 3.5rem;
    line-height: 5.25rem;
  }
}

.subheading {
  font-size: 1rem;
  color: $white-faded;
  font-family: $subheadings-font-family;

  @include media-breakpoint-up(sm) {
    font-size: 1.1rem;
  }

  @include media-breakpoint-up(md) {
    font-size: 1.3rem;
  }

  @include media-breakpoint-up(lg) {
    font-size: 1.4rem;
  }
}


</style>
