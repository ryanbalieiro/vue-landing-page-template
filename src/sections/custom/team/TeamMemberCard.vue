<template>
  <div class="team-member-card">
    <div class="card-thumb">
      <img class="img-avatar img-fluid" :src="member.srcAvatar" :alt="member.name" />
    </div>

    <div class="card-body box-shadow-with-border">
      <h4 class="my-3 mb-1">{{ member.name }}</h4>
      <p class="role">{{member.role}}</p>

      <div class="social-links">
        <template v-for="socialLink in member.socialLinks">
          <a class="btn btn-social mx-2" :href="socialLink.href" :aria-label="socialLink.icon">
            <i :class="socialLink.icon"></i>
          </a>
        </template>
      </div>

      <!-- Quote -->
      <p class="text-muted quote mt-4">
        <i class="fa fa-quote-left me-1"></i> {{member.quote}} <i class="fa fa-quote-right ms-1"></i>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['member'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.team-member-card {
  height: calc(100% - 120px);
  text-align: center;
}

.img-avatar {
  border-radius: 100%;
  max-height: 190px;
  max-width: 190px;
  border: 6px $gray-200 solid;
}

.card-body {
  height: 100%;
  background-color: white;
  border: 3px $gray-200 solid;
  border-radius: 20px;

  margin-top:-120px;
  padding: 120px 20px 60px;
}

.social-links {
  $social-button-font-size:1.1rem;
  .btn-social {
    color: white;
    border-color: lighten($dark, 10%);
    background-color: $dark;
    border-radius: 100%;
    border-width: 3px;
    opacity: 0.9;

    display: inline-flex;
    width: calc($social-button-font-size*2.4);
    height: calc($social-button-font-size*2.4);
    font-size: $social-button-font-size;
    justify-content: center;
    align-items: center;

    &:hover {
      color: white;
      border-color: darken($primary, 5%);
      background-color: $primary;
    }
  }
}

.quote {
  font-size: 0.85rem!important;
}

@include media-breakpoint-down(lg) {
  .team-member-card {
    height: calc(100% - 100px);
    text-align: center;
  }

  .img-avatar {
    max-height: 150px;
    max-width: 150px;
  }

  .card-body {
    margin-top:-100px;
    padding: 100px 20px 60px;
  }

  .quote {
    font-size: 0.9rem!important;
  }
}


</style>
