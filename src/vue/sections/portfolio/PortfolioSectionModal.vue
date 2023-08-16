<template>
    <!-- Gallery Project Modal -->
    <div class="modal modal-xl fade" :id="modalId" tabindex="-1" :aria-labelledby="`${modalId}-label`" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <!-- Modal Content -->
            <div class="modal-content">
                <!-- Close Button -->
                <button class="close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa fa-close"></i>
                </button>

                <!-- Body -->
                <div class="modal-body py-5 py-lg-4">
                    <!-- Content Row -->
                    <div class="row text-center text-lg-start p-2 p-md-4">
                        <!-- Image Column -->
                        <div class="col-12 col-lg-4 pe-0 pe-lg-4">
                            <ImageView  :src="projectLogoPath"
                                        :alt="projectTitle"
                                        :spinner-enabled="true"
                                        class="logo my-auto my-lg-0 mb-4">
                            </ImageView>
                        </div>

                        <!-- Texts Column -->
                        <div class="col-12 col-lg-8">
                            <!-- Title -->
                            <h1 v-html="projectTitle"></h1>

                            <!-- Tags -->
                            <span class="me-1"><i class="fa fa-tag me-1"></i>Tags: </span>
                            <div class="d-inline-block">
                                <span v-for="tag in projectTags" class="badge bg-primary me-1">{{ tag }}</span>
                            </div>

                            <!-- About Subsection -->
                            <div class="modal-subsection">
                                <h5 class="d-none d-lg-inline-block"><i class="fa fa-file me-1"></i> About</h5>
                                <p class="info-sm" v-html="projectDescription"></p>
                            </div>

                            <!-- Links Subsection -->
                            <div class="modal-subsection">
                                <h5><i class="fa fa-external-link me-1"></i> Where To Find</h5>
                                <p class="info-sm"><strong>{{ projectTitle }}</strong> is available on the following platforms or services:</p>
                                <SocialLinks :items="projectLinks" :size="'lg'" :color="'dark'"></SocialLinks>
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
import SocialLinks from "../../widgets/SocialLinks.vue"
import ImageView from "../../widgets/ImageView.vue"

const props = defineProps(['staticTexts'])
const modalId = 'gallery-modal'

let bsModal = null

const projectTitle = ref(null)
const projectDescription = ref(null)
const projectTags = ref(null)
const projectLogoPath = ref(null)
const projectLinks = ref(null)

const displayProject = (project) => {
    projectTitle.value = project.title
    projectDescription.value = project.description
    projectTags.value = project.tags
    projectLinks.value = project.links
    projectLogoPath.value = project.logo

    if(bsModal) {
        bsModal.show()
    }
}

onMounted(() => {
    let modalElement = document.getElementById(modalId)
    bsModal = new Modal(modalElement, {})
})

defineExpose({
    displayProject
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.modal-content {
    background-color: $gray-100;
}

.close-button {
    position: absolute;
    right: 20px;
    top:10px;

    z-index: 99;
    padding:0;
    margin:0;
    font-size: 1.7rem;

    background-color: transparent;
    border-color: transparent;
    color:$gray-400;

    &:hover {
        color: $primary;
    }
}

.modal-subsection {
    --margin-top:35px;
    @include media-breakpoint-down(lg) {
        --margin-top: 30px;
    }

    margin-top: var(--margin-top);

    p {
        color: $gray-700;
    }
}

.logo {
    --max-width:100%;
    --border-radius:60px;
    margin: auto;
    overflow: hidden;

    @include media-breakpoint-down(xl) {
        --border-radius:50px;
    }
    @include media-breakpoint-down(lg) {
        --max-width:max(150px, min(20vw, 100%));
        --margin-bottom:80px;
        --border-radius:40px;
    }

    width: 100%;
    aspect-ratio: 1/1;
    max-width: var(--max-width);
    border-radius: var(--border-radius);
}
</style>