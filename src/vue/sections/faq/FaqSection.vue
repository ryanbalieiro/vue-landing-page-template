<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Upper Divider -->
        <hr class="mt-0 mb-4 pb-1 pg-lg-0 mb-md-5">

        <!-- Faq Items -->
        <div class="row h-100">
            <div v-for="item in props.sectionData.sectionContent.items" class="col-12 col-lg-6">
                <!-- Faq Item -->
                <div class="faq-item d-flex h-100 mb-4 pe-2">
                    <!-- Question Icon -->
                    <div class="flex-shrink-0 pe-1 ps-1 pe-lg-0 ps-lg-2">
                        <i class="fa fa-question-circle text-primary question-icon"/>
                    </div>

                    <!-- Question Content -->
                    <div class="ms-3">
                        <h5 class="question-title">{{ item.question }}</h5>
                        <p class="question-answer text-muted" v-html="item.answer"/>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Divider -->
        <hr class="mt-0 mt-lg-2 mb-4 pb-2 pb-md-3">
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"

const props = defineProps(['sectionData'])
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.question-icon {
    font-size: 1.5rem;
    @include media-breakpoint-down(md) {
        font-size: 1.2rem;
    }
}

.question-title {
    font-size: 1.2rem;
    @include media-breakpoint-down(md) {
        font-size: 1rem;
    }
}

.question-answer {
    font-size: 0.85rem!important;
    text-align: justify;
    @include media-breakpoint-down(md) {
        font-size: 0.8rem!important;
    }
}

hr {
    opacity: 0.1;
}
</style>