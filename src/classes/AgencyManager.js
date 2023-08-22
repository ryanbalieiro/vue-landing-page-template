/**
 * @class
 * Manages the application state/data.
 */
export class AgencyManager {
    /**
     * @constructs
     */
    constructor() {
        this._settings = null

        this._navbarData = null
        this._headerData = null
        this._footerData = null

        this._sections = null

        this._privacyPolicyData = null
        this._legalData = null
    }

    /**
     * @public
     * @return {Promise<void>}
     */
    async init() {
        const agencyResponse = await fetch('data/agency.json')
        const jAgency = await agencyResponse.json()

        this._settings = jAgency['settings']
        this._navbarData = jAgency['navbar']
        this._headerData = jAgency['header']
        this._footerData = jAgency['footer']

        const sectionsResponse = await fetch('data/sections.json')
        const jSections = await sectionsResponse.json()
        this._sections = jSections['sections']

        const secondaryPagesResponse = await fetch('data/secondary-pages.json')
        const jSecondaryPages = await secondaryPagesResponse.json()
        this._privacyPolicyData = jSecondaryPages['policy']
        this._legalData = jSecondaryPages['legal']
    }

    /**
     * @returns {Object}
     */
    get settings() {
        return this._settings
    }

    /**
     * @returns {Object}
     */
    get navbarData() {
        return this._navbarData
    }

    /**
     * @returns {Object}
     */
    get headerData() {
        return this._headerData
    }

    /**
     * @returns {Object}
     */
    get footerData() {
        return this._footerData
    }

    /**
     * @return {Array}
     */
    get sections() {
        return this._sections
    }

    /**
     * @returns {Object}
     */
    get privacyPolicyData() {
        return this._privacyPolicyData
    }

    /**
     * @returns {Object}
     */
    get legalData() {
        return this._legalData
    }
}