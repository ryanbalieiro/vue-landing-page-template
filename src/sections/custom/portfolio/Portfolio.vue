<template>
  <SectionWrapper :data="data">
    <!-- Projects Grid -->
    <div class="row h-100">
      <template v-for="project in data.content.items">
        <div class="col-6 col-md-4 mb-4">
          <!-- Portfolio Item -->
          <PortfolioItemCard
              :project="project"
              @select="_onProjectSelected">
          </PortfolioItemCard>
        </div>
      </template>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import PortfolioItemCard from "./PortfolioItemCard.vue";

const props = defineProps(['data'])
const emit = defineEmits(['projectClicked'])

const _onProjectSelected = (project) => {
  emit('projectClicked', project)
}
</script>

<style scoped lang="scss">
</style>
