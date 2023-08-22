<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Services Grid -->
        <div class="row text-center gy-4 gy-lg-5">
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
                        <p class="text-muted text-info-4 mb-0">{{item['description']}}</p>
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import CircleIcon from "../../widgets/CircleIcon.vue"

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
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    .service-content-wrapper {
        margin-top: 1rem;
    }

    @include media-breakpoint-down(lg) {
        flex-direction: row;
        text-align: left;
        padding: 0 0.5rem;

        .service-content-wrapper {
            margin-top: 0;
            margin-left: 1rem;
        }
    }

    @include media-breakpoint-down(md) {
        .service-content-wrapper {
            margin-left: 0.75rem;
        }
    }

    @include media-breakpoint-down(sm) {
        padding: 0;
    }
}
</style>