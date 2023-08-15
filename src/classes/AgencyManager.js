/**
 * @class
 * Manages the application state/data.
 */
export class AgencyManager {
    /**
     * @constructs
     */
    constructor() {
        this._agencyJson = null

        this._settings = null
        this._navbarData = null
        this._headerData = null
        this._footerData = null
        this._sections = null
    }

    /**
     * @public
     * @return {Promise<void>}
     */
    async init() {
        const response = await fetch('data/agency.json')
        this._agencyJson = await response.json()

        this._settings = this._agencyJson['settings']
        this._navbarData = this._agencyJson['navbar']
        this._headerData = this._agencyJson['header']
        this._footerData = this._agencyJson['footer']

        this._sections = this._agencyJson['sections']
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
}