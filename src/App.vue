<template>
    <!-- Preloader -->
    <Preloader v-if="_shouldDisplayPreloader()"
               ref="preloader"
               @ready="_onPreloaderReady"
               @loaded="_onPreloaderLoadingComplete"
               @will-hide="_onPreloaderWillHide">
    </Preloader>

    <!-- App Content -->
    <div v-show="_shouldDisplayContent()" class="agency">
        <!-- Navigation -->
        <NavBar :navbar-data="props.agencyManager.navbarData"
                :sections="props.agencyManager.sections">
        </NavBar>

        <!-- Header -->
        <Header :header-data="props.agencyManager.headerData"></Header>

        <!-- Website Sections -->
        <component v-for="section in props.agencyManager.sections"
                   :is="layout.getSectionComponentByName(section.component)"
                   :section-data="section">
        </component>

        <!-- Footer -->
        <Footer :footer-data="props.agencyManager.footerData"></Footer>
    </div>
</template>

<script setup>
import Preloader from "./vue/loaders/Preloader.vue"
import NavBar from "./vue/navigation/NavBar.vue"
import Header from "./vue/partials/Header.vue"
import Footer from "./vue/partials/Footer.vue"
import {useLayout} from "./composables/layout.js"
import {ref} from "vue"

const props = defineProps(['agencyManager'])
const preloader = ref(null)
const layout = useLayout()
const isPreloadingComplete = ref(true)

/**
 * Checks whether the preload animation should be displayed
 * @private
 */
const _shouldDisplayPreloader = () => {
    return !props.agencyManager.settings.skipPreload
}

/**
 * Checks whether the app content should be displayed.
 * @private
 */
const _shouldDisplayContent = () => {
    return !layout.isTouchDevice() || isPreloadingComplete.value
}

/**
 * Show preloader.
 */
const _onPreloaderReady = () => {
    const root = document.getElementsByTagName( 'html' )[0];
    document.body.className = ' no-scroll'
    root.className += ' no-scroll'

    isPreloadingComplete.value = false
    preloader.value.animate()
}

/**
 * @private
 */
const _onPreloaderLoadingComplete = () => {
    isPreloadingComplete.value = true
}

/**
 * Preloader will start tweening out of the screen - enable scrolling.
 * @private
 */
const _onPreloaderWillHide = () => {
    const root = document.getElementsByTagName( 'html' )[0];
    document.body.className = ''
    root.className = ''
}
</script>

<style scoped>
</style>
