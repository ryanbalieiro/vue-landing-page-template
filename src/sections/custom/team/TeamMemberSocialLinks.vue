<template>
  <div class="social-links">
    <template v-for="socialLink in socialLinks">
      <a class="btn btn-social mx-1" :href="socialLink.href" :aria-label="socialLink.icon">
        <i :class="socialLink.icon"></i>
      </a>
    </template>
  </div>
</template>

<script setup>
const props = defineProps(['socialLinks'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

$social-button-font-size:0.8rem;
.btn-social {
  color: white;
  border-color: lighten($dark, 10%);
  background-color: $dark;
  border-radius: 100%;
  border-width: 3px;

  display: inline-flex;
  width: calc($social-button-font-size*2.4);
  height: calc($social-button-font-size*2.4);
  font-size: $social-button-font-size;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    border-color: darken($primary, 5%);
    background-color: $primary;
  }
}

@include media-breakpoint-up(lg) {
  $social-button-font-size:1rem;
  .btn-social {
    width: calc($social-button-font-size*2.4);
    height: calc($social-button-font-size*2.4);
    font-size: $social-button-font-size;
  }
}

</style>
