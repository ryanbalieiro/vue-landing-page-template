<template>
    <!-- Secondary Page -->
    <div class="agency-secondary-page">
        <!-- Navigation -->
        <NavBar :navbar-data="props.navbarData"
                :links="navLinks"
                :should-spy-scroll="false"
                @link-clicked="_onNavLinkClicked"/>

        <!-- Content Wrapper -->
        <div class="page-content-wrapper">
            <SectionTemplate :section-data="props.contentData">
                <div v-for="item in props.contentData['items']">
                    <!-- Item -->
                    <div class="item">
                        <!-- Heading -->
                        <div class="item-heading" v-if="item['title']">
                            <h4 class="mb-2 item-title"><i :class="item['faIcon']" class="me-2"/> {{item['title']}}</h4>
                        </div>

                        <!-- Description -->
                        <div class="item-description">
                            <p class="text-info-4" v-for="paragraph in item['description']" v-html="paragraph"/>
                        </div>
                    </div>
                </div>
            </SectionTemplate>
        </div>

        <!-- Footer -->
        <Footer :footer-data="props.footerData"/>
    </div>
</template>

<script setup>
import NavBar from "../navigation/NavBar.vue"
import Footer from "../partials/Footer.vue"
import {computed} from "vue"
import {useRouter} from "vue-router"
import SectionTemplate from "../sections/_templates/SectionTemplate.vue"

/**
 * @property {Object} navbarData
 * @property {Object} contentData
 * @property {Object} footerData
 */
const props = defineProps({
    navbarData: Object,
    contentData: Object,
    footerData: Object
})

const router = useRouter()

/**
 * @type {ComputedRef<RouteRecordRaw[]>}
 */
const navLinks = computed(() => {
    return router.options.routes.filter(route => route.hasOwnProperty('label'));
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
    padding-top: 5rem;
}

.item {
    margin-bottom: 2.4rem;
}

.item-title {
    color: $dark;
}

.item-description p {
    color: $light-7;
}
</style>