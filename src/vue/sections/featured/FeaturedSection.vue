<template>
    <SectionTemplate :section-data="props.sectionData">
        <div class="featured-project">
            <div class="featured-row">
                <!-- Image -->
                <div class="image-col">
                    <Image :class="'img-fluid logo trace-shadow'" :src="project.logo" :alt="'logo'"></Image>
                </div>

                <!-- Texts -->
                <div class="texts-col mt-4 pt-2 mt-md-0 pt-md-0">
                    <h5 class="title"><i class="fa-solid fa-fire me-2 text-white"></i> {{props.sectionData.sectionContent.title}}</h5>
                    <h1 class="project-title display-1" v-html="project.title"></h1>
                    <p class="description info mt-4" v-html="project.description"></p>
                    <SocialLinks :items="project.links" :color="'dark'" :size="'xl'" class="mt-4"></SocialLinks>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import {computed} from "vue"
import SocialLinks from "../../widgets/SocialLinks.vue"
import Image from "../../widgets/Image.vue"

const props = defineProps(['sectionData'])

const project = computed(() => {
    return props.sectionData.sectionContent.project
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.featured-project {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: max(50vh, 400px);
}

.featured-row {
    --flex-direction:row;
    --text-align:left;

    --image-dimensions: max(14vw, 320px);
    --vertical-padding: 2rem;
    --column-spacing: 6rem;

    @include media-breakpoint-down(xl) {
        --image-dimensions: 280px;
        --vertical-padding: 2.5rem;
        --column-spacing: 4rem;
    }
    @include media-breakpoint-down(lg) {
        --image-dimensions: 240px;
        --vertical-padding: 1.5rem;
        --column-spacing: 4rem;
    }
    @include media-breakpoint-down(md) {
        --flex-direction: column;
        --text-align:center;

        --image-dimensions: 200px;
        --vertical-padding: 0;
        --column-spacing: 0;
    }
    @include media-breakpoint-down(sm) {
        --image-dimensions: 160px;
    }

    display: flex;
    flex-direction: var(--flex-direction);
    text-align: var(--text-align);

    .image-col {
        padding-left: var(--vertical-padding);
        padding-right: var(--column-spacing);

        .logo {
            border-radius: calc(var(--image-dimensions)/4.5);
            max-height: var(--image-dimensions);
            max-width: min(var(--image-dimensions));
            @include media-breakpoint-down(md) {
                max-width: min(var(--image-dimensions), 25vh);
            }
        }
    }

    .texts-col {
        padding-right: var(--vertical-padding);
    }
}

.title {
    color: $gray-500;
}

.project-title {
    color: $white;
}

.description {
    color: $gray-400;
}
</style>