<template>
  <!-- If there's an href prop, create it as a link -->
  <a v-if="props.href" class="btn btn-primary btn-xl mt-4" :href="props.href" @click="_onButtonClicked()">
    <i class="me-1" :class="props.icon"></i>{{ props.label }}
  </a>

  <!-- If there's a type prop (eg. 'submit'), create it as a button -->
  <button v-else class="btn btn-primary btn-xl mt-4" :type="props.type" @click="_onButtonClicked()">
    <i class="me-1" :class="props.icon"></i>{{ props.label }}
  </button>
</template>

<script setup>
const props = defineProps(['label', 'icon', 'href', 'type']);
const emit = defineEmits(['click'])

const _onButtonClicked = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

.btn-xl {
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  font-family: $headings-font-family;
  text-transform: uppercase;
  border-radius: 4rem;
  font-size: 0.9rem;

  @include media-breakpoint-up(lg) {
    padding: 1.25rem 2.5rem;
    font-size: 1.125rem;
  }
}
</style>
