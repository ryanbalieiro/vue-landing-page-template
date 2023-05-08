<template>
  <PageSectionWrapper :id="portfolioData.id" :title="portfolioData.title" :subtitle="portfolioData.subtitle">
    <div class="row h-100">
      <template v-for="project in portfolioData.projects">
        <div class="col-6 col-md-4 mb-4">
          <!-- Portfolio Item -->
          <div class="portfolio-item box-shadow-with-border h-100">

            <!-- Clickable Image -->
            <a class="portfolio-link" @click="_onProjectSelected(project)">
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
        </div>
      </template>
    </div>
  </PageSectionWrapper>
</template>

<script setup>
import agencyData from '../data/agency.json'
import PageSectionWrapper from "../components/PageSectionWrapper.vue"
const portfolioData = agencyData.portfolio
const emit = defineEmits(['projectClicked'])

const _onProjectSelected = (project) => {
  emit('projectClicked', project)
}
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.portfolio-item {
  margin-left: auto;
  margin-right: auto;
  text-align: center;

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
}
</style>
