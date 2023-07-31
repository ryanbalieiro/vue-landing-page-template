<template>
  <SectionWrapper :data="data">

    <!-- Grid View (large screens) -->
    <div class="row text-center">
      <template v-for="item in data.content.items">
        <!-- Item -->
        <div class="col-12 col-sm-6 col-lg-4 mb-3 mb-md-5">
          <ServicesCard :item="item"></ServicesCard>
        </div>
      </template>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import ServicesCard from "./ServicesCard.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
.swiper {
  .swiper-slide {
    margin-bottom: 65px;
    height: auto !important;
  }
}
</style>
