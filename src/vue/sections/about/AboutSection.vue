<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- About Item -->
        <div v-for="item in props.sectionData['items']" class="about-item">
            <!-- Image Column -->
            <div class="col-image">
                <ImageView :src="item['imageUrl']"
                           :alt="'about-logo'"
                           class="img"/>
            </div>

            <!-- Texts Column -->
            <div class="col-texts">
                <div class="paragraphs-wrapper">
                    <p v-for="paragraph in item['description']"
                       class="text-info-4"
                       v-html="paragraph"/>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
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

.about-item {
    display: flex;
    flex-direction: row;
    width: 100%;

    @include media-breakpoint-down(lg) {
        flex-direction: column;
    }
}

.col-image, .col-texts {
    align-self: center;
}

.col-image {
    aspect-ratio: 1/1;
    display: flex;
    margin-right: 4rem;
    min-width: 380px;

    @include media-breakpoint-down(xxl) {
        min-width: min(33vw, 320px);
        margin-right: 3.5rem;
    }

    @include media-breakpoint-down(lg) {
        margin-right: 0;
        margin-bottom: 2rem;
        min-width: 0;
        max-width: 40vw;
        max-height: 200px;
    }
}

.img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.col-texts {
    text-align: justify;
}
</style>