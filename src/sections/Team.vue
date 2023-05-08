<template>
  <PageSectionWrapper :id="teamData.id" :title="teamData.title" :subtitle="teamData.subtitle">
    <div class="row text-center">
      <template v-for="member in teamData.members">
        <div class="col-12 col-md-4 m-auto">
          <!-- Member Info -->
          <div class="member-container mb-5">
            <img class="mx-auto rounded-circle img img-fluid" :src="member.srcAvatar" :alt="member.name" />
            <h4 class="my-3 mb-1">{{ member.name }}</h4>
            <p class="role">{{member.role}}</p>
            <p class="text-muted quote"><i class="fa fa-quote-left me-1"></i> {{member.quote}} <i class="fa fa-quote-right ms-1"></i></p>
          </div>
        </div>
      </template>
    </div>
  </PageSectionWrapper>
</template>

<script setup>
import agencyData from '../data/agency.json'
import {useLayout} from "../composables/layout.js";
import PageSectionWrapper from "../components/PageSectionWrapper.vue";
const teamData = agencyData.team
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.member-container {
  .img {
    max-height: 160px;
    border: 6px $gray-200 solid;
  }

  .quote {
    font-size: 0.9rem;
  }
}

@include media-breakpoint-up(lg) {
  .member-container {
    padding-left: 1rem;
    padding-right: 1rem;

    .img {
      max-height: 220px;
    }

    .quote {
      font-size: 1rem;
    }
  }
}

</style>
