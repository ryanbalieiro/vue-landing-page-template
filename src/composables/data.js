/**
 * Created by Ryan Balieiro on 08.26.2023
 * This composable will fetch and manage the application data.
 */
import {reactive} from "vue"
import {useUtils} from "./utils.js"

const utils = useUtils()

/**
 * @type {Object}
 * @private
 */
let _jsonData = reactive({
    settings: null,

    navbar: null,
    header: null,
    footer: null,
    sections: null,

    legal:null,
    policy:null
})

/**
 * @type {Object}
 * @private
 */
let _progressData = reactive({
    loadedFiles: 0,
    totalFiles: 3
})

export function useData() {
    /**
     * Fetch only essential stuff for booting up the app.
     * @return {Promise<void>}
     */
    const fetchData = async () => {
        const baseUrl = import.meta.env.BASE_URL

        const generalResponse = await fetch(baseUrl + '/data/general.json')
        const jGeneral = await generalResponse.json()

        _jsonData.settings = jGeneral['settings']
        _jsonData.navbar = jGeneral['navbar']
        _jsonData.header = jGeneral['header']
        _jsonData.footer = jGeneral['footer']
        _progressData.loadedFiles++

        const sectionsResponse = await fetch(baseUrl + '/data/sections.json')
        const jSections = await sectionsResponse.json()
        _jsonData.sections = jSections['sections']
        _progressData.loadedFiles++

        const pagesResponse = await fetch(baseUrl + '/data/pages.json')
        const jPages = await pagesResponse.json()
        _jsonData.policy = jPages['policy']
        _jsonData.legal = jPages['legal']
        _progressData.loadedFiles++
    }

    /**
     * @return {Object}
     */
    const getSettings = () => {
        return _jsonData.settings
    }

    /**
     * @return {Object}
     */
    const getNavbarData = () => {
        return _jsonData.navbar
    }

    /**
     * @return {Object}
     */
    const getHeaderData = () => {
        return _jsonData.header
    }

    /**
     * @return {Object}
     */
    const getFooterData = () => {
        return _jsonData.footer
    }

    /**
     * @return {Array}
     */
    const getSectionsData = () => {
        return _jsonData.sections
    }

    /**
     * @return {Object}
     */
    const getLegalData = () => {
        return _jsonData.legal
    }

    /**
     * @return {Object}
     */
    const getPolicyData = () => {
        return _jsonData.policy
    }

    /**
     * @return {number}
     */
    const getLoadProgress = () => {
        const percentage = 100 * _progressData.loadedFiles / _progressData.totalFiles
        return utils.clamp(Math.round(percentage), 0, 100)
    }

    /**
     * @return {boolean}
     */
    const isReady = () => {
        return getLoadProgress() === 100
    }

    return {
        fetchData,
        getSettings,
        getNavbarData,
        getHeaderData,
        getFooterData,
        getSectionsData,
        getLegalData,
        getPolicyData,
        getLoadProgress,
        isReady
    }
}