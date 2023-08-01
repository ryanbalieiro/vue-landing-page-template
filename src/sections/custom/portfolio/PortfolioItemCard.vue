<template>
  <!-- Portfolio Item -->
  <div class="portfolio-item box-shadow-light h-100">

    <!-- Clickable Image -->
    <a class="portfolio-link" @click="_select()">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content"><i class="fas fa-eye fa-2x"></i></div>
      </div>
      <img class="portfolio-cover-img img-fluid" :src="project.srcImage" :alt="project.title" />
    </a>

    <!-- Info -->
    <div class="portfolio-caption">
      <h5 class="mb-1">{{ project.title }}</h5>
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

.portfolio-item {
  border: 2px $gray-200 solid;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.portfolio-link {
  position: relative;
  display: block;
  margin: 0 auto;
  border-bottom: 2px solid $gray-100;
  cursor: pointer;

  .portfolio-hover {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background: fade-out($primary, 0.1);
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity ease-in-out 0.25s;

    .portfolio-hover-content {
      font-size: 1.25rem;
      color: white;
    }
  }

  &:hover {
    .portfolio-hover {
      opacity: 1;
    }
  }
}

.portfolio-caption {
  background-color: $white;
  padding: 0.5rem;

  @include media-breakpoint-up(md) {
    padding: 1rem;
  }
}
</style>