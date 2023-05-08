import {ref} from "vue";

let _lastSectionClass = null;

export function useLayout() {

    //scrolls to the section with the given id.
    const scrollToSection = (sectionId) => {
        const offsetTop = document.querySelector('#' + sectionId).offsetTop
        const navbarHeight = document.querySelector('#navbar').offsetHeight
        scroll({
            top: offsetTop - Math.min(navbarHeight, 70),
            behavior: "smooth"
        })
    }

    //determines the class of the next section in order to alternate between white and orange.
    const getNextSectionClass = () => {
        if(_lastSectionClass === 'page-section')
            _lastSectionClass = 'page-section page-section-primary'
        else
            _lastSectionClass = 'page-section'

        return _lastSectionClass
    }

    return {scrollToSection, getNextSectionClass}
}