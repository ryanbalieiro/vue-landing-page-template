<template>
  <!-- Large Screens Layout -->
  <div class="service-card-lg d-none d-lg-block">
    <!-- Icon Stack -->
    <span class="fa-stack fa-3x">
      <i class="fas fa-circle fa-stack-2x text-primary"></i>
      <i class="fa-stack-1x fa-inverse" :class="item.icon"></i>
    </span>

    <!-- Item Info -->
    <h5 class="my-3">{{item.title}}</h5>
    <p class="text-muted">{{item.description}}</p>
  </div>

  <!-- Small Screens Layout -->
  <div class="service-card-sm d-lg-none d-flex mb-1 mt-3 text-start">
    <div class="flex-shrink-0 pe-1 ps-1 pe-lg-2 ps-lg-2">
      <!-- Icon Stack -->
      <span class="fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fa-stack-1x fa-inverse" :class="item.icon"></i>
      </span>
    </div>

    <!-- Item Info -->
    <div class="ms-2">
      <h5 class="">{{item.title}}</h5>
      <p class="text-muted">{{item.description}}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
@import "../../../scss/_theming.scss";

@include media-breakpoint-up(md) {
  .service-card-lg {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>