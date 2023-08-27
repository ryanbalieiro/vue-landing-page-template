<template>
    <!-- Secondary Page -->
    <div class="agency-secondary-page">
        <!-- Navigation -->
        <NavBar :navbar-data="data.getNavbarData()"
                :links="navLinks"
                :should-spy-scroll="false"
                @link-clicked="_onNavLinkClicked"/>

        <!-- Content Wrapper -->
        <div class="page-content-wrapper">
            <SectionTemplate :section-data="props.contentData" :breadcrumbs="breadcrumbs">
                <div v-for="item in props.contentData['items']">
                    <!-- Item -->
                    <div class="item">
                        <!-- Heading -->
                        <div class="item-heading" v-if="item['title']">
                            <h4 class="mb-2 item-title"><i :class="item['faIcon']" class="me-2"/> {{item['title']}}</h4>
                        </div>

                        <!-- Description -->
                        <div class="item-description">
                            <p class="text-3" v-for="paragraph in item['description']" v-html="paragraph"/>
                        </div>
                    </div>
                </div>
            </SectionTemplate>
        </div>

        <!-- Footer -->
        <Footer :footer-data="data.getFooterData()"/>
    </div>
</template>

<script setup>
import {computed} from "vue"
import {useData} from "../../composables/data.js"
import {useRoute, useRouter} from "vue-router"
import NavBar from "../navigation/NavBar.vue"
import Footer from "../partials/Footer.vue"
import SectionTemplate from "../sections/templates/SectionTemplate.vue"

/**
 * @property {Object} contentData
 */
const props = defineProps({
    contentData: Object
})

const data = useData()
const route = useRoute()
const router = useRouter()

/**
 * @type {ComputedRef<RouteRecordRaw[]>}
 */
const navLinks = computed(() => {
    return router.options.routes.filter(route => route.hasOwnProperty('label'));
})

/**
 * @type {ComputedRef<[{path: string, name: RouteRecordName}]>}
 */
const breadcrumbs = computed(() => {
    const currentRoute = router.options.routes.filter(r => r.name === route.name)[0]

    return [{
        label: currentRoute['label'],
        path: route['path']
    }]
})

/**
 * @param {String} linkId
 * @private
 */
const _onNavLinkClicked = (linkId) => {
    router.push(linkId)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.page-content-wrapper {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding-top:2.5rem),
        xxl: (padding-top:3.0rem),
        lg: (padding-top:4.5rem),
    ));
}

.item {
    margin-bottom: 2.0rem;
}

.item-title {
    color: $dark;
}

.item-description p {
    color: $light-7;
    text-align: justify;
    margin-bottom: 1rem;
}
</style>