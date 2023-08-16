<template>
    <!-- Preloader -->
    <div class="preloader-full-screen" v-if="_isVisible()" :class="{'preloader-full-screen-show': !_isDisappearing()}">
        <div class="preloader-full-screen-content">
            <img src="/images/logo/agency-logo.png" alt="preloader-logo" class="img-fluid img-logo">

            <div class="progress-display" :class="{'progress-display-expanded': _didFinishLogoTransition()}">
                <h6 class="mt-2">{{loadingPercentage}}%</h6>
                <ProgressBar ref="progressBar" :percentage="loadingPercentage"></ProgressBar>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"
import ProgressBar from "../widgets/ProgressBar.vue"

const props = defineProps([''])
const emit = defineEmits(['shown', 'loaded', 'willHide', 'hidden'])

const currentStepId = ref(null)
const loadingPercentage = ref(null)

let elapsedTime = null
let intervalId = null

const timeoutInterval = 1/60
const steps = [
    {id: 0, label: "logoTransition", duration: 0.2},
    {id: 1, label: "textTransition", duration: 0.4},
    {id: 2, label: "progress", duration: 0.6},
    {id: 3, label: "waiting", duration: 0.2},
    {id: 3, label: "disappearing", duration: 0.3}
]

/**
 * @oublic
 * Starts the preloader.
 */
const animate = () => {
    _stop()
    currentStepId.value = 0
    loadingPercentage.value = 0
    elapsedTime = 0

    intervalId = setInterval(_update, timeoutInterval*1000)
}

/**
 * Timeout callback - updates the preloader status every 1/60 second.
 * @private
 */
const _update = () => {
    const currentStep = steps[currentStepId.value]
    elapsedTime += timeoutInterval

    if(currentStep.label === 'progress') {
        _updateProgress()
    }
    else {
        _updateAnimationStep()
    }
}

/**
 * Update the animation step.
 * @private
 */
const _updateAnimationStep = () => {
    const currentStep = steps[currentStepId.value]

    if(elapsedTime >= currentStep.duration) {
        _nextStep()
    }
}

/**
 * If the progress animation is going on -> updates the progress bar.
 * @private
 */
const _updateProgress = () => {
    const currentStep = steps[currentStepId.value]

    const duration = currentStep.duration
    loadingPercentage.value = Math.round(100*elapsedTime/duration)
    if(loadingPercentage.value >= 100) {
        _nextStep()
    }
}

/**
 * Increments the step.
 * @private
 */
const _nextStep = () => {
    currentStepId.value++
    elapsedTime = 0
    _checkCompletion()
}

/**
 * Checks if the animation is over.
 * @private
 */
const _checkCompletion = () => {
    if(currentStepId.value >= steps.length) {
        _stop()
        emit('hidden')
        return
    }

    switch(steps[currentStepId.value].label) {
        case 'progress':  emit('shown'); break
        case 'waiting':  emit('loaded'); break
        case 'disappearing':  emit('willHide'); break
    }
}

/**
 * Stops the animation and hides the preloader.
 * @private
 */
const _stop = () => {
    clearInterval(intervalId)
    intervalId = null
}

/** Helper methods to validate the current step **/
const _isVisible = () => { return currentStepId.value !== null }
const _didFinishLogoTransition = () => { return currentStepId.value >= 1 }
const _isDisappearing = () => { return currentStepId.value >= 4 }

defineExpose({animate})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.preloader-full-screen {
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    background-color: $dark;
    width: 100vw;
    height: 100vh;
    top: -100vh;
    transition: 0.4s all ease-out;

    &-show {
        transition: none;
        top: 0;
        left: 0;
    }
}

.preloader-full-screen-content {
    color: white;
    text-align: center;
    animation: appear 0.2s ease-out forwards;

    .img-logo {
        height: min(80px, 20vh);
        animation: popIn 0.3s ease-out forwards;
    }

    .progress-display {
        opacity: 0;
        margin-top: -30px;
        overflow: hidden;
        transition: 0.3s all ease-out;

        &-expanded {
            opacity: 1;
            margin-top: 0;
        }
    }
}

@keyframes popIn {
    from {
        opacity:0;
        transform: scale(0.2) translateY(-100%);
    }
    to {
        opacity:1
    }
}
</style>