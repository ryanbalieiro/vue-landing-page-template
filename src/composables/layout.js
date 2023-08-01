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

    const resetSectionClassTracker = () => {
        _lastSectionClass = null
    }

    //bootstrap breakpoints helper function
    const isBreakPoint = (size) => {
        const breakpoints = {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        };

        return window.innerWidth >= breakpoints[size];
    }

    return {scrollToSection, getNextSectionClass, resetSectionClassTracker, isBreakPoint}
}