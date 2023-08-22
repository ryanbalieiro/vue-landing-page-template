<template>
    <!-- Preloader -->
    <div class="preloader-full-screen" v-if="!_isComplete()" :class="_getClassList()">
        <div v-show="_didReachStep('ready')" class="preloader-full-screen-content">
            <!-- Logo -->
            <ImageView :src="'images/logo/agency-logo-small.png'"
                       :alt="'Resume Logo'"
                       :ignore-on-image-count="true"
                       ref="logo"
                       class="img-fluid img-logo"/>

            <!-- Progress Display -->
            <div class="progress-display"
                 :class="{'progress-display-expanded': _didReachStep('progressTweenIn')}">
                <!-- Percentage -->
                <p class="mt-1 mb-2 text-info-3 text-white">{{ displayingPercentage }}%</p>

                <!-- Progress Bar -->
                <ProgressBar ref="progressBar"
                             :percentage="displayingPercentage"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import ProgressBar from "../widgets/ProgressBar.vue"
import ImageView from "../widgets/ImageView.vue"

/**
 * @property {Boolean} [showProgressBar]
 * @property {Number} [progressPercentage]
 */
const props = defineProps({
    showProgressBar: Boolean,
    progressPercentage:Number
})

const emit = defineEmits(['ready', 'willShow', 'shown', 'completed', 'willHide', 'hidden'])
const logo = ref(null)
const displayingPercentage = ref(0)

/**
 * @const
 * @type {number}
 */
const TIMEOUT_INTERVAL = 1/60

/**
 * @const {Array}
 */
const ANIMATION_STEPS = [
    {id: 0, label: "startingUp", duration: null},
    {id: 1, label: "ready", duration: null},
    {id: 2, label: "logoTweenIn", duration:0.5},
    {id: 3, label: "progressTweenIn", duration:0.3},
    {id: 4, label: "loading", minDuration:0.15},
    {id: 5, label: "waiting", duration:0.3},
    {id: 6, label: "disappearing", duration:0.5},
]

/** @type {Number||{value:Number}} **/
const currentStepId = ref(0)

/** @type {Number} **/
let elapsedTime = 0

/** @type {Number} **/
let intervalId = null

/** @type {Boolean} **/
let isAnimationRunning = false

/**
 * @private
 */
onMounted(() => {
    _stop()
    isAnimationRunning = false
})

/**
 * @private
 */
const start = () => {
    _stop()
    currentStepId.value = 0
    elapsedTime = 0
    displayingPercentage.value = 0
    isAnimationRunning = true

    intervalId = setInterval(_update, TIMEOUT_INTERVAL*1000)
}

/**
 * @private
 */
const _update = () => {
    if(!isAnimationRunning)
        return

    const currentStep = ANIMATION_STEPS[currentStepId.value]
    elapsedTime += TIMEOUT_INTERVAL

    let didFinishStep
    switch (currentStep.label) {
        case 'startingUp':
            didFinishStep = logo.value.isLoaded()
            break

        case 'ready':
            didFinishStep = isAnimationRunning
            break

        case 'loading':
            const durationPercentage = Math.min(Math.max(
                100*elapsedTime/currentStep.minDuration,
            0), 100)

            displayingPercentage.value = Math.round(Math.min(durationPercentage, props.progressPercentage))
            didFinishStep = displayingPercentage.value >= 100
            break

        default:
            didFinishStep = elapsedTime >= currentStep.duration
            break
    }

    if(didFinishStep) {
        _nextStep()
    }
}

/**
 * @private
 */
const _nextStep = () => {
    currentStepId.value++
    elapsedTime = 0

    if(currentStepId.value >= ANIMATION_STEPS.length) {
        emit('hidden')
        _stop()
        return
    }

    switch (ANIMATION_STEPS[currentStepId.value].label) {
        case 'ready':           emit('ready'); break
        case 'logoTweenIn':     emit('willShow'); break
        case 'loading':         emit('shown'); break
        case 'waiting':         emit('completed'); break
        case 'disappearing':    emit('willHide'); break
    }
}

/**
 * @private
 */
const _stop = () => {
    clearInterval(intervalId)
    intervalId = null
}

/**
 * @param {String} animationStepLabel
 * @return {boolean}
 * @private
 */
const _didReachStep = (animationStepLabel) => {
    const step = ANIMATION_STEPS.find(step => step.label === animationStepLabel)
    return step && currentStepId.value >= step.id
}

/**
 * @return {string}
 * @private
 */
const _getClassList = () => {
    if(!_didReachStep('disappearing')) {
        return 'preloader-full-screen-show'
    }
    else {
        return 'preloader-full-screen-transition'
    }
}

/**
 * @return {boolean}
 * @private
 */
const _isComplete = () => {
    return currentStepId.value >= ANIMATION_STEPS.length
}

defineExpose({start})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.preloader-full-screen {
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    width: 100vw;
    height: 125vh;
    top: -125vh;

    background-color: $dark;

    &-show {
        top: -12.5vh;
        left: 0;
    }
}

.preloader-full-screen-transition {
    transition: 0.5s top ease-out;
}

.preloader-full-screen-content {
    color: $white;
    text-align: center;
    animation: appear 0.2s ease-out forwards;

    .img-logo {
        height: 60px;
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