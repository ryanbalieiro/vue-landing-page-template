<template>
    <SectionTemplate :section-data="props.sectionData">
        <div class="project-banner-wrapper">
            <!-- Project Banner -->
            <ProjectBanner :project="props.sectionData['items'][0]" :type="constants.ProjectBannerType.FEATURED"/>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "./templates/SectionTemplate.vue"
import ProjectBanner from "./components/ProjectBanner.vue"
import {useConstants} from "../../composables/constants.js"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})

const constants = useConstants()
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.project-banner-wrapper {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 2rem 0),
        lg:   (padding: 1rem 0),
        md:   (padding: 0.5rem 0)
    ));

    display: flex;
}
</style>