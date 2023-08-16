<template>
    <!-- Navbar -->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{'navbar-shrink': !shouldExpand}">
        <div class="container">
            <!-- Brand -->
            <a class="navbar-brand" href="#">
                <img :src="props.navbarData.logo" alt="agency-logo" class="img img-fluid img-logo">
                <span class="brand-text" v-html="props.navbarData.brand"></span>
            </a>

            <!-- Collapse Button (Small Screens) -->
            <button id="toggler" class="navbar-toggler" type="button">
                <i class="fas fa-bars ms-1 me-1"></i>
            </button>

            <!-- Navbar Items -->
            <div class="collapse navbar-collapse mb-1 mb-lg-0" id="navbar-collapse-container">
                <ul class="navbar-nav text-uppercase ms-auto py-1">
                    <li v-for="section in props.sections">
                        <a class="nav-link" :class="{'active': _isSectionActive(section.id)}" @click="_onNavLinkClicked(section.id)">
                            <i :class="section.navbar.icon" class="nav-link-icon d-lg-none"></i>
                            <span>{{ section.navbar.label }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue"
import {useLayout} from "../../composables/layout.js"
import Collapse from '/node_modules/bootstrap/js/src/collapse'

const props = defineProps(['navbarData', 'sections'])
const layout = useLayout()

const currentSectionId = ref(null)
const shouldExpand = ref(null)
let bsCollapse = null

onMounted(() => {
    window.addEventListener('scroll', _spyScroll)
    _spyScroll()

    const elNavbar = document.getElementById('navbar')
    const elCollapse = elNavbar.getElementsByClassName('collapse')[0]
    const elToggle = elNavbar.getElementsByClassName('navbar-toggler')[0]

    bsCollapse = new Collapse(elCollapse, {toggle:false})
    elToggle.addEventListener('click', () => { bsCollapse.toggle() })
    elCollapse.addEventListener('show.bs.collapse', () => { elToggle.classList.add('navbar-toggler-open') })
    elCollapse.addEventListener('hide.bs.collapse', () => { elToggle.classList.remove('navbar-toggler-open') })
})

onUnmounted(() => {
    window.removeEventListener('scroll', _spyScroll)
})

const _isSectionActive = (sectionId) => {
    return currentSectionId.value === sectionId
}

const _spyScroll = () => {
    let lowestYPosition = null

    shouldExpand.value = (window.scrollY === 0)

    for(let i in props.sections) {
        let section = props.sections[i]
        let divBounds = document.querySelector("#" + section.id)
        if(divBounds) {
            let distanceFromZero = Math.abs(divBounds.getBoundingClientRect().y)

            if(lowestYPosition === null || distanceFromZero < lowestYPosition) {
                lowestYPosition = distanceFromZero
                currentSectionId.value = section.id
            }
        }
    }
}

const _onNavLinkClicked = (sectionId) => {
    layout.scrollToElement(sectionId)

    const clickEvent = new Event("click", { bubbles: true, cancelable: true })
    const toggleButton = document.getElementById("toggler")
    if(!layout.isBreakPoint("lg")) {
        toggleButton.dispatchEvent(clickEvent)
    }
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.navbar {
    padding: 1.5rem 0.5rem;
    border: none;
    background-color: transparent;
    transition: padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
    
    @media (max-width: 1050px) {
        padding-left: 0.2rem;
        padding-right: 0.2rem;
    }

    @include media-breakpoint-down(lg) {
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        background-color: $dark;
    }

    @include media-breakpoint-down(sm) {
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
    }
}

.navbar-toggler {
    padding: 0.6rem;

    font-size: 0.75rem;
    font-family: $headings-font-family;
    font-weight: $font-weight-bold;
    border: 2px solid lighten($dark, 5%);

    outline: none !important;
    box-shadow: none !important;

    &-open {
        background-color: lighten($dark, 5%);
        border-color: lighten($dark, 10%);
        color:white;
    }
}

.navbar-brand {
    text-transform: uppercase;
    font-family: $headings-font-family;
    font-weight: $headings-font-weight;
    font-size: 1.5em;
    transition: font-size 0.3s ease-in-out;

    .img-logo {
        height: 3.4rem;
        margin-right: 0.5rem;
        transition: height 0.3s ease-in-out;
    }

    @include media-breakpoint-down(lg) {
        font-size: 1.25rem;

        .img-logo {
            height: 3rem;
        }
    }
}

.navbar-shrink {
    @include media-breakpoint-up(lg) {
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        background-color: $dark;

        .navbar-brand {
            font-size: 1.4em;

            .img-logo {
                height: 3rem;
            }
        }
    }
}

.nav-link {
    cursor:pointer;
    margin-left: 0.3rem;

    font-family: $custom-subheadings-font-family;
    font-size: 1rem;
    color: $white;

    .nav-link-icon {
        min-width: 1.4rem;
        margin-right: 0.5rem;
        text-align: center;
        color: $gray-600;
        transition: color 0.4s;
    }

    &.active,
    &:hover {
        color: lighten($primary, 5%);

        .nav-link-icon {
            color: lighten($primary, 25%);
        }
    }

    @include media-breakpoint-down(lg) {
        display: table-cell;
        min-width: 150px;
        font-size: 0.95rem;
        line-height: 1.3rem;

        .nav-link-icon {
            margin-left: 0.3rem;
        }
    }
}
</style>