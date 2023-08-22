<template>
    <!-- Page Section -->
    <section class="agency-section" :class="props.sectionData.class" :id="props.sectionData.id">
        <!-- PromoBg - visible only on promotional sections -->
        <div class="promo-bg">
            <div class="promo-bg-overlay promo-bg-overlay-faded">
            </div>
        </div>

        <!-- Container -->
        <div class="container-xxl">
            <!-- Section Header -->
            <div v-if="sectionHeadlineData && sectionHeadlineData['title']" class="section-heading">
                <h1 class="section-title mb-1" v-html="sectionHeadlineData['title']"/>
                <h5 class="section-subtitle" v-html="sectionHeadlineData['subtitle']"/>
            </div>

            <!-- Section Content -->
            <div class="section-body">
                <!-- Yield custom section content -->
                <slot/>
            </div>

            <!-- Section Footer -->
            <div v-if="sectionFooterData && sectionFooterData['title']" class="section-footer">
                <div class="row h-100">
                    <div class="col-12 col-lg-8 text-center mx-auto">
                        <!-- Title -->
                        <hr v-if="sectionFooterData['divider']" class="solid-divider mb-3">
                        <h3 v-html="sectionFooterData['title']"/>

                        <!-- Description -->
                        <p v-if="sectionFooterData['description']"
                           v-html="sectionFooterData['description']"
                           class="mt-4 mb-2 text-info-4"
                           :class="{'text-info-2 text-muted': sectionFooterData['smallDescription']}"/>

                        <!-- Button -->
                        <XLButton v-if="sectionFooterData['button']"
                                  :label="sectionFooterData['button'].label"
                                  :icon="sectionFooterData['button'].icon"
                                  :href="sectionFooterData['button'].href"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {computed} from "vue"
import XLButton from "../../widgets/XLButton.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})

const sectionHeadlineData = computed(() => {
    return props.sectionData['headline']
})

const sectionFooterData = computed(() => {
    return props.sectionData['footer']
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.agency-section {
    --padding:4rem 0em 5rem;
    @include media-breakpoint-down(xxl) {--padding:3rem 0rem 3.5rem}
    @include media-breakpoint-down(lg) {--padding:2.5rem 0rem 3.5rem}
    @include media-breakpoint-down(md) {--padding:2.25rem 0rem 3.25rem}
    @include media-breakpoint-down(sm) {--padding:2rem 0rem 3rem}

    padding: var(--padding);
    background-color: $background-color;
    position: relative;

    .promo-bg {
        display: none;
    }
}

.section-heading {
    --margin-bottom: 4rem;
    @include media-breakpoint-down(xxl) {--margin-bottom:3rem}
    @include media-breakpoint-down(lg) {--margin-bottom:3rem}
    @include media-breakpoint-down(md) {--margin-bottom:2.75rem}
    @include media-breakpoint-down(sm) {--margin-bottom:2.5rem}
    text-align: center;
    margin-bottom: var(--margin-bottom);
}

.section-footer {
    --margin-top: 2rem;
    @include media-breakpoint-down(xxl) {--margin-top:1.5rem}
    @include media-breakpoint-down(lg) {--margin-top:1rem}
    @include media-breakpoint-down(sm) {--margin-top:1rem}
    text-align: center;
    margin-top: var(--margin-top);
}

.section-title {
    text-transform: uppercase;
}

.section-subtitle {
    font-family: $custom-subheadings-font-family;
    color: $text-muted;
}

.agency-section-primary {
    background-color: lighten($primary, 42%);
}

.agency-section-dark {
    background-color: lighten($dark, 10%);
    color: $white;

    .section-title {
        color: $white;
    }

    .section-subtitle {
        font-family: $custom-subheadings-font-family;
        color: $light-5;
    }
}

.agency-section-featured {
    background-color: transparent;
    .promo-bg {
        display: block;
        margin-top:-4rem;
    }
}
</style>