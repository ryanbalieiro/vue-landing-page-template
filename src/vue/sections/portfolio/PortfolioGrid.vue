<template>
    <!-- Portfolio Grid -->
    <div class="portfolio-grid row mb-5">
        <div v-for="item in props.items"
             v-show="item.visible"
             :class="{'portfolio-grid-col-appear': item.visible && !isAnimating}"
             class="portfolio-grid-col col-4 col-lg-3 text-center">

            <!-- Item -->
            <div class="portfolio-item" @click="_onItemClicked(item.data)">
                <!-- Logo -->
                <div class="portfolio-thumb-wrapper">
                    <ImageView :src="item.data['imageUrl']"
                               :alt="item.data['title']"
                               class="portfolio-thumb"/>

                    <div class="portfolio-thumb-overlay">
                        <div class="portfolio-thumb-overlay-content eq-h5">
                            <i class="fas fa-eye fa-2x"></i>
                        </div>
                    </div>
                </div>

                <!-- Project Info -->
                <div class="portfolio-description-wrapper">
                    <button class="portfolio-title">{{ item.data['title'] }}</button>
                    <p class="portfolio-category text-muted">{{ item.category }}</p>
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
    selectedCategoryId:String
})

const emit = defineEmits(['open'])

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
 * @param {Object} itemData
 * @private
 */
const _onItemClicked = (itemData) => {
    emit('open', itemData)
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

.portfolio-grid {
    --logo-size: min(clamp(90px, 20vh, 165px), clamp(90px, 11.5vw, 170px));

    @include media-breakpoint-down(lg) {
        --logo-size: min(clamp(90px, 12.5vh, 120px), clamp(90px, 20.5vw, 120px));
    }

    @include media-breakpoint-down(md) {
        --logo-size: min(clamp(75px, 12.5vh, 120px), clamp(75px, 20.5vw, 120px));
    }

    min-height: calc(var(--logo-size)*3.5);

    .portfolio-item {
        display: inline-flex;
        flex-direction: column;
        position: relative;
        margin-top: calc(var(--logo-size)/2.5);
    }

    .portfolio-thumb-wrapper {
        position: relative;
        margin: 0 auto;
        cursor: pointer;
        height: var(--logo-size);
        width: var(--logo-size);
        overflow: hidden;
        border-radius: calc(var(--logo-size)/4.5);
    }

    .portfolio-thumb {
        width: 100%;
        height: 100%;
    }

    .portfolio-thumb-overlay {
        position: absolute;
        top: 0;
        opacity: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        border-radius: calc(var(--logo-size)/4.5);

        background: fade-out(lighten($primary, 5%), 0.1);
        transition: all ease-in-out 0.25s;

        &-content {
            color: $white;
        }
    }

    .portfolio-title {
        border: none;
        margin: calc(var(--logo-size)/10) 0 0;
        padding: 0;
        font-family: $headings-font-family;
        font-size: calc(var(--logo-size)/5.75);
        background-color: transparent;
        color: $dark;
    }

    .portfolio-category {
        margin: 0;
        padding: 0;
        font-size: calc(var(--logo-size)/9.5);

        @include media-breakpoint-down(sm) {
            font-size: calc(var(--logo-size)/7.5);
        }
    }

    .portfolio-item:hover {
        .portfolio-title {
            color: lighten($primary, 10%);
            transition: color ease-in-out 0.3s;
        }

        .portfolio-thumb-overlay {
            opacity: 1;
        }
    }
}

.portfolio-grid-col-appear {
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