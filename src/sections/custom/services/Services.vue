<template>
  <SectionWrapper :data="data">

    <!-- Grid View (large screens) -->
    <div class="row text-center gy-2 gy-lg-5 pt-lg-2">
      <template v-for="item in data.content.items">
        <!-- Item -->
        <div class="col-12 col-sm-6 col-lg-4">
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
