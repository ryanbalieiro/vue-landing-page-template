<template>
  <!-- Portfolio Modal -->
  <div class="modal modal-xl fade" id="portfolio-modal" tabindex="-1" aria-labelledby="portfolio-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Body -->
        <div class="modal-body py-5 py-lg-3">
          <!-- Close Button -->
          <button class="close-button" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-close"></i> </button>

          <!-- Content Row -->
          <div class="row text-center text-lg-start p-2 p-md-4">
            <!-- Image Column -->
            <div class="col-12 col-lg-4 ps-2 pe-2 pe-lg-5">
              <img class="img-fluid logo my-auto my-lg-0 mb-3" :src="projectImage" alt="logo">
            </div>

            <!-- Texts Column -->
            <div class="col-12 col-lg-8">
              <!-- Title -->
              <h1 v-html="projectTitle"></h1>

              <!-- Tags -->
              <div class="project-tags">
                <span class="me-1"><i class="fa fa-tag me-1"></i> Tags: </span>
                <template v-for="tag in projectTags">
                  <span class="badge bg-primary me-1">{{ tag }}</span>
                </template>
              </div>

              <!-- Description -->
              <div class="project-info-section">
                <h5 class="d-none d-lg-inline-block"><i class="fa fa-file me-1"></i> About</h5>
                <p class="description" v-html="projectDescription"></p>
              </div>

              <!-- Project Links -->
              <div class="project-info-section" v-if="projectLinks">
                <h5><i class="fa fa-external-link me-1"></i> Where To Find</h5>
                <p><span class="fw-bold">{{ projectTitle }}</span> is available on the following platforms or services: </p>
                <SocialLinks :items="projectLinks" :size="'mid'" :colors="'dark'"></SocialLinks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import Modal from '/node_modules/bootstrap/js/src/modal'
import SocialLinks from "./SocialLinks.vue"

const projectTitle = ref(null)
const projectDescription = ref(null)
const projectTags = ref(null)
const projectImage = ref(null)
const projectLinks = ref(null)
let bsModal = null

const displayProject = (project) => {
  projectTitle.value = project.title
  projectDescription.value = project.description
  projectTags.value = project.tags
  projectImage.value = project.logo
  projectLinks.value = project.links

  if(bsModal)
    bsModal.show()
}

onMounted(() => {
  let modalElement = document.getElementById('portfolio-modal')
  bsModal = new Modal(modalElement, {})
})

defineExpose({
  displayProject
})
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.close-button {
  background-color: transparent;
  border-color: transparent;
  font-size: 1.7rem;
  padding:0;
  margin:0;
  color:$gray-400;
  position: absolute;
  right: 20px;

  &:hover {
    color: $primary;
  }
}

.project-info-section {
  margin-top: 25px;

  p {
    font-size: 0.85rem;
  }

  @include media-breakpoint-down(sm) {
    p {
      font-size: 0.75rem;
    }
  }
}

.logo {
  border-radius: 30px;
  margin-bottom: 40px;
  max-width: max(150px, min(20vw,100%));

  @include media-breakpoint-up(lg) {
    width: 100%;
    max-width: 100%;
  }
}

p {
  font-size: 0.8rem!important;
  @include media-breakpoint-up(xl) {
    font-size: 0.9rem!important;
  }
}

</style>
