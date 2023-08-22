<template>
    <!-- Navbar -->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{'navbar-shrink': !shouldExpand || !props.shouldSpyScroll}">
        <!-- Container -->
        <div class="container-xxl">
            <!-- Brand -->
            <a class="navbar-brand" href="#">
                <img :src="props.navbarData['logo']" alt="agency-logo" class="img img-fluid img-logo">
                <span class="brand-text" v-html="props.navbarData['brand']"/>
            </a>

            <!-- Collapse Button (Small Screens) -->
            <button id="toggler" class="navbar-toggler" type="button">
                <i class="fas fa-bars ms-1 me-1"/>
            </button>

            <!-- Navbar Items -->
            <div class="collapse navbar-collapse mb-1 mb-lg-0" id="navbar-collapse-container">
                <ul class="navbar-nav text-uppercase ms-auto py-1">
                    <li v-for="link in props.links">
                        <!-- Nav Link -->
                        <button class="nav-link"
                                :class="{'active': _isLinkActive(link['id'] || link['name'])}"
                                @click="_onNavLinkClicked(link['id'] || link['name'])">
                            <!-- Nav Link Label -->
                            <span class="nav-link-text text-info-5">
                                <i :class="link['navbar'] ? link['navbar'].faIcon : link['faIcon']" class="nav-link-icon d-lg-none"/>
                                {{ link['navbar'] ? link['navbar'].label : link['label'] }}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue"
import {useLayout} from "../../composables/layout.js"
import {useRoute} from "vue-router"
import Collapse from '/node_modules/bootstrap/js/src/collapse'

/**
 * @property {Object} navbarData
 * @property {Array} links
 * @property {Boolean} shouldSpyScroll
 */
const props = defineProps({
    navbarData: Object,
    links: Array,
    shouldSpyScroll:Boolean
})

const emit = defineEmits(['linkClicked'])
const layout = useLayout()
const route = useRoute()

const scrollSpyActiveLinkId = ref(null)
const shouldExpand = ref(null)
let bsCollapse = null

/**
 * @private
 */
onMounted(() => {
    if(props.shouldSpyScroll) {
        window.addEventListener('scroll', _spyScroll)
        _spyScroll()
    }

    const elNavbar = document.getElementById('navbar')
    const elCollapse = elNavbar.getElementsByClassName('collapse')[0]
    const elToggle = elNavbar.getElementsByClassName('navbar-toggler')[0]

    bsCollapse = new Collapse(elCollapse, {toggle:false})
    elToggle.addEventListener('click', () => { bsCollapse.toggle() })
    elCollapse.addEventListener('show.bs.collapse', () => { elToggle.classList.add('navbar-toggler-open') })
    elCollapse.addEventListener('hide.bs.collapse', () => { elToggle.classList.remove('navbar-toggler-open') })
})

/**
 * @private
 */
onUnmounted(() => {
    window.removeEventListener('scroll', _spyScroll)
})

/**
 * @param {String} linkId
 * @return {boolean}
 * @private
 */
const _isLinkActive = (linkId) => {
    if(props.shouldSpyScroll)
        return scrollSpyActiveLinkId.value === linkId
    else
        return linkId === route.name
}

/**
 * @private
 */
const _spyScroll = () => {
    if(!props.shouldSpyScroll)
        return

    let lowestYPosition = null
    shouldExpand.value = (window.scrollY === 0)

    for(let i in props.links) {
        let section = props.links[i]
        let divBounds = document.querySelector("#" + section.id)
        if(divBounds) {
            let distanceFromZero = Math.abs(divBounds.getBoundingClientRect().y)

            if(lowestYPosition === null || distanceFromZero < lowestYPosition) {
                lowestYPosition = distanceFromZero
                scrollSpyActiveLinkId.value = section.id
            }
        }
    }
}

/**
 * @param {String} linkId
 * @private
 */
const _onNavLinkClicked = (linkId) => {
    const clickEvent = new Event("click", { bubbles: true, cancelable: true })
    const toggleButton = document.getElementById("toggler")
    if(!layout.isBreakPoint("lg")) {
        toggleButton.dispatchEvent(clickEvent)
    }

    emit('linkClicked', linkId)
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.navbar {
    --padding:1.5rem 0;
    @include media-breakpoint-down(lg) {--padding: 0.7rem 0;}
    @include media-breakpoint-down(sm) {--padding: 0.1rem 0;}

    padding: var(--padding);
    border: none;
    transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;

    background-color: transparent;
    @include media-breakpoint-down(lg) {background-color: $nav-background-color;}
}

.navbar-brand {
    --img-height: 3.3rem;
    --font-size: 1.5rem;
    @include media-breakpoint-down(lg) {
        --img-height: 3rem;
        --font-size: 1.25rem;
    }

    text-transform: uppercase;
    font-family: $headings-font-family;
    font-weight: $headings-font-weight;
    font-size: var(--font-size);
    transition: font-size 0.3s ease-in-out;

    .img-logo {
        height: var(--img-height);
        margin-right: 0.5rem;
        transition: height 0.3s ease-in-out;
    }
}

.navbar-shrink {
    @include media-breakpoint-up(lg) {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        background-color: $nav-background-color;

        .navbar-brand {
            font-size: 1.4em;

            .img-logo {
                height: 3rem;
            }
        }
    }
}

.navbar-toggler {
    padding: 0.6rem;

    font-size: 0.75rem;
    font-family: $headings-font-family;
    font-weight: $font-weight-bold;
    border: 2px solid lighten($nav-background-color, 5%);

    outline: none !important;
    box-shadow: none !important;

    &-open {
        background-color: lighten($nav-background-color, 5%);
        border-color: lighten($nav-background-color, 10%);
        color:$white;
    }
}

.nav-link {
    cursor: pointer;
    padding: 0 0 0 1.2rem!important;

    font-family: $custom-subheadings-font-family;
    color: $white;
    text-transform: uppercase;

    &.active,
    &:hover {
        color: lighten($primary, 5%);

        .nav-link-icon {
            color: lighten($primary, 25%);
        }
    }

    @include media-breakpoint-down(xl) {
        padding: 0 0 0 0.9rem!important;
    }

    @include media-breakpoint-down(lg) {
        padding: 0!important;
        display: table-cell;
        min-width: 150px;
        margin-left: 0.8rem;
        margin-bottom: 0.6rem;
        text-align: left;
    }

    @include media-breakpoint-down(md) {
        margin-bottom: 0.4rem;
    }
}

.nav-link-icon {
    min-width: 1.4rem;
    margin-right: 0.3rem;
    color: $light-6;
    text-align: center;

    transition: color 0.4s;
}


</style>