<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Featured Item -->
        <div v-for="item in props.sectionData['items']" class="featured-item">
            <!-- Image Column -->
            <div class="col-image">
                <ImageView :src="item['imageUrl']"
                           :alt="'about-logo'"
                           class="img trace-shadow"/>
            </div>

            <!-- Texts Column -->
            <div class="col-texts">
                <h4 class="title"><i class="fa-solid fa-fire me-2"/> Latest Release</h4>
                <h1 class="project-title text-white text-uppercase" v-html="item['title']"/>
                <p class="description text-info-5 mt-4 mb-4" v-html="item['description']"/>
                <SocialLinks :items="item['links']" :color="'black'" :size="'xl'" class="mt-xl-5"/>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import SocialLinks from "../../widgets/SocialLinks.vue"
import ImageView from "../../widgets/ImageView.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.featured-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding:4rem 2rem;

    @include media-breakpoint-down(lg) {
        flex-direction: column;
        padding: 3rem 2rem;
        align-items: center;
    }

    @include media-breakpoint-down(md) {
        padding: 1rem;
    }
}

.col-image {
    aspect-ratio: 1/1;
    display: flex;
    margin-right: 6rem;
    min-width: 320px;
    height:320px;

    @include media-breakpoint-down(xl) {
        min-width: 300px;
        height: 300px;
        margin-right: 4rem;
    }

    @include media-breakpoint-down(lg) {
        min-width: 0;
        width: min(230px, 35vw);
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

.title {
    color: $light-5;
}

.description {
    color: $light-5;
}
</style>