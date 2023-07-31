<template>
  <SectionWrapper :data="data">

    <!-- Grid View (large screens) -->
    <div class="row text-center d-none d-lg-flex">
      <template v-for="member in data.content.items">
        <div class="col-12 col-md-6 col-lg-4 mx-auto">
          <TeamMemberCard :member="member"></TeamMemberCard>
        </div>
      </template>
    </div>

    <!-- Swiper View (small screens) -->
    <swiper
        :slidesPerView="2"
        :spaceBetween="30"
        :pagination="{clickable: true}"
        :modules="[Pagination]"
        :grab-cursor="true"
        :prevent-clicks-propagation="true"
        :breakpoints = "{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          }
        }"
        class="members-swiper d-lg-none">

      <!-- Swiper Slides -->
      <template v-for="member in data.content.items">
        <swiper-slide>
          <TeamMemberCard :member="member"></TeamMemberCard>
        </swiper-slide>
      </template>
    </swiper>

  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"
import TeamMemberCard from "./TeamMemberCard.vue"

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const props = defineProps(['data'])
</script>

<style scoped lang="scss">

.swiper {
  height: 100%;
  .swiper-slide {
    margin-bottom: 25px;
    height: auto !important;
  }
}

</style>
