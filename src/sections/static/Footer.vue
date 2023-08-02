<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <!-- Footer Location -->
        <div class="col-lg-4 page-footer-column">
          <h4 class="text-uppercase mb-4"><i class="fa fa-map-pin me-2"></i>{{ data.location.title }}</h4>
          <p class="address" v-html="data.location.address"></p>
        </div>

        <!-- Footer Social Icons -->
        <div class="col-lg-4 page-footer-column">
          <h4 class="text-uppercase mb-4">{{ data.links.title }}</h4>
          <SocialLinks :items="data.links.items" :colors="'darkAndWhite'" :size="'big'"></SocialLinks>
        </div>

        <!-- Footer Extra Links -->
        <div class="col-lg-4 page-footer-column">
          <h4 class="text-uppercase mb-4">{{ data.otherLinks.title }}</h4>
          <template v-for="item in data.otherLinks.items">
            <a class="footer-link" :href="item.href">{{item.label}}</a>
          </template>
        </div>

        <!-- Copyright -->
        <div class="col-lg-12 copyright-column">
          <small class="text-muted">{{ data.copyright }}</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from "../../components/SocialLinks.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
@import "../../scss/_theming.scss";

.page-footer {
  background-color: $dark;
  color: $white;
  padding-top:2rem;
  text-align: center;
}

.page-footer-column {
  margin-bottom: 3rem;
  @include media-breakpoint-up(lg) {
    margin-bottom: 0;
  }
}

.copyright-column {
  margin-bottom: 1rem;
  @include media-breakpoint-up(lg) {
    margin-top: 1rem;
    margin-bottom: 1.4rem;
  }
}

.address {
  color:$gray-500;
}

.footer-link {
  margin-left:1rem;
  margin-right:1rem;
  text-decoration: none;
}
</style>
