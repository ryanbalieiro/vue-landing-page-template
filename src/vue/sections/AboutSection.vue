<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- About Item -->
        <div v-for="item in props.sectionData['items']" class="about-item">
            <!-- Image Column -->
            <div class="col-image">
                <ImageView :src="item['imageUrl']" :alt="'about-logo'" class="img"/>
            </div>

            <!-- Texts Column -->
            <div class="col-texts">
                <p v-for="paragraph in item['description']" class="text-4" v-html="paragraph"/>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "./templates/SectionTemplate.vue"
import ImageView from "../widgets/ImageView.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.about-item {
    display: flex;
    flex-direction: row;
    width: 100%;

    @include media-breakpoint-down(lg) {
        flex-direction: column;
    }
}

.col-image {
    @include generate-dynamic-styles-with-hash((
        xxxl: (min-width: 380px, margin-right: 4rem),
        xxl:  (min-width: min(33vw, 300px), margin-right: 3.5rem),
        lg:   (min-width: 0, margin-right:0, margin-bottom:2rem, max-width:40vw, max-height:200px)
    ));

    display: flex;
    aspect-ratio: 1/1;
}

.col-image, .col-texts {
    align-self: center;
    text-align: justify;
}

.img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
</style>