<template>
  <!-- Testimonial -->
  <div class="card h-100 box-shadow-light">
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
</template>

<script setup>
const props = defineProps(['testimonial'])
</script>

<style lang="scss" scoped>
@import "../../../scss/_theming.scss";

.card {
  min-height: calc(100% - 25px);
  border: 2px $gray-200 solid;
  border-radius: 0;
  background-color: rgba(238, 238, 238, 0.05);

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