<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Upper Divider -->
        <hr class="mt-0 mb-4 pb-1 pg-lg-0 mb-lg-4">

        <!-- Faq Items -->
        <div class="row h-100">
            <div v-for="item in props.sectionData['items']" class="col-12 col-lg-6">
                <!-- Faq Item -->
                <div class="faq-item d-flex h-100 mb-4 pe-3">
                    <!-- Question Icon -->
                    <div class="flex-shrink-0 pe-1 ps-1">
                        <i class="fa fa-question-circle text-primary question-icon eq-h4"/>
                    </div>

                    <!-- Question Content -->
                    <div class="ms-3">
                        <h5 class="question-title">{{ item['title'] }}</h5>
                        <p class="question-answer text-2 text-muted" v-html="item['description']"/>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Divider -->
        <hr class="mt-0 mt-lg-2 mb-4 pb-2 pb-md-3">
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "./templates/SectionTemplate.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.question-answer {
    text-align: justify;
}

hr {
    opacity: 0.1;
}
</style>