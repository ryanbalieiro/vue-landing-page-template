<template>
  <li class="team-member-list-item d-flex">
    <!-- Image Wrapper -->
    <div class="flex-shrink-0">
      <div class="list-item-image-container">
        <img class="img-avatar img-fluid" :src="member.srcAvatar" :alt="member.name" />
      </div>
    </div>

    <!-- Panel -->
    <div class="list-item-panel pt-2 pb-4">
      <!-- Header -->
      <h4>{{ member.name }}</h4>

      <!-- Role Badge -->
      <span class="badge mb-3 mt-1">
        <i class="fa fa-suitcase me-1"></i> {{ member.role }}
      </span>

      <!-- Quote -->
      <p class="text-muted quote"><i class="fa fa-comments me-1"></i> “{{member.quote}}”</p>
    </div>
  </li>
</template>

<script setup>
import SocialLinks from "../../../components/SocialLinks.vue"

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

.social-link {
  font-size: 1.3rem;
}

@include media-breakpoint-down(sm) {
  $image-width: min(20vw, 90px);
  .list-item-image-container {
    width: $image-width;
    height: $image-width;
  }
}
</style>
