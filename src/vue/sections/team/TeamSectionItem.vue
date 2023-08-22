<template>
    <!-- Grid Item -->
    <div class="col-12 col-md-6 col-lg-4 px-0 px-lg-3 px-xl-4 mx-auto">
        <!-- Quote Balloon -->
        <div class="balloon">
            <div class="triangle"></div>
            <p class="text-muted text-info-2 mt-2 px-3">
                <i class="fa fa-quote-left me-2 text-primary"/>{{item['quote']}}<i class="fa fa-quote-right ms-2 text-primary"/>
            </p>
        </div>

        <!-- Avatar -->
        <div class="thumbnail-wrapper">
            <ImageView :src="item['imageUrl']"
                       :alt="item['title']"
                       class="img-avatar"/>
        </div>

        <!-- Texts And Links -->
        <div class="about-wrapper">
            <!-- Header -->
            <h4 class="my-3 mt-2 mt-xxl-3 mb-1">{{ item['title'] }}</h4>
            <p class="text-muted text-info-4 fw-bold mb-2 pb-1">{{ item['description'] }}</p>
            <!-- Social Links -->
            <SocialLinks :items="item['links']" :color="'lightDark'" :size="'md'" class="mb-3"/>
        </div>
    </div>
</template>

<script setup>
import SocialLinks from "../../widgets/SocialLinks.vue"
import ImageView from "../../widgets/ImageView.vue"

/**
 * @property {Object} item
 */
const props = defineProps({
    item: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.img-avatar {
    --dimensions:170px;
    @include media-breakpoint-down(xxl) {--dimensions:160px;}
    @include media-breakpoint-down(xl) {--dimensions:150px;}
    @include media-breakpoint-down(lg) {--dimensions:140px;}
    @include media-breakpoint-down(md) {--dimensions:130px;}
    @include media-breakpoint-down(sm) {--dimensions:110px;}

    max-height: var(--dimensions);
    max-width: var(--dimensions);
    overflow: hidden;
    border-radius: 100%;
    border: 6px $balloon-color solid;
}

.balloon {
    --height: 150px;
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