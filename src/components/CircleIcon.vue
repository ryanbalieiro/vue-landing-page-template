<template>
  <!-- Icon Stack -->
  <span class="fa-stack" :class="`fa-${scale}x`">
    <i class="fas fa-circle fa-stack-2x text-primary"></i>
    <i class="fa-stack-1x fa-inverse" :class="icon"></i>
  </span>
</template>

<script setup>
const props = defineProps(['icon', 'scale'])
</script>

<style lang="scss" scoped>
</style>