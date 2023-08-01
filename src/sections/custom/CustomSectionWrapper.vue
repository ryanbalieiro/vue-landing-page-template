<template>
  <!-- Page Section -->
  <section :class="sectionClass" :id="data.id">
    <div class="container">
      <!-- Section Header -->
      <div class="section-heading pb-4 pb-md-5" v-if="data.header">
        <h1 class="section-title" v-html="data.header.title"></h1>
        <h4 class="section-description" v-html="data.header.subtitle"></h4>
      </div>

      <!-- Section Content -->
      <div class="section-body">
        <!-- Yield custom section content -->
        <slot></slot>
      </div>

      <!-- Section Footer -->
      <div class="section-footer" v-if="data.footer">
        <div class="row h-100">
          <div class="col-12 col-lg-8 text-center mx-auto">
            <!-- Title -->
            <hr v-if="data.footer.divider" class="solid-divider mb-4">
            <h3 v-html="data.footer.title"></h3>

            <!-- Short Description (optional) -->
            <div v-if="data.footer.shortDescription">
              <p class="mt-4 short-description" v-html="data.footer.shortDescription"></p>
            </div>

            <!-- Long Description (optional) -->
            <p v-if="data.footer.longDescription" class="mt-4 text-muted" v-html="data.footer.longDescription"></p>

            <!-- Button (optional) -->
            <XLButton v-if="data.footer.button" :label="data.footer.button.label" :icon="data.footer.button.icon" :href="data.footer.button.href"></XLButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useLayout} from "../../composables/layout.js"
import XLButton from "../../components/XLButton.vue"

const props = defineProps(['data', 'sectionClass'])

let sectionClass
if(props.sectionClass) {
  sectionClass = 'page-section ' + props.sectionClass
  useLayout().resetSectionClassTracker()
}
else {
  sectionClass = useLayout().getNextSectionClass()
}

</script>

<style scoped lang="scss">
@import "../../scss/_theming.scss";

.short-description {
  font-size: 1rem;
}

@include media-breakpoint-down(md) {
  .short-description {
    font-size: 0.9rem;
  }
}
</style>
