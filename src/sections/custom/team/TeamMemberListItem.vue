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
        <span class="badge bg-light text-muted mb-3 mt-1">
          <i class="fa fa-user me-1"></i> {{ member.role }}
        </span>
        <TeamMemberSocialLinks :social-links="member.socialLinks"></TeamMemberSocialLinks>
      </div>

      <!-- Panel Body -->
      <div class="list-item-panel-body">
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
  margin-bottom: 25px;
  margin-top: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    border-bottom: none;
  }
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
  .list-item-image-container {
    width: 90px;
    height: 90px;
  }
}
</style>
