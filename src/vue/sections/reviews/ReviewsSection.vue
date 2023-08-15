<template>
    <SectionTemplate :section-data="props.sectionData">
        <div class="testimonials-gallery">
            <!-- Swiper -->
            <swiper
                class="testimonials-swiper px-1"
                :slidesPerView="3"
                :spaceBetween="20"
                :pagination="{clickable: true}"
                :modules="[Autoplay, Pagination]"
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
                    768: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 3,
                    }
                }">

                <!-- Swiper Slides -->
                <template v-for="item in props.sectionData.sectionContent.items">
                    <swiper-slide>
                        <ReviewsSectionCard :item="item"></ReviewsSectionCard>
                    </swiper-slide>
                </template>
            </swiper>
        </div>
    </SectionTemplate>
</template>

<script setup>
import SectionTemplate from "../_templates/SectionTemplate.vue"
import ReviewsSectionCard from "./ReviewsSectionCard.vue"

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const props = defineProps(['sectionData'])
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.swiper {
    height: 100%;
    .swiper-slide {
        margin-bottom: 65px;
        height: auto !important;
    }
}
</style>