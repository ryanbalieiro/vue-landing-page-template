<template>
    <footer class="agency-footer">
        <!-- Top Block -->
        <div class="footer-block">
            <!-- Container -->
            <div class="container-xxl">
                <!-- Footer Info Row -->
                <div class="footer-block-row row">
                    <!-- Columns -->
                    <div v-for="column in columnsData" class="footer-block-col col-12 col-lg-4">
                        <!-- Column Title -->
                        <h5 class="footer-title">
                            <i v-if="column['faIcon']" :class="column['faIcon']"/>
                            {{column['title']}}
                        </h5>

                        <!-- (If...) Column Description (Array) -->
                        <div v-if="Array.isArray(column['description'])" class="footer-item-wrapper">
                            <div class="footer-subtitle">
                                <p v-for="subtitle in column['description']" class="text-3 m-0">
                                    {{subtitle}}
                                </p>
                            </div>
                        </div>
                        <!-- (Else If...) Column Description (String) -->
                        <div v-else-if="column['description']" class="footer-item-wrapper">
                            <span class="text-2" v-html="column['description']"/>
                        </div>

                        <!-- (If...) Buttons -->
                        <div v-if="column['displayItemsAsButtons']" class="footer-item-wrapper mt-3">
                            <SocialLinks :items="column['items']" :size="constants.SocialLinksSize.LG" :color="constants.SocialLinksColor.DARK_AND_WHITE"/>
                        </div>
                        <!-- (Else...) Link List -->
                        <div v-else class="footer-item-wrapper mt-2 mt-lg-0">
                            <InlineList :items="column['items']"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Block -->
        <div class="footer-block footer-block-dark">
            <div class="container-xxl">
                <!-- Copyright -->
                <p class="copyright text-1 p-0 m-0" v-html="copyright"></p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {computed} from "vue"
import SocialLinks from "../widgets/SocialLinks.vue"
import InlineList from "../widgets/InlineList.vue"
import {useConstants} from "../../composables/constants.js"

/**
 * @property {Object} footerData
 */
const props = defineProps({
    footerData: Object
})

const constants = useConstants()

/**
 * @type {ComputedRef<Array>}
 */
const columnsData = computed(() => {
    let columns = []
    if(!props.footerData)
        return columns

    columns.push(props.footerData['left'], props.footerData['middle'], props.footerData['right'])
    return columns
})

/**
 * @type {ComputedRef<String>}
 */
const copyright = computed(() => {
    return props.footerData['copyright']
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.agency-footer {
    background-color: $footer-bg-color;
}

.footer-block {
    min-height: 40px;
    background-color: $footer-bg-color;
    padding: 1rem 0;
    text-align: center;
    &-dark {
        background-color: $footer-bg-highlight-color;
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

    @include generate-dynamic-styles-with-hash((
        xxxl: (min-height: 55px, padding-top:0.5rem),
        lg: (min-height: 0, padding-top:0.3rem),
    ));

    margin: 0 auto;
    max-width: 380px;
}

.footer-title {
    color: $light-1;
    text-transform: uppercase;
}

p, span {
    color: $light-5;
}
</style>