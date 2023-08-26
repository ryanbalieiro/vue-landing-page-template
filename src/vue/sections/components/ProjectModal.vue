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

                <!-- Project Banner -->
                <div class="modal-body py-5 py-lg-4" v-if="props.project">
                    <ProjectBanner :project="props.project" :type="constants.ProjectBannerType.STANDARD"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import {useConstants} from "../../../composables/constants.js"
import Modal from '/node_modules/bootstrap/js/src/modal'
import ProjectBanner from "./ProjectBanner.vue"

/**
 * @property {Object} project
 */
const props = defineProps({
    project: Object
})

const constants = useConstants()

/**
 * @const
 * @type {string}
 */
const UNIQUE_ID = 'project-modal'

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
</style>