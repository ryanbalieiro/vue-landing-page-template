<template>
    <!-- Feedbacks -->
    <FeedbackView ref="feedbackView"/>

    <!-- App Content -->
    <div v-if="data.getLoadProgress() >= 100"
         v-show="!utils.isTouchDevice() || appDidLoad">
        <router-view />
    </div>
</template>

<script setup>
import FeedbackView from "./FeedbackView.vue"

import {computed, onMounted, ref, watch} from "vue"
import {useData} from "../../composables/data.js"
import {useLayout} from "../../composables/layout.js"
import {useUtils} from "../../composables/utils.js"
import {useRoute, useRouter} from "vue-router"

const data = useData()
const layout = useLayout()
const route = useRoute()
const router = useRouter()
const utils = useUtils()

const feedbackView = ref(null)
const appDidLoad = ref(false)
let intervalId = null

onMounted(() => {
    layout.setFeedbackView(feedbackView)
    _onRouteChanged()
})

/**
 * @private
 */
watch(() => route.name, () => {
    _onRouteChanged()
})

/**
 * @type {ComputedRef<Boolean>}
 */
const _isPreloaderEnabled = computed(() => {
    return data.getSettings()['preloaderEnabled']
})

const _onRouteChanged = () => {
    layout.instantScrollTo(0, true)
    window.preloadInfo = window.preloadInfo || {loadedRoutes:[]}
    _startPreloading()
}

/**
 * @return {Promise<void>}
 * @private
 */
const _startPreloading = async () => {
    clearInterval(intervalId)

    const preloaderEnabled = _isPreloaderEnabled.value

    if(preloaderEnabled) {
        _mountPreloader()
    }
    else {
        _onPreloadCompleted()
        layout.setPageScrollingEnabled(true)
    }
}

const _mountPreloader = () => {
    const isFirstRoute = window.preloadInfo.loadedRoutes.length === 0
    const shouldPreloadCurrentRoute = !Boolean(route.meta['skipPreload'])

    if(isFirstRoute || shouldPreloadCurrentRoute) {
        feedbackView.value.setLoaderListeners(_onPreloaderShown, _onPreloadCompleted)
        feedbackView.value.setLoader("images/logo/agency-logo-small.png")
    }
    else {
        feedbackView.value.showActivitySpinner('Loading...')
        setTimeout(() => {
            _onPreloadCompleted()
            layout.setPageScrollingEnabled(true)
        }, 200)
    }
}

/**
 * @private
 */
const _onPreloaderShown = async () => {
    intervalId = setInterval(() => {
        _checkLoadProgress()
    }, 1000/30)
}

/**
 * @private
 */
const _checkLoadProgress = () => {
    if(!_isPreloaderEnabled.value) {
        return
    }

    const jsonLoadProgress = data.getLoadProgress()
    const imageCount = layout.getImageCount()

    let imageLoadProgress = 0
    if(imageCount.total > 0) {
        imageLoadProgress = Math.round(100 * imageCount.loaded / imageCount.total)
    }
    else if(jsonLoadProgress === 100) {
        imageLoadProgress = 100
    }

    const loadProgress = (jsonLoadProgress + imageLoadProgress * 4) / 5
    feedbackView.value.updateLoaderProgress(loadProgress)
}

/**
 * @private
 */
const _onPreloadCompleted = () => {
    if (!window.preloadInfo.loadedRoutes.includes(route.name)) {
        window.preloadInfo.loadedRoutes.push(route.name)
    }

    feedbackView.value.hideActivitySpinner()
    appDidLoad.value = true
    clearInterval(intervalId)
}
</script>

<style lang="scss" scoped>
</style>