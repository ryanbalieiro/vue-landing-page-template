<template>
  <li class="team-member-list-item d-flex">
    <!-- Image -->
    <div class="list-item-image-container flex-shrink-0">
      <img class="img-avatar img-fluid" :src="member.srcAvatar" :alt="member.name" />
    </div>

    <!-- Panel -->
    <div class="list-item-panel">
      <!-- Panel Header -->
      <div class="list-item-panel-header mb-3">
        <h4 class="my-3 mb-1">{{ member.name }}</h4>
        <span class="badge mb-3 mt-1">
          <i class="fa fa-suitcase me-1"></i> {{ member.role }}
        </span>
        <TeamMemberSocialLinks :social-links="member.socialLinks"></TeamMemberSocialLinks>
      </div>

      <!-- Panel Body -->
      <div class="list-item-panel-body pb-3">
        <!-- Quote -->
        <p class="text-muted quote">
          <i class="fa-regular fa-comments me-1"></i> “{{member.quote}}”
        </p>
      </div>
    </div>
  </li>
</template>

<script setup>
import TeamMemberSocialLinks from "./TeamMemberSocialLinks.vue";

const props = defineProps(['member'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

li {
  position: relative;
  min-height: 50px;
  margin-bottom: 35px;
  margin-top: 35px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
}

.badge {
  background-color: darken($primary-faded, 25%);
  margin-left: 0.3rem;
  border-radius:20px;
}

.list-item-image-container {
  width: 120px;
  height: 120px;
  overflow: hidden;
  color: white;
  border: 4px solid $gray-200;
  border-radius: 100%;
  background-color: $gray-400;
}

.list-item-panel {
  padding-left: 1rem;
  margin-top: -1rem;
}

@include media-breakpoint-down(sm) {
  $image-width: min(20vw, 90px);
  .list-item-image-container {
    width: $image-width;
    height: $image-width;
  }
}
</style>
