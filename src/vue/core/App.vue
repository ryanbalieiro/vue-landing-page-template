<template>
    <!-- Feedbacks -->
    <FeedbackView ref="feedbackView"/>

    <!-- Preloader -->
    <Loader ref="loader"
            @shown="_onPreloaderShown"
            @animated="_onPreloaderAnimated"
            @hiding="_onPreloaderHiding"/>

    <!-- App Content -->
    <router-view v-show="didLoadFirstRoute"/>
</template>

<script setup>
import FeedbackView from "./FeedbackView.vue"

import {computed, onMounted, ref, watch} from "vue"
import {useData} from "../../composables/data.js"
import {useLayout} from "../../composables/layout.js"
import {useUtils} from "../../composables/utils.js"
import {useRoute, useRouter} from "vue-router"
import Loader from "/src/vue/feedbacks/Loader.vue"

const data = useData()
const layout = useLayout()
const route = useRoute()
const router = useRouter()
const utils = useUtils()

const feedbackView = ref(null)
const loader = ref(null)
const didLoadFirstRoute = ref(false)
let preloaderCb = null

onMounted(() => {
    layout.setFeedbackView(feedbackView)
})

router.beforeEach((to, from, next) => {
    preloaderCb = () => {
        didLoadFirstRoute.value = true
        next()
    }

    if(preloaderEnabled.value) {
        loader.value.run()
    }
    else {
        layout.instantScrollTo(0, true)
        preloaderCb()
    }
})

const _onPreloaderShown = () => {
    setTimeout(() => {
        layout.setPageScrollingEnabled(false)
    }, 200)
}

const _onPreloaderAnimated = () => {
    preloaderCb()
}

const _onPreloaderHiding = () => {
    layout.setPageScrollingEnabled(true)
}

const preloaderEnabled = computed(() => {
    return data.getSettings()['preloaderEnabled']
})

</script>

<style lang="scss" scoped>
</style>