<template>
    <!-- Team Member Card -->
    <div class="px-0 px-lg-3 px-xl-4 mx-auto">
        <!-- Quote Balloon -->
        <div class="balloon">
            <div class="triangle"></div>
            <p class="text-muted text-2 mt-2 px-3">
                <i class="fa fa-quote-left me-2 text-primary"/>{{teamMemberData['quote']}}<i class="fa fa-quote-right ms-2 text-primary"/>
            </p>
        </div>

        <!-- Avatar -->
        <div class="thumbnail-wrapper">
            <ImageView :src="teamMemberData['imageUrl']" :alt="teamMemberData['title']" class="img-thumb"/>
        </div>

        <!-- Texts And Links -->
        <div class="about-wrapper">
            <h4 class="my-3 mt-2 mt-xxl-3 mb-1">{{ teamMemberData['title'] }}</h4>
            <p class="text-muted text-4 fw-bold mb-2 pb-1">{{ teamMemberData['description'] }}</p>
            <SocialLinks :items="teamMemberData['links']" :color="constants.SocialLinksColor.LIGHT_DARK" :size="constants.SocialLinksSize.MD" class="mb-3"/>
        </div>
    </div>
</template>

<script setup>
import SocialLinks from "../../widgets/SocialLinks.vue"
import ImageView from "../../widgets/ImageView.vue"
import {useConstants} from "../../../composables/constants.js"

/**
 * @property {Object} teamMemberData
 */
const props = defineProps({
    teamMemberData: Object
})

const constants = useConstants()
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

$balloon-color: lighten($primary, 46%);

.img-thumb {
    @include generate-dynamic-styles-with-hash((
        xxxl: (height: 170px),
        xxl:  (height: 150px),
        xl:   (height: 145px),
        lg:   (height: 140px),
        md:   (height: 130px),
        sm:   (height: 110px)
    ));

    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 100%;
    border: 6px $balloon-color solid;
}

.balloon {
    --height: clamp(130px, 18.5vh, 150px);
    --padding: 0.5rem;

    @include media-breakpoint-down(sm) {
        --height: 130px;
        --padding: 0.25rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    height: var(--height);
    overflow: hidden;
    padding: var(--padding);
    margin-bottom: 1.5rem;

    background-color: $balloon-color;
    border-radius: 20px;

    .triangle {
        position: absolute;
        margin-top: calc(var(--height) + 10px);
        width: 0;
        height: 0;

        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid $balloon-color;
    }
}
</style>