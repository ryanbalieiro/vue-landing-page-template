<template>
  <PageSectionWrapper :id="clientsData.id" :title="clientsData.title" :subtitle="clientsData.subtitle">
    <div class="row h-100">
      <template v-for="testimonial in clientsData.testimonials">
        <div class="col col-12 col-lg-4 mb-4">
          <!-- Testimonial -->
          <div class="card box-shadow-with-border h-100">
            <!-- Header -->
            <div class="card-header">
              <img class="img img-fluid" :src="testimonial.srcAvatar">
              <h5 class="organization-title">{{ testimonial.organization }}</h5>
            </div>

            <!-- Body -->
            <div class="card-body">
              <p>“{{ testimonial.message }}”</p>
            </div>

            <!-- Footer -->
            <div class="card-footer">
              <p class="organization-member"><i class="fa fa-comment me-1"></i> {{ testimonial.staffMember }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </PageSectionWrapper>
</template>

<script setup>
import agencyData from "../data/agency.json"
import PageSectionWrapper from "../components/PageSectionWrapper.vue"
const clientsData = agencyData.clients
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.card {
  .card-header {
    border: none;
    padding: 1rem;
    background-color: transparent;

    .img {
      display: inline;
      height: 50px;
    }

    h5 {
      display: inline;
      margin-left: 1rem;
    }
  }

  .card-footer {
    border: none;
    padding-top:1rem;
    background-color: transparent;

    .organization-member {
      font-size: 0.85rem;
      font-weight: bold;
    }
  }
}
</style>
