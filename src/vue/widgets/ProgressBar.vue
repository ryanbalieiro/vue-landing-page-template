<template>
    <div class="progress-bar-wrapper">
        <!-- Bootstrap Progress -->
        <div class="progress">
            <div class="progress-bar"
                 role="progressbar"
                 :style="_getProgressBarStyle()"
                 :aria-valuenow="_getPercentage()"
                 aria-valuemin="0"
                 aria-valuemax="100"/>
        </div>
    </div>
</template>

<script setup>
/**
 * @property {Number} percentage
 * @property {String} description
 * @property {String} [color]
 */
const props = defineProps({
    percentage:Number,
    description:String,
    color: String
})

/**
 * @return {number}
 * @private
 */
const _getPercentage = () => {
    return Math.min(Math.max(props.percentage, 0), 100)
}

/**
 * @return {String}
 * @private
 */
const _getProgressBarStyle = () => {
    let percentage = _getPercentage()
    return `width: ${percentage}%;`
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.progress {
    --height:4px;
    @include media-breakpoint-down(md) {
        --height: 2px;
    }

    height: var(--height);
    border-radius: 0;
    background-color: lighten($light-3, 2%);

    .progress-bar {
        background-color: $primary;
        -webkit-transition: none;
        -moz-transition: none;
        -ms-transition: none;
        -o-transition: none;
        transition: none;
    }
}

.progress-description {
    margin-top:0.2rem;
    color:$light-6;
}

</style>