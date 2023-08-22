<template>
    <!-- Preloader -->
    <FullscreenLoader ref="preloader"
                      v-if="isPreloaderEnabled"
                      :progress-percentage="totalLoadProgress"
                      :show-progress-bar="true"
                      @shown="_onPreloaderShown"
                      @completed="_onPreloaderCompleted"
                      @will-hide="_onPreloaderWillHide"/>

    <!-- Router View -->
    <div v-show="!layout.isTouchDevice() || totalLoadProgress >= 100">
        <router-view />
    </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue"
import {useLayout} from "./composables/layout.js"
import FullscreenLoader from "./vue/loaders/FullscreenLoader.vue"
import {useRoute} from "vue-router"

/**
 * @property {AgencyManager} agencyManager
 */
const props = defineProps({
    agencyManager: Object
})

const layout = useLayout()
const route = useRoute()

const preloader = ref(null)
const totalLoadProgress = ref(0)
let intervalId = null
let elapsedTime = 0

/**
 * @callback
 */
onMounted(async () => {
    _startPreloader()
})

/**
 * @private
 */
watch(() => route.name, () => {
    _startPreloader()
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
})

/**
 * @type {ComputedRef<Boolean>}
 */
const isPreloaderEnabled = computed(() => {
    return props.agencyManager.settings['preloaderEnabled']
})

/**
 * @private
 */
const _startPreloader = () => {
    clearInterval(intervalId)
    totalLoadProgress.value = 0
    elapsedTime = 0

    layout.setPageScrollingEnabled(false)
    if(isPreloaderEnabled.value) {
        preloader.value.start()
    }
    else {
        _onPreloaderShown()
    }
}

/**
 * @return {Promise<void>}
 * @private
 */
const _onPreloaderShown = async () => {
    intervalId = setInterval(() => {
        _checkLoadProgress()
    }, 1000/30)

    if(!isPreloaderEnabled.value) {
        totalLoadProgress.value = 100
        _onPreloaderCompleted()
        _onPreloaderWillHide()
    }
}

/**
 * @private
 */
const _checkLoadProgress = () => {
    const imageCount = layout.getImageCount()
    elapsedTime += 1/30

    if(!imageCount.total) {
        totalLoadProgress.value = (elapsedTime > 0.1) ? 100 : 0
        return
    }

    totalLoadProgress.value = Math.round(100 * imageCount.loaded/imageCount.total)
}

/**
 * @private
 */
const _onPreloaderCompleted = () => {
    clearInterval(intervalId)
}

/**
 * @private
 */
const _onPreloaderWillHide = () => {
    layout.setPageScrollingEnabled(true)
}
</script>

<style scoped>
</style>
