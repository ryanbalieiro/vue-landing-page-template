<template>
  <SectionWrapper :data="data" :section-class="'page-section-dark'">
    <div class="row text-center text-md-start py-2 py-md-4 py-lg-5">
      <!-- Image -->
      <div class="col-12 col-md-3 col-lg-4 ps-2 pe-2 pe-md-5">
        <img class="img-fluid logo trace-shadow" :src="data.content.project.logo" alt="logo">
      </div>

      <!-- Texts -->
      <div class="col-12 col-md-9 col-lg-8">
        <!-- Texts -->
        <h4 class=""><i class="fa-brands fa-hotjar me-2"></i> {{data.content.title}}</h4>
        <h1 class="display-4" v-html="data.content.project.title"></h1>
        <p class="description mt-4" v-html="data.content.project.description"></p>

        <!-- Social Links -->
        <SocialLinks :items="data.content.project.links" :colors="'dark'" :size="'huge'" class="mt-4 pt-1 mb-3"></SocialLinks>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import SocialLinks from "../../../components/SocialLinks.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.logo {
  border-radius: 30px;
  margin-bottom: 40px;
  max-width: min(30vw,100%);
}

h4 {
  color: $gray-500;
}

</style>
