<template>
    <SectionTemplate :section-data="props.sectionData">
        <div class="row mb-4">
            <!-- Left Column -->
            <div class="left-col col-12 col-lg-4 col-xl-4">
                <ImageView :src="props.sectionData.sectionContent.image"
                           :alt="'logo'"
                           class="img-logo">
                </ImageView>
            </div>

            <!-- Right Column -->
            <div class="right-col col-12 col-lg-8 col-xl-8">
                <div class="text-wrapper my-auto">
                    <template v-for="paragraph in props.sectionData.sectionContent.paragraphs">
                        <p class="info-sm" v-html="paragraph"></p>
                    </template>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import ImageView from "../../widgets/ImageView.vue"

const props = defineProps(['sectionData'])
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.left-col {
    display: flex;
    text-align: end;
    padding: 0 2rem 1rem 2rem;

    .img-logo {
        max-height: 50vh;
        width: 100%;
        max-width: 50vw;
    }

    @include media-breakpoint-down(xl) {
        padding: 0 1.5rem 1rem 4rem;
    }

    @include media-breakpoint-down(lg) {
        display: block;
        text-align: center;
        padding: 0 2rem 2rem 2rem;

        .img-logo {
            height: 200px;
            width: auto;
        }
    }

    @include media-breakpoint-down(sm) {
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }
}

.right-col {
    display: flex;
    text-align: justify;
    padding: 0 2rem 1rem 2rem;

    @include media-breakpoint-down(xl) {
        padding: 0 4rem 1rem 1.5rem;
    }

    @include media-breakpoint-down(md) {
        padding: 1rem;
    }

    @include media-breakpoint-down(sm) {
        padding-bottom: 0.5rem;
    }
}
</style>