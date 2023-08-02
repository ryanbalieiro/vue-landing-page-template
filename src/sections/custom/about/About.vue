<template>
  <SectionWrapper :data="data">
    <div class="row mb-4">

      <!-- Left Column -->
      <div class="image-col col-12 col-lg-5 col-xl-4">
        <img :src="data.content.image" alt="logo" class="img img-fluid my-auto">
      </div>

      <!-- Right Column -->
      <div class="text-col col-12 col-lg-7 col-xl-8">
        <div class="text-wrapper my-auto">
          <template v-for="paragraph in data.content.paragraphs">
            <p v-html="paragraph"></p>
          </template>
        </div>
      </div>

    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.image-col {
  text-align: center;
  padding-bottom: 2rem;
  .img {
    max-height: 200px;
  }
}

.text-col {
  text-align: justify;
}

@include media-breakpoint-up(lg) {
  .image-col {
    text-align: end;
    padding-right: 3rem;
    padding-left: 3rem;
    display: flex;
    .img {
      max-height: 50vh;
      width: 100%;
    }
  }

  .text-col {
    display: flex;
    p {
      font-size: 0.95rem;
    }
  }
}

</style>
