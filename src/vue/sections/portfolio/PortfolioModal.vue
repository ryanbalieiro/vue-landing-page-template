<template>
    <!-- Gallery Project Modal -->
    <div class="modal modal-xl fade" :id="UNIQUE_ID" tabindex="-1" :aria-labelledby="`${UNIQUE_ID}-label`" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <!-- Modal Content -->
            <div class="modal-content">
                <!-- Close Button -->
                <button class="close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa fa-close"/>
                </button>

                <!-- Body -->
                <div class="modal-body py-5 py-lg-4" v-if="props.item">
                    <div class="modal-body-wrapper">
                        <!-- Image Column -->
                        <div class="col-image">
                            <ImageView :src="props.item['imageUrl']"
                                       :alt="'about-logo'"
                                       :spinner-enabled="true"
                                       class="img"/>
                        </div>

                        <!-- Texts Column -->
                        <div class="col-texts">
                            <!-- Title -->
                            <h1 v-html="props.item['title']"/>

                            <!-- Tags -->
                            <span class="me-1 text-info-3"><i class="fa fa-tag me-1"/>Tags: </span>
                            <div class="d-inline-block">
                                <span v-for="tag in props.item['tags']" class="badge bg-primary me-1">{{ tag }}</span>
                            </div>

                            <!-- About Subsection -->
                            <div class="modal-subsection">
                                <h5 class="d-none d-lg-inline-block"><i class="fa fa-file me-1"/> About</h5>
                                <p class="text-info-2" v-html="props.item['description']"/>
                            </div>

                            <!-- Links Subsection -->
                            <div class="modal-subsection">
                                <h5><i class="fa fa-external-link me-1"/> Where To Find</h5>
                                <p class="text-info-2"><strong>{{ props.item['title'] }}</strong> is available on the following platforms or services:</p>
                                <SocialLinks :items="props.item['links']" :size="'lg'" :color="'dark'"/>
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
import ImageView from "../../widgets/ImageView.vue"
import SocialLinks from "../../widgets/SocialLinks.vue"

/**
 * @property {Object} project
 */
const props = defineProps({
    item: Object
})

/**
 * @const
 * @type {string}
 */
const UNIQUE_ID = 'gallery-modal'

/**
 * @type {Modal|null}
 */
let bsModal = null

/**
 * @public
 */
const display = () => {
    if(!bsModal)
        return

    bsModal.show()
}

/**
 * @private
 */
onMounted(() => {
    const elModal = document.getElementById(UNIQUE_ID)
    bsModal = new Modal(elModal, {})
})

defineExpose({
    display
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.modal-content {
    background-color: $light-1;
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
    color:$light-4;

    &:hover {
        color: $primary;
    }
}

.modal-body-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding:2rem;

    @include media-breakpoint-down(lg) {
        flex-direction: column;
        padding: 1rem;
        align-items: center;
    }

    @include media-breakpoint-down(md) {
        padding: 0.5rem;
    }
}

.col-image {
    aspect-ratio: 1/1;
    display: flex;
    margin-right: 3rem;
    min-width: 280px;
    height:280px;

    @include media-breakpoint-down(xl) {
        min-width: 250px;
        height: 250px;
    }

    @include media-breakpoint-down(lg) {
        min-width: 0;
        width: min(200px, 35vw);
        height: auto;
        margin-right: 0;
        margin-bottom: 2rem;
    }
}

.img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 20%;
}

.col-texts {
    text-align: justify;
    @include media-breakpoint-down(lg) {
        text-align: center;
    }
}

.modal-subsection {
    margin-top: 2rem;
}
</style>