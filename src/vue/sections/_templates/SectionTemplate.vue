<template>
    <!-- Page Section -->
    <section class="agency-section" :class="props.sectionData.class" :id="props.sectionData.id">
        <div class="container">
            <!-- Section Header -->
            <div v-if="sectionHeaderData" class="section-heading pb-4 pb-md-5">
                <h1 class="section-title" v-html="sectionHeaderData.title"></h1>
                <h5 class="section-subtitle" v-html="sectionHeaderData.subtitle"></h5>
            </div>

            <!-- Section Content -->
            <div class="section-body">
                <!-- Yield custom section content -->
                <slot></slot>
            </div>

            <!-- Section Footer -->
            <div v-if="sectionFooterData" class="section-footer">
                <div class="row h-100">
                    <div class="col-12 col-lg-8 text-center mx-auto">
                        <!-- Title -->
                        <hr v-if="sectionFooterData.divider" class="solid-divider mb-4">
                        <h3 v-html="sectionFooterData.title"></h3>

                        <!-- Description -->
                        <p v-if="sectionFooterData.description"
                           v-html="sectionFooterData.description"
                           class="mt-4 info"
                           :class="{'text-muted info-xs': sectionFooterData.smallDescription}">
                        </p>

                        <!-- Button -->
                        <XLButton v-if="sectionFooterData.button"
                                  :label="sectionFooterData.button.label"
                                  :icon="sectionFooterData.button.icon"
                                  :href="sectionFooterData.button.href">
                        </XLButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {computed} from "vue"
import XLButton from "../../widgets/XLButton.vue"

const props = defineProps(['sectionData'])

const sectionHeaderData = computed(() => {
    return props.sectionData.sectionHeader
})

const sectionFooterData = computed(() => {
    return props.sectionData.sectionFooter
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.agency-section {
    --padding: 4rem 0;
    @include media-breakpoint-down(lg) {--padding: 3rem 1rem;}

    padding: var(--padding);
    background-color: $background-color;

    .section-heading {
        text-align: center;
    }

    .section-title {
        text-transform: uppercase;
    }

    .section-subtitle {
        font-family: $custom-subheadings-font-family;
        color: $text-muted;
    }

    &-primary {
        background-color: lighten($primary, 42%)
    }

    &-dark {
        background-color: lighten($dark, 10%);
        color: white;
        .section-subtitle {
            font-family: $custom-subheadings-font-family;
            color: $gray-500;
        }
    }
}
</style>