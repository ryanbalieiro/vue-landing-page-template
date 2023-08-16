<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Grid View (large screens) -->
        <div class="row text-center gy-3 gy-md-5 pt-lg-2">
            <div v-for="item in props.sectionData.sectionContent.items" class="col-12 col-sm-6 col-lg-4">
                <!-- Service Item -->
                <div class="service-item">
                    <!-- Icon -->
                    <div class="service-icon-wrapper">
                        <CircleIcon :fa-icon="item.icon"/>
                    </div>

                    <!-- Content -->
                    <div class="service-content-wrapper">
                        <h5>{{item.title}}</h5>
                        <p class="text-muted info">{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import CircleIcon from "../../widgets/CircleIcon.vue"

const props = defineProps(['sectionData'])
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