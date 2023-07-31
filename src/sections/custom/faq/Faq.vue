<template>
  <SectionWrapper :data="data">
    <hr class="mt-0 mb-5">
    <!-- Faq Items -->
    <div class="row h-100">
      <template v-for="faqItem in data.content.items">
        <div class="col-12 col-lg-6">
          <!-- Faq Item -->
          <div class="faq-item d-flex h-100 mb-4 pe-2">
            <div class="flex-shrink-0 pe-1 ps-1 pe-lg-0 ps-lg-2">
              <i class="fa fa-question-circle text-primary question-icon"></i>
            </div>
            <div class="ms-3">
              <h5 class="question-title">{{ faqItem.question }}</h5>
              <p class="question-answer text-muted" v-html="faqItem.answer"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
    <hr class="mt-2 mb-4">
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../CustomSectionWrapper.vue"

const props = defineProps(['data'])
</script>

<style lang="scss" scoped>
@import "../../../scss/_theming.scss";

.question-icon {
  font-size: 1.5rem;
}

.question-title {
  font-size: 1.2rem;
}

.question-answer {
  font-size: 0.9rem!important;
  text-align: justify;
}

@include media-breakpoint-down(md) {
  .question-icon {
    font-size: 1.2rem;
  }

  .question-title {
    font-size: 1rem;
  }

  .question-answer {
    font-size: 0.8rem!important;
  }
}

</style>