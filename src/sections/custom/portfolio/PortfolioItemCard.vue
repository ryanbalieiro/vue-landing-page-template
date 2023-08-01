<template>
  <!-- Portfolio Item -->
  <div class="portfolio-item text-center row">
    <!-- Project Logo -->
    <div class="portfolio-item-image-wrapper" @click="_select()">
      <img class="logo" :src="project.logo" alt="logo">

      <div class="hover-overlay">
        <div class="hover-overlay-content">
          <i class="fas fa-eye fa-2x"></i>
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <div class="portfolio-item-description">
      <button class="btn btn-link portfolio-item-title mt-1 mb-0 pb-0" @click="_select()">{{ project.title }}</button>
      <p class="portfolio-item-category text-muted">{{ project.category }}</p>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['select'])
const props = defineProps(['project'])

const _select = () => {
  emit('select', props.project)
}
</script>

<style lang="scss" scoped>
@import "../../../scss/_theming.scss";

.portfolio-item-image-wrapper {
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  padding: 0;
  overflow: hidden;

  border-radius: 30px;
  height: min(20vw,100px);
  width: min(20vw,100px);

  .logo {
    width: 100%;
    height: 100%;
  }
}

.hover-overlay {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  background: fade-out($primary, 0.1);
  align-items: center;
  justify-content: center;
  transition: opacity ease-in-out 0.25s;

  .hover-overlay-content {
    font-size: 1.25rem;
    color: white;
  }
}

.portfolio-item-title {
  font-size: 1.1rem;
  font-family: $headings-font-family;
  text-decoration: none;
  color: $dark;
}

.portfolio-item:hover {
  .portfolio-item-title {
    color: $primary;
  }

  .hover-overlay {
    opacity: 1;
  }
}

@include media-breakpoint-up(sm) {
  .portfolio-item-image-wrapper {
    height: 130px;
    width: 130px;
  }
}

@include media-breakpoint-up(md) {
  .portfolio-item-title {
    font-size: 1.4rem;
  }

  .portfolio-item-image-wrapper {
    height: 150px;
    width: 150px;
  }
}

@include media-breakpoint-up(lg) {
  .portfolio-item-title {
    font-size: 1.5rem;
  }

  .portfolio-item-image-wrapper {
    height: 180px;
    width: 180px;
  }
}

</style>