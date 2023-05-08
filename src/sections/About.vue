<template>
  <PageSectionWrapper :id="aboutData.id" :title="aboutData.title" :subtitle="aboutData.subtitle">
    <div class="row">
      <!-- Image -->
      <div class="col col-12 col-md-6 text-center">
        <img :src="aboutData.content.image" alt="logo" class="img img-fluid">
      </div>

      <!-- Texts & Links -->
      <div class="col col-12 col-md-6">
        <template v-for="paragraph in aboutData.content.paragraphs">
          <p v-html="paragraph"></p>
        </template>

        <div class="text-center">
          <XLButton :label="aboutData.button.label" :icon="aboutData.button.icon" :href="aboutData.button.href"></XLButton>
        </div>
      </div>
    </div>
  </PageSectionWrapper>
</template>

<script setup>
import agencyData from '../data/agency.json'
import XLButton from "../components/XLButton.vue"
import PageSectionWrapper from "../components/PageSectionWrapper.vue"
const aboutData = agencyData.about
</script>

<style scoped lang="scss">
  @import "../scss/_theming.scss";

  .img {
    max-height: 160px;
  }

  .col {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;

    p {
      text-align: justify;
    }
  }

  @include media-breakpoint-up(md) {
    .img {
      max-height: 300px;
    }
  }

  @include media-breakpoint-up(lg) {
    .img {
      max-height: 350px;
    }

    .col {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
</style>
