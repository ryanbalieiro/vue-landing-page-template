<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <!-- Footer Location -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4"><i class="fa fa-map-pin me-2"></i>{{ data.location.title }}</h4>
          <p class="text-address" v-html="data.location.address"></p>
        </div>

        <!-- Footer Social Icons -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">{{ data.links.title }}</h4>
          <SocialLinks :items="data.links.items" :colors="'darkAndWhite'" :size="'big'"></SocialLinks>
        </div>

        <!-- Footer Extra Links -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">{{ data.otherLinks.title }}</h4>
          <template v-for="item in data.otherLinks.items">
            <a class="extra-link" :href="item.href">{{item.label}}</a>
          </template>
        </div>

        <div class="col-lg-12 mb-3 mt-lg-2">
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

  .text-address {
    color:$gray-500;
  }

  .extra-link {
    margin-left:1rem;
    margin-right:1rem;
    text-decoration: none;
  }

  .copyright {
    background-color: $dark;
  }
}
</style>
