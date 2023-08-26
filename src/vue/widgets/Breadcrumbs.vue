<template>
    <nav class="breadcrumbs">
        <ul class="breadcrumbs-links">
            <li class="breadcrumb-link-item text-4">
                <router-link to="/"><i class="fa fa-home me-1"/></router-link>
            </li>

            <li v-for="(route, index) in routes" class="breadcrumb-link-item text-4">
                <router-link v-if="index < routes.length - 1" :to="route.path">{{ route['label'] }}</router-link>
                <span v-else>{{ route['label'] }}</span>
            </li>
        </ul>
    </nav>
</template>

<script setup>
/**
 * @property {Array} routes
 */
const props = defineProps({
    routes: Array
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

ul.breadcrumbs-links {
    list-style: none;
    display: flex;
    padding: 0;

    @include media-breakpoint-down(md) {
        justify-content: center;
    }
}

li.breadcrumb-link-item {
    margin-right: 0.3rem;

    color: $light-6;
    &:not(:last-child)::after {
        content: "›";
        color: $light-6;
        margin-left: 0.3rem;
    }
}
</style>