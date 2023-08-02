<template>
  <SectionWrapper :data="data">

    <!-- Card Grid View (large screens) -->
    <div class="row text-center d-none d-lg-flex h-100 gy-3">
      <template v-for="member in data.content.items">
        <div class="col-lg-4 mx-auto">
          <TeamMemberRowItem :member="member"></TeamMemberRowItem>
        </div>
      </template>
    </div>

    <!-- List View (small screens) -->
    <ul class="d-lg-none">
      <template v-for="member in data.content.items">
        <TeamMemberListItem :member="member"></TeamMemberListItem>
      </template>
    </ul>

  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import TeamMemberRowItem from "./TeamMemberRowItem.vue"
import TeamMemberListItem from "./TeamMemberListItem.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
ul {
  position: relative;
  padding: 0;
  list-style: none;
}
</style>
