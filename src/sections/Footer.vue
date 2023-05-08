<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <!-- Footer Location -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4"><i class="fa fa-map-pin me-2"></i>{{ footerData.location.title }}</h4>
          <p class="text-address" v-html="footerData.location.address"></p>
        </div>

        <!-- Footer Social Icons -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">{{ footerData.links.title }}</h4>
          <template v-for="item in footerData.links.items">
            <a class="btn btn-social mx-2" :href="item.href" :aria-label="item.icon">
              <i :class="item.icon"></i>
            </a>
          </template>
        </div>

        <!-- Footer Extra Links -->
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4">{{ footerData.otherLinks.title }}</h4>
          <template v-for="item in footerData.otherLinks.items">
            <a class="extra-link" :href="item.href">{{item.label}}</a>
          </template>
        </div>

        <div class="col-lg-12 mb-3 mt-lg-2">
          <small class="text-muted">{{ footerData.copyright }}</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import agencyData from '../data/agency.json'

const footerData = agencyData.footer
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.page-footer {
  background-color: $dark;
  color: $white;
  padding-top:2rem;
  text-align: center;

  .text-address {
    color:$gray-500;
  }

  .btn-social {
    color: white;
    border-color: white;
    border-radius: 100%;
    border-width: 2px;
    font-size: 1.3rem;

    &:hover {
      background-color: white;
      color: $primary;
    }
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
