<template>
    <!-- Preloader -->
    <div class="loader-full-screen" v-if="_isRunning()" :class="_getClassList()">
        <div v-show="_didReachStep('logoTweenIn')" class="loader-full-screen-content">
            <!-- Logo -->
            <ImageView  :src="imageUrl"
                        :alt="'Preloader Logo'"
                        :ignore-on-image-count="true"
                        ref="logo"
                        class="img-fluid img-logo"
                        :class="{'no-transition': timesPlayed > 2}"/>

            <!-- Progress Display -->
            <div class="progress-display" :class="{
                'progress-display-expanded': _didReachStep('progressTweenIn'),
                'no-transition': timesPlayed > 2
            }">
                <!-- Percentage -->
                <p class="mt-0 mb-1 text-2 text-white">{{ totalPercentage }}%</p>

                <!-- Progress Bar -->
                <ProgressBar ref="progressBar"
                             class="progress-bar"
                             :percentage="totalPercentage"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import ProgressBar from "../widgets/ProgressBar.vue"
import ImageView from "../widgets/ImageView.vue"

const emit = defineEmits(['willShow', 'shown', 'completed', 'willHide', 'hidden'])

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
    {id: 1, label: "logoTweenIn", duration:0.5},
    {id: 2, label: "progressTweenIn", duration:0.3},
    {id: 3, label: "loading", minDuration:0.3},
    {id: 4, label: "waiting", duration:0.3},
    {id: 5, label: "disappearing", duration:1.2},
]

/** Parameters **/
const imageUrl = ref('')
const taskProgressPercentage = ref(0)

/** Control Variables **/
const logo = ref(null)
const totalPercentage = ref(0)
const currentStepId = ref(-1)
const timesPlayed = ref(0)

let elapsedTime = 0
let intervalId = null

/**
 * @private
 */
onMounted(() => {
    _stop()
})

/**
 * @private
 */
const _stop = () => {
    clearInterval(intervalId)
    intervalId = null
    currentStepId.value = -1
    elapsedTime = 0
    totalPercentage.value = 0
}

/**
 * @param {String} _imageUrl
 */
const run = (_imageUrl) => {
    _stop()
    imageUrl.value = _imageUrl
    timesPlayed.value++

    if(timesPlayed.value > 2) {
        ANIMATION_STEPS[1].duration = 0
        ANIMATION_STEPS[2].duration = 0
    }

    currentStepId.value = 0
    intervalId = setInterval(_update, TIMEOUT_INTERVAL * 1000)
}

/**
 * @param {Number} progressPercentage
 */
const setTaskProgress = (progressPercentage) => {
    taskProgressPercentage.value = progressPercentage
}

/**
 * @private
 */
const _update = () => {
    const currentStep = ANIMATION_STEPS[currentStepId.value]
    elapsedTime += TIMEOUT_INTERVAL

    let didFinishStep = false
    switch (currentStep.label) {
        case 'startingUp':
            didFinishStep = logo.value.isLoaded();
            break

        case 'loading':
            const durationPercentage = Math.min(Math.max(100*elapsedTime/currentStep.minDuration, 0), 100)
            totalPercentage.value = Math.round(Math.min(durationPercentage, taskProgressPercentage.value))
            didFinishStep = totalPercentage.value >= 100
            break

        default:
            didFinishStep = elapsedTime >= currentStep.duration
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
        case 'logoTweenIn':     emit('willShow'); break
        case 'loading':         emit('shown'); break
        case 'waiting':         emit('completed'); break
        case 'disappearing':    emit('willHide'); break
    }
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
 * @return {boolean}
 * @private
 */
const _isRunning = () => {
    return currentStepId.value >= 0 && currentStepId.value < ANIMATION_STEPS.length
}

/**
 * @return {string}
 * @private
 */
const _getClassList = () => {
    if(!_isRunning()) {
        return 'd-none'
    }
    else if(!_didReachStep('disappearing')) {
        return 'loader-full-screen-show'
    }
    else {
        return 'loader-full-screen-transition'
    }
}

defineExpose({
    run,
    setTaskProgress
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.loader-full-screen {
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    background-color: $nav-background-color;
    width: 100vw;
    height: 125vh;
    top: -125vh;

    &-show {
        top: -12.5vh;
        opacity: 1;
    }
}

.loader-full-screen-transition {
    transition: 1.2s top cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.loader-full-screen-content {
    color: $text-normal-contrast;
    text-align: center;
    animation: appear 0.2s ease-out forwards;

    .img-logo {
        max-height: 60px;
        aspect-ratio: 1/1;
        z-index: 99;
        animation: popIn 0.3s ease-out forwards;
    }

    .progress-display {
        opacity: 0;
        margin-top: -30px;
        overflow: hidden;
        z-index: 50;
        transition: 0.3s all ease-out;

        &-expanded {
            opacity: 1;
            margin-top: 0;
        }
    }

    .progress-bar {
        max-width: 55px;
        margin: 0 auto;
    }
}

.no-transition {
    transition: none!important;
    animation: none!important;
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