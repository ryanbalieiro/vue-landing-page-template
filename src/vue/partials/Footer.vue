<template>
    <footer class="agency-footer">
        <!-- Top Block -->
        <div class="footer-block">
            <div class="container ps-3 pe-3">
                <!-- Grid -->
                <div class="footer-block-row row">
                    <!-- About Column -->
                    <div class="footer-block-col col-12 col-lg-4">
                        <h5 class="footer-title"><i class="fa fa-pen me-1 d-none d-md-inline"/> {{ aboutData.title }}</h5>
                        <!-- About: Description -->
                        <div class="footer-item-wrapper">
                            <span class="info-xs" v-html="aboutData.description"></span>
                        </div>
                        <!-- About: Links -->
                        <div class="footer-item-wrapper">
                            <InlineList :items="aboutData.items" />
                        </div>
                    </div>

                    <!-- Social Column -->
                    <div class="footer-block-col col-12 col-lg-4">
                        <h5 class="footer-title">{{ socialData.title }}</h5>
                        <!-- Social: Social Links -->
                        <div class="footer-item-wrapper mt-lg-3">
                            <SocialLinks :items="socialData.items" :size="'lg'" :color="'darkAndWhite'" />
                        </div>
                    </div>

                    <!-- Contact Column -->
                    <div class="footer-block-col col-12 col-lg-4">
                        <h5 class="footer-title"><i class="fa fa-fax me-2"/>{{ contactInfoData.title }}</h5>
                        <!-- Contact: Address -->
                        <div class="footer-item-wrapper">
                            <div class="address">
                                <p v-for="part in contactInfoData.address" class="info-sm m-0">{{part}}</p>
                            </div>
                        </div>
                        <!-- Contact: Options -->
                        <div class="footer-item-wrapper">
                            <InlineList :items="contactInfoData.options" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Block -->
        <div class="footer-block footer-block-dark">
            <div class="container">
                <!-- Copyright -->
                <p class="copyright info-xxs p-0 m-0" v-html="copyright"></p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {computed} from "vue"
import SocialLinks from "../widgets/SocialLinks.vue"
import InlineList from "../widgets/InlineList.vue"

const props = defineProps(['footerData'])

const contactInfoData = computed(() => {
    return props.footerData ? props.footerData.info : null
})

const socialData = computed(() => {
    return props.footerData ? props.footerData.links : null
})

const aboutData = computed(() => {
    return props.footerData ? props.footerData.otherLinks : null
})

const copyright = computed(() => {
    return props.footerData.copyright
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

$dark-background-color: darken($dark, 1%);
$standard-background-color: $dark;

.agency-footer {
    background-color: $dark-background-color;
}

.footer-block {
    min-height: 40px;
    background-color: $standard-background-color;
    padding: 1rem 0;
    text-align: center;
    &-dark {
        background-color: $dark-background-color;
    }
}

.footer-block-row {
    padding: 1rem 0;
}

.footer-block-col {
    @include media-breakpoint-down(lg) {
        padding-top: 1.5rem;
        padding-bottom: 2rem;

        &:first-child {
            padding-top: 0;
        }

        &:not(:first-child) {
            border-top: 1px solid lighten($dark, 3%);
        }

        &:last-child {
            padding-bottom: 0;
        }
    }
}

.footer-item-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 0.5rem;
    margin: 0 auto;

    min-height: 65px;
    max-width: 380px;

    @include media-breakpoint-down(lg) {
        min-height: 0;
        padding-top: 0.3rem;
    }
}

.footer-title {
    color: $gray-100;
    text-transform: uppercase;
}

p, span {
    color: $gray-500;
}
</style>