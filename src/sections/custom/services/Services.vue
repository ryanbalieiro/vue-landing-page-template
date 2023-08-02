<template>
  <SectionWrapper :data="data">
    <!-- Grid View (large screens) -->
    <div class="row text-center gy-2 gy-lg-5 pt-lg-2">
      <template v-for="item in data.content.items">
        <!-- Item -->
        <div class="col-12 col-sm-6 col-lg-4">
          <ServiceItem :item="item"></ServiceItem>
        </div>
      </template>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import ServiceItem from "./ServiceItem.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
</style>
