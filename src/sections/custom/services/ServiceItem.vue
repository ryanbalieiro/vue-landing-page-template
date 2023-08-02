<template>
  <!-- Large Screens Layout -->
  <div class="service-card-lg d-none d-lg-block ps-1 pe-1">
    <!-- Icon -->
    <CircleIcon :scale="3" :icon="item.icon"></CircleIcon>

    <!-- Description -->
    <div class="service-description mt-3">
      <h5>{{item.title}}</h5>
      <p class="text-muted">{{item.description}}</p>
    </div>
  </div>

  <!-- Small Screens Layout -->
  <div class="service-card-sm d-lg-none d-flex mb-1 mt-3 text-start">
    <!-- Icon -->
    <div class="flex-shrink-0 pe-1 ps-1 pe-lg-2 ps-lg-2">
      <CircleIcon :scale="2" :icon="item.icon" class="d-none d-md-block"></CircleIcon>
      <CircleIcon :scale="1" :icon="item.icon" class="d-md-none"></CircleIcon>
    </div>

    <!-- Description -->
    <div class="service-description">
      <h5>{{item.title}}</h5>
      <p class="text-muted">{{item.description}}</p>
    </div>
  </div>
</template>

<script setup>
import CircleIcon from "../../../components/CircleIcon.vue"

const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
</style>