<template>
  <PageSectionWrapper :id="servicesData.id" :title="servicesData.title" :subtitle="servicesData.subtitle">
    <div class="row text-center">
      <template v-for="item in servicesData.items">
        <!-- Item -->
        <div class="col-12 col-sm-6 col-lg-4 mb-3 mb-md-5">
          <div class="item">
            <!-- Icon Stack -->
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fa-stack-1x fa-inverse" :class="item.icon"></i>
            </span>

            <!-- Item Info -->
            <h5 class="my-3">{{item.title}}</h5>
            <p class="text-muted">{{item.description}}</p>
          </div>
        </div>
      </template>
    </div>
  </PageSectionWrapper>
</template>

<script setup>
import agencyData from '../data/agency.json'
import PageSectionWrapper from "../components/PageSectionWrapper.vue";
const servicesData = agencyData.services
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

@include media-breakpoint-up(md) {
  .item {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

</style>
