<template>
    <!-- Inline List -->
    <ul class="inline-list mt-0 mt-lg-3">
        <!-- List Header (for small screens) -->
        <li class="inline-list-item list-header">
            ━ <i class="fa fa-circle-nodes"/> ━
        </li>

        <!-- List Items -->
        <li v-for="item in props.items" class="inline-list-item">
            <a v-if="item['href']" :href="item['href']" class="text-2 item-link">
                <i v-if="item['faIcon']" :class="item['faIcon']" class="item-icon me-1"/>
                {{item['label']}}
            </a>

            <router-link v-else-if="item['routerHref']" :to="item['routerHref']" class="text-2 item-link">
                <i v-if="item['faIcon']" :class="item['faIcon']" class="item-icon me-1"/>
                {{item['label']}}
            </router-link>
        </li>
    </ul>
</template>

<script setup>
/**
 * @property {Array} items
 */
const props = defineProps({
    items: Array
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.inline-list {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
}

.inline-list-item {
    display: inline-block;
    padding-bottom: 0.1rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;

    &:not(:last-child)::after {
        content: "·";
        color: $light-5;
        margin-left: 0.6rem;
    }

    @include media-breakpoint-down(sm) {
        display: block;
        padding-bottom: 0.05rem;
        &:after {
            display: none;
        }
    }
}

.list-header {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    color: $light-5;
    font-size: 0.5rem;
    @include media-breakpoint-up(sm) {
        display: none;
    }
}

.item-icon {
    min-width: 25px;
    color: $light-5;
    @include media-breakpoint-down(md) {
        min-width: 0;
    }
}

.item-link {
    text-decoration: none;
    color: $light-6;
}

.inline-list-item:hover {
    .item-icon {
        color: $light-2;
    }

    .item-link {
        color: lighten($primary, 15%);
    }
}
</style>