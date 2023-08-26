<template>
    <div class="project-grid row mb-4">
        <!-- Grid Column -->
        <div v-for="item in props.items"
             v-show="item.visible"
             class="project-grid-col col-4 col-lg-3 text-center"
             :class="{'project-grid-col-appear': item.visible && !isAnimating}">

            <!-- Item -->
            <div class="project-item" @click="_onItemClicked(item)">
                <!-- Logo -->
                <div class="project-thumb-wrapper">
                    <ImageView :src="item.data['imageUrl']"
                               :alt="item.data['title']"
                               class="project-thumb"/>

                    <div class="project-thumb-overlay">
                        <div class="project-thumb-overlay-content eq-h6">
                            <i class="fas fa-eye fa-2x"></i>
                        </div>
                    </div>
                </div>

                <!-- Project Info -->
                <div class="project-description-wrapper">
                    <button class="project-title">{{ item.data['title'] }}</button>
                    <p class="project-category text-muted">{{ item.category }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from "vue"
import ImageView from "../../widgets/ImageView.vue"

/**
 * @property {Object[]} items
 * @property {String} selectedCategoryId
 */
const props = defineProps({
    items: Array,
    selectedCategoryId: String
})

const emit = defineEmits(['opened'])

/**
 * @const
 * @type {number}
 */
const ANIMATION_DURATION = 0.3

/** @type {Boolean||{value:Boolean}} **/
const isAnimating = ref(false)

/** @type {Number} **/
let timeout = null

/**
 * @param {Object} item
 * @private
 */
const _onItemClicked = (item) => {
    emit('opened', item.data)
}

/**
 * @private
 */
watch(() => props.selectedCategoryId, () => {
    isAnimating.value = false
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        isAnimating.value = true
    }, ANIMATION_DURATION*1000)
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.project-grid {
    --logo-size: min(clamp(140px, 20vh, 170px), clamp(140px, 10.5vw, 170px));
    @include media-breakpoint-down(lg) {
        --logo-size: min(clamp(80px, 20vh, 110px), clamp(70px, 20.5vw, 110px));
    }

    min-height: calc(var(--logo-size) * 3.5);

    .project-item {
        display: inline-flex;
        flex-direction: column;
        position: relative;
        margin-top: calc(var(--logo-size)/3);
    }

    .project-thumb-wrapper {
        position: relative;
        margin: 0 auto;
        cursor: pointer;
        height: var(--logo-size);
        width: var(--logo-size);
        overflow: hidden;
        border-radius: 25%;
    }

    .project-thumb {
        width: 100%;
        height: 100%;
    }

    .project-thumb-overlay {
        position: absolute;
        top: 0;
        opacity: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        border-radius: 25%;

        background: fade-out(lighten($primary, 5%), 0.1);
        transition: all ease-in-out 0.25s;

        &-content {
            color: $white;
        }
    }

    .project-title {
        border: none;
        padding: 0;
        background-color: transparent;
        color: $dark;

        margin: calc(var(--logo-size)/12) 0 0;
        font-size: calc(var(--logo-size)/7.8);
        font-family: $headings-font-family;
        @include media-breakpoint-down(lg) {
            margin: calc(var(--logo-size)/12) 0 0;
            font-size: calc(var(--logo-size)/6.1);
        }
    }

    .project-category {
        margin: 0;
        padding: 0;

        font-size: calc(var(--logo-size)/10.5);
        @include media-breakpoint-down(lg) {
            font-size: calc(var(--logo-size)/7.5);
        }
    }

    .project-item:hover {
        .project-title {
            color: lighten($primary, 10%);
            transition: color ease-in-out 0.3s;
        }

        .project-thumb-overlay {
            opacity: 1;
        }
    }
}

.project-grid-col-appear {
    animation: appear 0.3s ease-out forwards;
}

@keyframes appear {
    from {
        opacity:0;
        transform: scale(0.3) translateY(-20%);
    }
    to {
        opacity:1
    }
}
</style>