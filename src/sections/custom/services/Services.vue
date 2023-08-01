<template>
  <SectionWrapper :data="data">

    <!-- Grid View (large screens) -->
    <div class="row text-center">
      <template v-for="item in data.content.items">
        <!-- Item -->
        <div class="col-12 col-sm-6 col-lg-4 mt-1 mb-1 mt-lg-3 mb-lg-3">
          <ServiceCard :item="item"></ServiceCard>
        </div>
      </template>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import ServiceCard from "./ServiceCard.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
</style>
