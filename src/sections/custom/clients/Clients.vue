<template>
  <SectionWrapper :data="data">
    <div class="testimonials-gallery">
      <!-- Swiper -->
      <swiper
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
          }"
          class="testimonials-swiper px-1">

        <!-- Swiper Slides -->
        <template v-for="testimonial in data.content.items">
          <swiper-slide>
            <ClientTestimonialCard :testimonial="testimonial"></ClientTestimonialCard>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import ClientTestimonialCard from "./ClientTestimonialCard.vue"

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.swiper {
  height: 100%;
  .swiper-slide {
    margin-bottom: 65px;
    height: auto !important;
  }
}
</style>
