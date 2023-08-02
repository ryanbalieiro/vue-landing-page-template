<template>
  <SectionWrapper :data="data">
    <!-- Projects Grid -->
    <div class="row h-100 gy-0 gy-md-2">
      <template v-for="project in data.content.items">
        <div class="col-6 col-sm-4 col-xl-3 p-0 p-sm-2 mb-4 text-center">
          <!-- Portfolio Item -->
          <PortfolioItemCard :project="project" @select="_onProjectSelected"></PortfolioItemCard>
        </div>
      </template>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import PortfolioItemCard from "./PortfolioItemCard.vue"

const props = defineProps(['data'])
const emit = defineEmits(['projectClicked'])

const _onProjectSelected = (project) => {
  emit('projectClicked', project)
}
</script>

<style scoped lang="scss">
</style>
