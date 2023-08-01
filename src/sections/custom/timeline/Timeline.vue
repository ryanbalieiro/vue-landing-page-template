<template>
  <SectionWrapper :data="data">
    <ul class="timeline mt-3">
      <template v-for="(item, index) in data.content.items">
        <!-- Timeline Item -->
        <li :class="index % 2 !== 0 ? 'timeline-inverted' : 'timeline'">
          <!-- Image -->
          <div class="timeline-image">
            <img class="rounded-circle img-fluid" :src="item.srcImage" :alt="item.title">
          </div>

          <!-- Panel -->
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="mb-1" v-html="item.title"></h4>
              <span class="badge bg-light text-dark mb-3 mt-1">
                <i class="fa fa-calendar-check me-1"></i> {{ item.year }}
              </span>
            </div>

            <div class="timeline-body">
              <p class="text-muted" v-html="item.description"></p>
            </div>
          </div>
        </li>
      </template>

      <li>
        <div class="timeline-image-final">
        </div>
      </li>
    </ul>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"

const props = defineProps(['data'])
</script>

<style scoped lang="scss">
@import "../../../scss/_theming.scss";

.timeline {
  position: relative;
  padding: 0;
  list-style: none;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;
    content: "";
    background-color: $gray-200;
  }

  >li {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;

    &:after,
    &:before {
      display: table;
      content: " ";
    }

    &:after {
      clear: both;
    }

    .timeline-panel {
      position: relative;
      float: right;
      width: 100%;
      padding: 0 20px 0 100px;
      text-align: left;
    }

    .timeline-image {
      position: absolute;
      z-index: 100;
      left: 0;
      width: 80px;
      height: 80px;
      margin-left: 0;
      text-align: center;
      color: white;
      border: 7px solid $gray-200;
      border-radius: 100%;
      background-color: $gray-400;
    }

    .timeline-image-final {
      position: absolute;
      z-index: 100;
      left: 30px;
      top: 30px;
      width: 20px;
      height: 20px;
      margin-left: 0;
      text-align: center;
      color: white;
      border: 3px solid $gray-200;
      border-radius: 100%;
      background-color: $gray-400;
    }

    &.timeline-inverted>.timeline-panel {
      float: right;
      padding: 0 20px 0 100px;
      text-align: left;

      &:before {
        right: auto;
        left: -15px;
      }

      &:after {
        right: auto;
        left: -14px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@include media-breakpoint-up(md) {
  .timeline {
    &:before {
      left: 50%;
    }

    >li {
      min-height: 60px;
      margin-bottom: 40px;

      .timeline-panel {
        float: left;
        width: 41%;
        padding: 0;
        text-align: right;
      }

      &.timeline-inverted>.timeline-panel {
        float: right;
        padding: 0;
        text-align: left;
      }

      .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
      }

      .timeline-image-final {
        left: 50%;
        width: 30px;
        height: 30px;
        margin-left: -15.5px;
        margin-top: 20px;
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  .timeline {
    >li {
      min-height: 120px;
      margin-bottom: 80px;

      .timeline-panel,  &.timeline-inverted>.timeline-panel {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
      }

      .timeline-image-final {
        width: 40px;
        height: 40px;
        margin-left: -20.5px;
        margin-top: 50px;
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  .timeline {
    >li {
      min-height: 40px;
      margin-bottom: 100px;

      .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
      }

      .timeline-image-final {
        width: 50px;
        height: 50px;
        margin-left: -25.5px;
        margin-top: -30px;
      }
    }
  }
}
</style>
