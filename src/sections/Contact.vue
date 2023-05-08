<template>
  <PageSectionWrapper :id="contactData.id" :title="contactData.title" :subtitle="contactData.subtitle" :is-dark-section="true">
    <form id="contact-form">
      <div class="row align-items-stretch mb-3">
        <div class="col-md-6">
          <div class="form-group">
            <!-- Name input-->
            <input class="form-control" id="name" type="text" :placeholder="contactData.placeholders.name" required/>
          </div>

          <div class="form-group">
            <!-- Email address input-->
            <input class="form-control" id="email" type="email" :placeholder="contactData.placeholders.email" required/>
          </div>

          <div class="form-group mb-md-0">
            <!-- Subject input-->
            <input class="form-control" id="subject" type="text" :placeholder="contactData.placeholders.subject" required/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group form-group-textarea mb-md-0">
            <!-- Message input-->
            <textarea class="form-control" id="message" :placeholder="contactData.placeholders.message" required></textarea>
          </div>
        </div>
      </div>

      <div class="text-center">
        <XLButton :label="contactData.button.label" :type="'submit'" :icon="contactData.button.icon"></XLButton>
      </div>
    </form>
  </PageSectionWrapper>
</template>

<script setup>
import agencyData from '../data/agency.json'
import PageSectionWrapper from "../components/PageSectionWrapper.vue"
import XLButton from "../components/XLButton.vue";
const contactData = agencyData.contact
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.form-group {
  margin-bottom: 1rem;

  input,
  textarea {
    padding: 1.25rem;
  }

  input.form-control {
    background-color: $dark;
    border-color: $gray-700;
    border-width: 2px;
    color: white;
    height: 30px;

    @include media-breakpoint-up(md) {
      height: auto;
    }

    &:focus {
      border-color: $primary;
    }
  }
}

.form-group-textarea {
  height: 100%;

  textarea {
    background-color: $dark;
    border-color: $gray-700;
    border-width: 2px;
    color: white;
    height: 100%;
    min-height: 10rem;

    &:focus {
      border-color: $primary;
    }
  }
}

p.help-block {
  margin: 0;
}

.form-control:focus {
  border-color: $dark;
  box-shadow: none;
}

::-webkit-input-placeholder {
  color: $gray-700;
  font-size: 0.9rem;
  font-weight: bold;
}

:-moz-placeholder {
  color: $gray-500;
}

::-moz-placeholder {
  color: $gray-500;
}

:-ms-input-placeholder {
  color: $gray-500;
}
</style>
