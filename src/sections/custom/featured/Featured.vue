<template>
  <SectionWrapper :data="data" :section-class="'page-section-dark'">
    <div class="row text-center text-md-start pt-5 pb-5">
      <!-- Image -->
      <div class="col-12 col-md-4 ps-2 pe-4">
        <img class="img-fluid logo trace-shadow" :src="data.content.logo" alt="logo">
      </div>

      <!-- Texts -->
      <div class="col-12 col-md-8">
        <!-- Texts -->
        <h4 class="" v-html="data.content.subtitle"></h4>
        <h1 class="display-4" v-html="data.content.title"></h1>
        <p class="description mt-4" v-html="data.content.description"></p>

        <!-- Button (optional) -->
        <XLButton v-if="data.content.button" :label="data.content.button.label" :icon="data.content.button.icon" :href="data.content.button.href"></XLButton>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import XLButton from "../../../components/XLButton.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.logo {
  border-radius: 30px;
  margin-bottom: 40px;
  max-width: min(35vw,100%);
}

h4 {
  color: $gray-500;
}

</style>
