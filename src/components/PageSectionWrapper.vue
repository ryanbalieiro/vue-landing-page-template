<template>
  <!-- Page Section -->
  <section :class="sectionClass" :id="props.id">
    <div class="container">
      <!-- Section Heading -->
      <div class="section-heading pb-4 pb-md-5">
        <h1 class="section-title" v-html="props.title"></h1>
        <h4 class="section-description" v-html="props.subtitle"></h4>
      </div>

      <!-- Content -->
      <div class="section-body">
        <!-- Yield custom section content -->
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useLayout} from "../composables/layout.js"

const props = defineProps(['id', 'title', 'subtitle', 'isDarkSection'])
const sectionClass = !props.isDarkSection ? useLayout().getNextSectionClass() : 'page-section page-section-dark'
</script>

<style scoped lang="scss">
</style>
