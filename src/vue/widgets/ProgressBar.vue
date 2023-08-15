<template>
    <div class="progress-bar-wrapper">
        <!-- Bootstrap Progress -->
        <div class="progress">
            <div class="progress-bar"
                 role="progressbar"
                 :style="_getProgressBarStyle()"
                 :aria-valuenow="_getPercentage()"
                 aria-valuemin="0"
                 aria-valuemax="100">
            </div>
        </div>

        <div class="progress-description">
            <p class="info-xs description mb-0" v-html="props.description" v-if="props.description"></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['percentage', 'description'])

const _getPercentage = () => {
    let percentage = Math.abs(props.percentage)
    if(percentage < 0)
        percentage = 0
    else if(percentage > 100)
        percentage = 100

    return percentage
}

const _getProgressBarStyle = () => {
    let percentage = _getPercentage()
    let opacity = (50 + percentage/2)/100
    return `width: ${percentage}%; opacity: ${opacity}`
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.progress {
    --height:8px;
    @include media-breakpoint-down(md) {
        --height: 4px;
    }

    height: var(--height);
    border-radius: 5px;
    background-color: lighten($gray-300, 2%);

    .progress-bar {
        background-color: lighten($primary, 5%);
        -webkit-transition: none;
        -moz-transition: none;
        -ms-transition: none;
        -o-transition: none;
        transition: none;
    }
}

.progress-description {
    margin-top:0.2rem;
    color:$gray-600;
}

</style>