<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Timeline -->
        <ul class="timeline">
            <!-- Timeline Items -->
            <li v-for="(item, index) in props.sectionData['items']" class="timeline-item">
                <!-- Image -->
                <div class="timeline-image">
                    <ImageView :src="item['imageUrl']"
                               :alt="item['title']"/>
                </div>

                <!-- Panel -->
                <div class="timeline-panel" :class="{'timeline-panel-inverted': index % 2 === 0}">
                    <!-- Heading -->
                    <div class="timeline-heading">
                        <h3 class="mb-1" v-html="item['title']"/>
                        <span class="badge bg-light text-dark text-2 mb-3 mt-1">
                            <i class="fa fa-calendar-check me-1"/> {{ item['date'] }}
                        </span>
                    </div>

                    <!-- Description -->
                    <div class="timeline-body">
                        <p class="text-muted text-4" v-html="item['description']"/>
                    </div>
                </div>
            </li>

            <!-- Timeline Tail -->
            <li class="timeline-item timeline-item-tail">
                <div class="timeline-image timeline-image-sm">
                </div>
            </li>
        </ul>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "./templates/SectionTemplate.vue"
import ImageView from "../widgets/ImageView.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.timeline {
    --padding: 0 1rem;
    --image-dimensions: 180px;
    --min-item-height: 250px;
    --min-item-width: 42%;
    --item-padding: 0 1.5rem;

    --line-width: 4px;
    --line-position: 50%;
    --inverted-float: left;
    --inverted-align: right;

    @include media-breakpoint-down(xl) {
        --image-dimensions: 150px;
        --min-item-height: 220px;
        --min-item-width: 40%;
        --item-padding: 0 0.5rem;
    }

    @include media-breakpoint-down(lg) {
        --image-dimensions: 120px;
        --min-item-height: 200px;
        --min-item-width: 38%;
        --item-padding: 0 0rem;
    }

    @include media-breakpoint-down(md) {
        --padding: 0;
        --image-dimensions: min(80px, 20vw);
        --min-item-height: 150px;
        --min-item-width: 100%;
        --item-padding: 0 calc(var(--image-dimensions)/4) 0 calc(var(--image-dimensions)*1.2);

        --line-width: 2px;
        --line-position: calc(var(--image-dimensions)/2);
        --inverted-float: right;
        --inverted-align: left;
    }

    position: relative;
    padding: var(--padding);
    list-style: none;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: var(--line-position);
        width: var(--line-width);
        margin-left: calc(-1*var(--line-width)/2);
        content: "";
        height: calc(100% - var(--min-item-height)/3 + var(--image-dimensions)/3);
        background-color: $light-2
    }

    .timeline-item {
        position: relative;
        min-height: var(--min-item-height);
        margin-bottom: calc(var(--min-item-height)/3);

        &:after,
        &:before {
            display: table;
            content: " ";
        }

        &:after {
            clear: both;
        }
    }

    .timeline-item-tail {
        min-height: calc(var(--min-item-height)/3);
        margin-bottom: 0;
    }

    .timeline-image {
        position: absolute;
        left: calc(var(--line-position) - var(--image-dimensions)/2);
        width: var(--image-dimensions);
        height: var(--image-dimensions);
        z-index: 50;

        border: 7px solid $light-2;
        border-radius: 100%;
        overflow: hidden;
        background-color: $light-4;

        &-sm {
            width: calc(var(--image-dimensions)/3);
            height: calc(var(--image-dimensions)/3);
            left: calc(var(--line-position) - var(--image-dimensions)/6);
            top: calc(var(--image-dimensions)/6);
            border-width: 3px;
        }
    }

    .timeline-panel {
        position: relative;
        float: right;
        text-align: left;
        width: var(--min-item-width);
        padding: var(--item-padding);

        &-inverted {
            float: var(--inverted-float);
            text-align: var(--inverted-align);
        }
    }
}
</style>