/**
 * Created by Ryan Balieiro on 08.26.2023
 * Hub for defining app constants.
 */
export function useConstants() {
    /** @const **/
    const BOOTSTRAP_BREAKPOINTS = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    }

    /** @const **/
    const HTML_CLASSES = {
        bodyScroll: '',
        bodyNoScroll: 'no-scroll',
        imageViewImage: 'image-view-img',
        imageViewImageIgnoredOnCount: 'image-view-img-ignored-on-count'
    }

    /** @enum **/
    const LoadStatus = {
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
    }

    const ProjectBannerType = {
        FEATURED: "featured",
        STANDARD: "standard"
    }

    /** @enum **/
    const SocialLinksSize = {
        XL: 'btn-social-xl',
        LG: 'btn-social-lg',
        MD: 'btn-social-md',
    }

    /** @enum **/
    const SocialLinksColor = {
        DARK_AND_WHITE: 'btn-social-dark-and-white',
        DARK: 'btn-social-dark',
        BLACK: 'btn-social-black',
        LIGHT_DARK: 'btn-social-light-dark',
    }

    return {BOOTSTRAP_BREAKPOINTS, HTML_CLASSES, LoadStatus, ProjectBannerType, SocialLinksSize, SocialLinksColor}
}