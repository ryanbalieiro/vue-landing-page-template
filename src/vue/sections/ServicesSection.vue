<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Services Grid -->
        <div class="row text-center gy-4 gy-md-5">
            <div v-for="item in props.sectionData['items']" class="col-12 col-sm-6 col-lg-4">
                <!-- Service Item -->
                <div class="service-item mb-lg-4">
                    <!-- Icon -->
                    <div class="service-icon-wrapper">
                        <CircleIcon :fa-icon="item['faIcon']"/>
                    </div>

                    <!-- Content -->
                    <div class="service-content-wrapper">
                        <h5>{{item['title']}}</h5>
                        <p class="text-muted text-4 mb-0">{{item['description']}}</p>
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "./templates/SectionTemplate.vue"
import CircleIcon from "../widgets/CircleIcon.vue"

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.service-item {
    @include generate-dynamic-styles-with-hash((
        xxxl: (flex-direction: column, padding: 0 1rem),
        lg:   (flex-direction: row, text-align:left, padding: 0 0.5rem),
        sm:   (padding: 0)
    ));

    display: flex;
}

.service-content-wrapper {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-top: 1rem),
        lg:   (margin-top: 0, margin-left: 1rem),
        md:   (margin-left: 0.75rem)
    ));
}
</style>