<template>
    <SectionTemplate :section-data="props.sectionData">
        <!-- Grid View (large screens) -->
        <div class="row team-grid-row gy-5 px-2">
            <!-- Grid Items -->
            <TeamSectionItem v-for="item in props.sectionData['items']" :item="item" class="mb-2"/>
        </div>

        <!-- Swiper View (small screens) -->
        <swiper
            class="testimonials-swiper px-1"
            :slidesPerView="2"
            :spaceBetween="20"
            :pagination="{clickable: true}"
            :modules="[Pagination]"
            :grab-cursor="true"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :prevent-clicks-propagation="true"
            :breakpoints = "{
                0: {
                  slidesPerView: 1,
                },
                568: {
                  slidesPerView: 2,
                }
            }">

            <!-- Slide Items -->
            <swiper-slide v-for="item in props.sectionData['items']">
                <TeamSectionItem :item="item" class="swiper-team-item"/>
            </swiper-slide>
        </swiper>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import TeamSectionItem from "./TeamSectionItem.vue"

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

/**
 * @property {Object} sectionData
 */
const props = defineProps({
    sectionData: Object
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.team-grid-row {
    text-align: center;
    display: flex;
    @include media-breakpoint-down(lg) {
        display: none;
    }
}

.swiper {
    height: 100%;
    .swiper-slide {
        margin-bottom: 55px;
        height: auto !important;
        text-align: center;
    }

    .swiper-team-item {
        min-width: 80%;
        max-width: 400px;
    }

    @include media-breakpoint-up(lg) {
        display: none;
    }
}
</style>