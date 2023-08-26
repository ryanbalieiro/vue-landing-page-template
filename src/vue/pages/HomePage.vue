<template>
    <!-- Navigation -->
    <NavBar :navbar-data="data.getNavbarData()"
            :links="data.getSectionsData()"
            :should-spy-scroll="true"
            @link-clicked="_onNavLinkClicked"/>

    <!-- Header -->
    <Header :header-data="data.getHeaderData()"/>

    <!-- Website Sections -->
    <component v-for="section in data.getSectionsData()"
               :is="_getSectionComponentByName(section['component'])"
               :section-data="section"/>

    <!-- Footer -->
    <Footer :footer-data="data.getFooterData()"/>
</template>

<script setup>
import {useData} from "../../composables/data.js"
import {useLayout} from "../../composables/layout.js"
import Header from "../partials/Header.vue"
import Footer from "../partials/Footer.vue"

import DefaultSection from "../sections/templates/SectionTemplate.vue"
import AboutSection from "../sections/AboutSection.vue"
import ContactSection from "../sections/ContactSection.vue"
import FaqSection from "../sections/FaqSection.vue"
import FeaturedSection from "../sections/FeaturedSection.vue"
import HistorySection from "../sections/HistorySection.vue"
import PortfolioSection from "../sections/PortfolioSection.vue"
import ReviewsSection from "../sections/ReviewsSection.vue"
import ServicesSection from "../sections/ServicesSection.vue"
import TeamSection from "../sections/TeamSection.vue"
import NavBar from "../navigation/NavBar.vue"

const data = useData()
const layout = useLayout()

/**
 * @type {Object}
 */
const SECTION_VUE_COMPONENTS = {DefaultSection, AboutSection, ContactSection, FaqSection, FeaturedSection, HistorySection, PortfolioSection, ReviewsSection, ServicesSection, TeamSection}

/**
 * @param {String} componentName
 * @return {*}
 * @private
 */
const _getSectionComponentByName = (componentName) => {
    if(SECTION_VUE_COMPONENTS[componentName])
        return SECTION_VUE_COMPONENTS[componentName]

    console.warn("Couldn't find component with name: " + componentName + ". All section components must be registered on HomePage.vue.")
    return DefaultSection
}

/**
 * @param {String} linkId
 * @private
 */
const _onNavLinkClicked = (linkId) => {
    layout.smoothScrollToElement(linkId, false)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>