import './scss/style.scss'
import 'bootstrap/dist/js/bootstrap.js'
import {createApp, reactive} from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import {AgencyManager} from "./classes/AgencyManager.js"

import App from './App.vue'
import Home from './vue/pages/Home.vue'
import SecondaryPage from './vue/pages/SecondaryPage.vue'

const agencyManager = reactive(new AgencyManager())

agencyManager.init().then(r => {
    const routeList = [
        {
            path: "/",
            name: "home",
            component: Home,
            label: "Home",
            faIcon: "fa-solid fa-home",
            props: {agencyManager}
        },

        {
            path: "/policy",
            name: "policy",
            component: SecondaryPage,
            label: "Privacy Policy",
            faIcon: "fa-solid fa-hammer",
            props: {navbarData: agencyManager.navbarData, contentData:agencyManager.privacyPolicyData, footerData:agencyManager.footerData}
        },

        {
            path: "/license",
            name: "license",
            component: SecondaryPage,
            label: "License",
            faIcon: "fa-solid fa-copy",
            props: {navbarData: agencyManager.navbarData, contentData:agencyManager.legalData, footerData:agencyManager.footerData}
        },

        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes: routeList
    })

    createApp(App, {agencyManager}).use(router).mount('#app')
})
