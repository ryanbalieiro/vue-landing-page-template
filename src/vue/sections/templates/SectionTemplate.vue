<template>
    <!-- Page Section -->
    <section class="agency-section" :class="props.sectionData['class']" :id="props.sectionData['id']">
        <!-- Background -->
        <div class="bg-promo-image">
            <div class="bg-promo-image-overlay-faded">
            </div>
        </div>

        <!-- Container -->
        <div class="container-xxl">
            <!-- Breadcrumbs -->
            <Breadcrumbs v-if="breadcrumbs" :routes="breadcrumbs" class="mb-3 d-none d-lg-block"/>

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
                           class="mt-4 mb-2 text-4"
                           :class="{'text-2 text-muted': sectionFooterData['smallDescription']}"/>

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
import Breadcrumbs from "../../widgets/Breadcrumbs.vue"

/**
 * @property {Object} sectionData
 * @property {Array} breadcrumbs
 */
const props = defineProps({
    sectionData: Object,
    breadcrumbs: Array
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
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 4rem 0em 5rem),
        xxl:  (padding: 3rem 0rem 3.5rem),
        lg:   (padding: 2.5rem 0rem 3.5rem),
        md:   (padding: 2.25rem 0rem 3.25rem),
        sm:   (padding: 2rem 0rem 3rem),
    ));

    background-color: $background-color;
    position: relative;

    .promo-bg {
        display: none;
    }
}

.section-heading {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-bottom: 4rem),
        xxl:  (margin-bottom: 3rem),
        lg:   (margin-bottom: 3rem),
        md:   (margin-bottom: 2.75rem),
        sm:   (margin-bottom: 2.5rem),
    ));

    text-align: center;
}

.section-footer {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-top: 2rem),
        xxl:  (margin-top: 1.5rem),
        lg:   (margin-top: 1.1rem),
        md:   (margin-top: 1.05rem),
        sm:   (margin-top: 1rem),
    ));

    text-align: center;
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
    color: $text-normal-contrast;

    .section-title {
        color: $text-normal-contrast;
    }

    .section-subtitle {
        font-family: $custom-subheadings-font-family;
        color: $light-5;
    }
}

.agency-section-featured {
    background-color: transparent;

    .bg-promo-image {
        display: block;
        margin-top: -4rem;
    }
}
</style>