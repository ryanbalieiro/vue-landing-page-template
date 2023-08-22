<template>
    <div class="filter-tabs">
        <!-- Bootstrap's Button Group -->
        <div class="btn-group" role="group">
            <!-- Filter Items -->
            <button v-for="item in props.items"
                    type="button"
                    class="btn btn-light text-info-2"
                    :class="{'active': _isSelected(item)}"
                    @click="_select(item)">
                <!-- Filter Item Label -->
                {{item}}
            </button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"

/**
 * @property {String[]} items
 */
const props = defineProps({
    items: Array
})

const emit = defineEmits(['select'])
const selectedItemId = ref(null)

/**
 * @param {Object} item
 * @return {boolean}
 * @private
 */
const _isSelected = (item) => {
    if(selectedItemId.value === null && props.items && props.items.length > 0) {
        _select(props.items[0])
    }

    return selectedItemId.value === item
}

/**
 * @param {Object} item
 * @private
 */
const _select = (item) => {
    selectedItemId.value = item
    emit('select', item)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.filter-tabs {
    display: flex;
}

.btn-group {
    margin: 0 auto;
}

.btn {
    --horizontal-padding:2rem;
    @include media-breakpoint-down(xs) {
        --horizontal-padding:3.5vw;
    }

    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
    opacity: 0.8;
    border-radius: 30px;

    background-color: darken($light, 5%);
    &.active, &:hover {
        background-color: darken($light, 5%);
        border-color: $light;
        color: $primary;
    }

    &.active {
        font-weight: bold;
        opacity: 1;
    }
}
</style>