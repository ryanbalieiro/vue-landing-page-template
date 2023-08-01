<template>
  <!-- Large Screens Layout -->
  <div class="service-card-lg d-none d-lg-block ps-1 pe-1">
    <ServiceIcon :scale="3" :icon="item.icon"></ServiceIcon>
    <ServiceDescription class="my-4" :item="item"></ServiceDescription>
  </div>

  <!-- Small Screens Layout -->
  <div class="service-card-sm d-lg-none d-flex mb-1 mt-3 text-start">
    <div class="flex-shrink-0 pe-1 ps-1 pe-lg-2 ps-lg-2">
      <ServiceIcon :scale="2" :icon="item.icon" class="d-none d-md-block"></ServiceIcon>
      <ServiceIcon :scale="1" :icon="item.icon" class="d-md-none"></ServiceIcon>
    </div>

    <ServiceDescription class="ms-2" :item="item"></ServiceDescription>
  </div>
</template>

<script setup>
import ServiceIcon from "./ServiceIcon.vue"
import ServiceDescription from "./ServiceDescription.vue"

const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
</style>