<template>
  <div class="team-member-card">
    <!-- Avatar -->
    <div class="card-thumb">
      <img class="img-avatar img-fluid" :src="member.srcAvatar" :alt="member.name" />
    </div>

    <!-- Texts And Links -->
    <div class="card-body pb-5">
      <!-- Header -->
      <h4 class="my-3 mb-1">{{ member.name }}</h4>
      <p class="text-muted fw-bold mb-2 pb-1">{{ member.role }}</p>

      <!-- Social Links -->
      <SocialLinks :items="member.socialLinks" :colors="'dark'" :size="'sm'" class="mb-3"></SocialLinks>

      <!-- Quote -->
      <p class="text-muted quote mt-2 px-3">
        <i class="fa fa-quote-left me-1"></i> {{member.quote}} <i class="fa fa-quote-right ms-1"></i>
      </p>
    </div>
  </div>
</template>

<script setup>
import SocialLinks from "../../../components/SocialLinks.vue"

const props = defineProps(['member'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.team-member-card {
  text-align: center;
}

.img-avatar {
  border-radius: 100%;
  max-height: 190px;
  max-width: 190px;
  border: 6px $gray-200 solid;
}

.card-body {
  height: 100%;
}

.quote {
  font-size: 0.9rem!important;
}
</style>
