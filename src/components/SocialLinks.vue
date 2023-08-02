<template>
  <div class="social-links">
    <template v-for="item in items">
      <a class="btn" :class="getBtnClassList()" :href="item.href" :aria-label="item.icon">
        <i :class="item.icon"></i>
      </a>
    </template>
  </div>
</template>

<script setup>
const props = defineProps(['items', 'size', 'colors'])

const getBtnClassList = () => {
  let classList = 'btn-social'

  switch(props.size) {
    case 'huge': classList += ' btn-social-huge'; break
    case 'big': classList += ' btn-social-big'; break
    case 'mid': classList += ' btn-social-mid'; break
    default: classList += ' btn-social-sm'
  }

  switch(props.colors) {
    case 'darkAndWhite': classList += ' btn-social-dark-and-white'; break
    case 'dark': classList += ' btn-social-dark'; break
    case 'transparent': classList += ' btn-social-transparent'; break
    default: classList += ' btn-social-default-color'; break
  }

  return classList;
}
</script>

<style lang="scss" scoped>
@import "../scss/_theming.scss";

.btn-social {
  color:white;
  border-radius: 100%;
  border-width: 2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.btn-social-huge {
  $font-size:1.6rem;
  font-size: $font-size;
  width: calc($font-size*2.4);
  height: calc($font-size*2.4);

  @include media-breakpoint-up(lg) {
    $font-size:1.8rem;
    font-size: $font-size;
    width: calc($font-size*2.4);
    height: calc($font-size*2.4);
  }
}


.btn-social-big {
  $font-size:1.2rem;
  font-size: $font-size;
  width: calc($font-size*2.4);
  height: calc($font-size*2.4);

  @include media-breakpoint-up(lg) {
    $font-size:1.4rem;
    font-size: $font-size;
    width: calc($font-size*2.4);
    height: calc($font-size*2.4);
  }
}

.btn-social-mid {
  $font-size:1rem;
  font-size: $font-size;
  width: calc($font-size*2.4);
  height: calc($font-size*2.4);

  @include media-breakpoint-up(lg) {
    $font-size:1.2rem;
    font-size: $font-size;
    width: calc($font-size*2.4);
    height: calc($font-size*2.4);
  }
}

.btn-social-sm {
  $font-size:0.85rem;
  font-size: $font-size;
  width: calc($font-size*2.4);
  height: calc($font-size*2.4);

  @include media-breakpoint-up(lg) {
    $font-size:1rem;
    font-size: $font-size;
    width: calc($font-size*2.4);
    height: calc($font-size*2.4);
  }
}

.btn-social-default-color {
  background-color: $primary;
  border-color: lighten($primary, 10%);

  &:hover {
    background-color: lighten($primary, 10%);
    border-color: lighten($primary, 15%);
  }
}

.btn-social-dark-and-white {
  background-color: $dark;
  border-color: white;

  &:hover {
    color:$primary;
    background-color: white;
  }
}

.btn-social-transparent {
  background-color: transparent;
  color: $dark;
  margin:0;

  &:hover {
    color:$primary;
  }
}

.btn-social-dark {
  background-color: $dark;
  border-color: lighten($dark, 10%);

  &:hover {
    color: white;
    border-color: darken($primary, 5%);
    background-color: $primary;
  }
}

</style>