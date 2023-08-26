<template>
    <SectionTemplate :section-data="props.sectionData">
        <div class="row g-0 text-center">
            <!-- Filter -->
            <div class="col-12 mb-2">
                <FilterTabs :items="tabItems" @selected="_onFilterTabSelected"/>
            </div>

            <!-- Grid -->
            <div class="col-12 grid-container">
                <ProjectGrid :items="filterResults"
                             :selected-category-id="selectedCategoryId"
                             @opened="_onProjectOpened"/>
            </div>
        </div>
    </SectionTemplate>

    <!-- Modal -->
    <ProjectModal ref="modal" :project="selectedProject"/>
</template>

<script setup>
import {computed, ref} from "vue"
import SectionTemplate from "./templates/SectionTemplate.vue"
import FilterTabs from "../widgets/FilterTabs.vue"
import ProjectGrid from "./components/ProjectGrid.vue"
import ProjectModal from "./components/ProjectModal.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})

const selectedCategoryId = ref(null)
const selectedProject = ref(null)
const modal = ref(null)

/**
 * @type {ComputedRef<Array>}
 */
const tabItems = computed(() => {
    const items = ["All"]

    for(let i in props.sectionData['items']) {
        const category = props.sectionData['items'][i]['category']
        if(items.indexOf(category) === -1) {
            items.push(category)
        }
    }

    return items
})

/**
 * @type {ComputedRef<Array>}
 */
const filterResults = computed(() => {
    const filteredItems = []
    const selectedCategoryIdValue = selectedCategoryId.value

    for(let i in props.sectionData['items']) {
        let item = props.sectionData['items'][i]
        let isVisible = !selectedCategoryIdValue || selectedCategoryIdValue.toUpperCase() === 'ALL' || selectedCategoryIdValue === item['category']

        filteredItems.push({
            data: item,
            category: item['category'],
            visible: isVisible
        })
    }

    return filteredItems
})

/**
 * @param {String} categoryId
 * @private
 */
const _onFilterTabSelected = (categoryId) => {
    selectedCategoryId.value = categoryId
}

/**
 * @param {Object} item
 * @private
 */
const _onProjectOpened = (item) => {
    selectedProject.value = item
    modal.value.display()
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>