<template>
    <!-- If there's an href prop, create it as a link -->
    <a v-if="_getHrefForLink()"
       :id="props.id"
       :class="props.customClass"
       :href="_getHrefForLink()"
       class="btn btn-primary btn-xl mt-4"
       target="_blank"
       @click="_onButtonClicked()">

        <!-- Button Label -->
        <i class="me-1" :class="props.icon"/>{{ props.label }}
    </a>

    <!-- If there's a type prop (eg. 'submit'), create it as a button -->
    <button v-else
            :type="props.type"
            :id="props.id"
            :class="props.customClass"
            class="btn btn-primary btn-xl mt-4"
            @click="_onButtonClicked()">

        <!-- Button Label -->
        <i class="me-1" :class="props.icon"/>{{ props.label }}
    </button>
</template>

<script setup>
import {useLayout} from "/src/composables/layout.js"

/**
 * @property {String} label
 * @property {String} icon
 * @property {String} href
 * @property {String} type
 * @property {String} id
 * @property {Object|String} customClass
 */
const props = defineProps({
    label: String,
    icon: String,
    href: String,
    type: String,
    id: String,
    customClass: Object,
})

const layout = useLayout()

const _getHrefForLink = () => {
    if(props.href && props.href.charAt(0) !== '#') {
        return props.href
    }
}

const emit = defineEmits(['click'])

/**
 * @private
 */
const _onButtonClicked = () => {
    if(props.href && props.href.charAt(0) === '#') {
        layout.smoothScrollToElement(props.href.replace('#', ''), true)
    }

    emit('click')
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.btn-xl {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 1.125rem 2.3rem, font-size: 1.125rem),
        xxl:  (padding: 1rem 2rem, font-size: 1rem),
        lg:   (padding: 1rem 1.5rem, font-size: 0.9rem)
    ));

    border-radius: 4rem;
    font-weight: 400;
    font-family: $headings-font-family;
    text-transform: uppercase;
}
</style>