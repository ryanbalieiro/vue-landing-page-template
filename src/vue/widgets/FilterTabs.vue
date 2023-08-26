<template>
    <div class="filter-tabs">
        <!-- Bootstrap's Button Group -->
        <div class="btn-group" role="group">
            <!-- Filter Items -->
            <button v-for="item in props.items" type="button" class="btn btn-light text-2"
                    :class="{active:_isItemSelected(item)}"
                    @click="_selectItem(item)">
                <!-- Item Label -->
                {{item}}
            </button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"

/**
 * @property {{String}[]} items
 */
const props = defineProps({
    items: Array
})

const emit = defineEmits(['selected'])
const selectedItemId = ref(null)

/**
 * @param {Object} item
 * @return {boolean}
 * @private
 */
const _isItemSelected = (item) => {
    if(selectedItemId.value === null && props.items && props.items.length > 0) {
        _selectItem(props.items[0])
    }

    return selectedItemId.value === item
}

/**
 * @param {Object} item
 * @private
 */
const _selectItem = (item) => {
    selectedItemId.value = item
    emit('selected', item)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.btn-group {
    margin: 0 auto;
    min-width: 50%;
    @include media-breakpoint-down(lg) {
        min-width: 100%;
    }
}

.btn {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 0.3rem 2rem),
        sm: (padding: 0.3rem 0)
    ));

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