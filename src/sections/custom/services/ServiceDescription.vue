<template>
  <div class="service-description">
    <h5>{{item.title}}</h5>
    <p class="text-muted">{{item.description}}</p>
  </div>
</template>

<script setup>
const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
</style>