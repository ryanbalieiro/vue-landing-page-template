<template>
  <PageSectionWrapper :id="teamData.id" :title="teamData.title" :subtitle="teamData.subtitle">
    <div class="row text-center">
      <template v-for="member in teamData.members">
        <div class="col-12 col-md-4 m-auto">
          <!-- Member Info -->
          <div class="member-container mb-5">
            <img class="mx-auto rounded-circle img img-fluid" :src="member.srcAvatar" :alt="member.name" />
            <h4 class="my-3 mb-1">{{ member.name }}</h4>
            <p class="text-muted role">{{member.role}}</p>

            <!-- Social Links -->
            <a class="btn btn-dark btn-social mx-2" :href="member.socialLinks.twitter" :aria-label="`${member.name}'s Twitter Profile`">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="btn btn-dark btn-social mx-2" :href="member.socialLinks.instagram" :aria-label="`${member.name}'s Instagram Profile`">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="btn btn-dark btn-social mx-2" :href="member.socialLinks.linkedin" :aria-label="`${member.name}'s LinkedIn Profile`">
              <i class="fab fa-linkedin-in"></i>
            </a>
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

  .btn-social {
    border-radius: 100%;
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(lg) {
  .member-container {
    padding-left: 1rem;
    padding-right: 1rem;

    .img {
      max-height: 220px;
    }
  }
}

</style>
