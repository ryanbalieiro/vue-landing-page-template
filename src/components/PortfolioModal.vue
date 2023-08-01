<template>
  <!-- Portfolio Modal -->
  <div class="modal modal-xl fade" id="portfolio-modal" tabindex="-1" aria-labelledby="portfolio-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Body -->
        <div class="modal-body">
          <div class="row text-center text-lg-start p-2 p-md-4">
            <!-- Image -->
            <div class="col-12 col-lg-4 ps-2 pe-2 pe-lg-5">
              <img class="img-fluid logo" :src="projectImage" alt="logo">
            </div>

            <!-- Texts -->
            <div class="col-12 col-lg-8">
              <!-- Title -->
              <h1 class="display-5" v-html="projectTitle"></h1>

              <!-- Tags -->
              <div class="project-tags">
                <span class="me-1"><i class="fa fa-tag me-1"></i> Tags: </span>
                <template v-for="tag in projectTags">
                  <span class="badge bg-primary me-1">{{ tag }}</span>
                </template>
              </div>

              <!-- Description -->
              <p class="description mt-4" v-html="projectDescription"></p>
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

const projectTitle = ref(null)
const projectDescription = ref(null)
const projectTags = ref(null)
const projectImage = ref(null)
let bsModal = null

const displayProject = (project) => {
  projectTitle.value = project.title
  projectDescription.value = project.description
  projectTags.value = project.tags
  projectImage.value = project.logo

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

.logo {
  border-radius: 30px;
  margin-bottom: 40px;
  max-width: min(20vw,100%);
}

p {
  font-size: 0.8rem;
  @include media-breakpoint-up(md) {
    font-size: 0.9rem;
  }
}

</style>
