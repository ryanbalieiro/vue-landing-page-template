import DefaultSection from "../vue/sections/_templates/SectionTemplate.vue"
import AboutSection from "../vue/sections/about/AboutSection.vue"
import ContactSection from "../vue/sections/contact/ContactSection.vue"
import FaqSection from "../vue/sections/faq/FaqSection.vue"
import FeaturedSection from "../vue/sections/featured/FeaturedSection.vue"
import HistorySection from "../vue/sections/history/HistorySection.vue"
import PortfolioSection from "../vue/sections/portfolio/PortfolioSection.vue"
import ReviewsSection from "../vue/sections/reviews/ReviewsSection.vue"
import ServicesSection from "../vue/sections/services/ServicesSection.vue"
import TeamSection from "../vue/sections/team/TeamSection.vue"

/**
 * @const
 */
const SECTION_TEMPLATE_COMPONENTS = {
    DefaultSection,
    AboutSection,
    ContactSection,
    FaqSection,
    FeaturedSection,
    HistorySection,
    PortfolioSection,
    ReviewsSection,
    ServicesSection,
    TeamSection
}

/**
 * @const
 * @type {{xl: number, md: number, sm: number, xs: number, lg: number}}
 */
const BOOTSTRAP_BREAKPOINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
}

export function useLayout() {
    /**
     * @param {String} componentName
     * @return {*|{}}
     */
    const getSectionComponentByName = (componentName) => {
        if(!componentName)
            return DefaultSection

        if(SECTION_TEMPLATE_COMPONENTS[componentName])
            return SECTION_TEMPLATE_COMPONENTS[componentName]

        throw new Error("Couldn't find component with name: " + componentName + ". All section components must be registered on layout.js.");
    }

    /**
     * @param {String} size
     * @return {boolean}
     */
    const isBreakPoint = (size) => {
        return window.innerWidth >= BOOTSTRAP_BREAKPOINTS[size]
    }

    /**
     * @return {boolean}
     */
    const isTouchDevice = () => {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    /**
     * @return {string}
     */
    const getBreakPoint = () => {
        const windowWidth = window.innerWidth;
        let windowBreakpoint = ''
        for (const breakpoint in BOOTSTRAP_BREAKPOINTS) {
            if (windowWidth >= BOOTSTRAP_BREAKPOINTS[breakpoint]) {
                windowBreakpoint = breakpoint
            }
        }

        return windowBreakpoint
    }

    /**
     * @param {String} elementId
     */
    const scrollToElement = (elementId) => {
        const offsetTop = document.querySelector('#' + elementId).offsetTop
        const navbarHeight = document.querySelector('#navbar').offsetHeight
        scroll({
            top: offsetTop - Math.min(navbarHeight, isBreakPoint('sm') ? 70 : 60),
            behavior: "smooth"
        })
    }

    /**
     * @param {HTMLElement} element
     * @return {boolean}
     */
    const isElementOutsideBounds = (element) => {
        const rect = element.getBoundingClientRect();

        return (
            rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > window.innerWidth ||
            rect.top > window.innerHeight
        );
    }


    return {
        isBreakPoint,
        isTouchDevice,
        getBreakPoint,
        getSectionComponentByName,
        isElementOutsideBounds,
        scrollToElement
    }
}