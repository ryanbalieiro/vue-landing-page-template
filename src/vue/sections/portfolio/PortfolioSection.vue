<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Grid -->
        <PortfolioSectionGrid :items="props.sectionData.sectionContent.items"
                              @open="_onProjectOpened"
        />
    </SectionTemplate>

    <!-- Modal -->
    <PortfolioSectionModal ref="modal"/>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import PortfolioSectionGrid from "./PortfolioSectionGrid.vue"
import PortfolioSectionModal from "./PortfolioSectionModal.vue"
import {ref} from "vue"

const props = defineProps(['sectionData'])
const modal = ref(null)

const _onProjectOpened = (project) => {
    if(modal.value) {
        modal.value.displayProject(project)
    }
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>