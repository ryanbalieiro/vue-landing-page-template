<template>
    <!-- Landing Page - Home -->
    <div class="agency">
        <!-- Navigation -->
        <NavBar :navbar-data="props.agencyManager.navbarData"
                :links="props.agencyManager.sections"
                :should-spy-scroll="true"
                @link-clicked="_onNavLinkClicked"/>

        <!-- Header -->
        <Header :header-data="props.agencyManager.headerData"/>

        <!-- Website Sections -->
        <component v-for="section in props.agencyManager.sections"
                   :is="layout.getSectionComponentByName(section.component)"
                   :section-data="section"/>

        <!-- Footer -->
        <Footer :footer-data="props.agencyManager.footerData"/>
    </div>
</template>

<script setup>
import {useLayout} from "../../composables/layout.js"
import NavBar from "../navigation/NavBar.vue"
import Header from "../partials/Header.vue"
import Footer from "../partials/Footer.vue"

/**
 * @property {AgencyManager} agencyManager
 */
const props = defineProps({
    agencyManager: Object
})

const layout = useLayout()

/**
 * @param {String} linkId
 * @private
 */
const _onNavLinkClicked = (linkId) => {
    layout.scrollToElement(linkId)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>