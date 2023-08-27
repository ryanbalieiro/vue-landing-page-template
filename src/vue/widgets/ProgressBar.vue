<template>
    <div class="progress-bar-wrapper">
        <!-- Bootstrap Progress -->
        <div class="progress">
            <div class="progress-bar"
                 role="progressbar"
                 :style="style"
                 :aria-valuenow="percentage"
                 aria-valuemin="0"
                 aria-valuemax="100"/>
        </div>
    </div>
</template>

<script setup>
import {useUtils} from "../../composables/utils.js"
import {computed} from "vue"

/**
 * @property {Number} percentage
 */
const props = defineProps({
    percentage:Number
})

const utils = useUtils()

/**
 * @type {ComputedRef<number>}
 */
const percentage = computed(() => {
    return utils.clamp(props.percentage, 0, 100)
})

/**
 * @type {ComputedRef<string>}
 */
const style = computed(() => {
    const percentageValue = percentage.value
    return `width: ${percentageValue}%;`
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.progress {
    height: 4px;
    border-radius: 0;
    background-color: lighten($light-3, 2%);
}

.progress-bar {
    background-color: $primary;
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
}
</style>