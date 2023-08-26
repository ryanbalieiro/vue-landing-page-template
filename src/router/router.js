/**
 * Created by Ryan Balieiro on 08.26.2023
 * Main router.
 */
import {createRouter, createWebHistory} from "vue-router"

import HomePage from '../vue/pages/HomePage.vue'
import SecondaryPage from '../vue/pages/SecondaryPage.vue'
import {useData} from "../composables/data.js"

const data = useData()

export function createAppRouter() {
    const routeList = [
        {
            path: "/",
            name: "home",
            component: HomePage,
            label: "Home",
            faIcon: "fa-solid fa-home"
        },

        {
            path: "/policy",
            name: "policy",
            component: SecondaryPage,
            label: "Privacy Policy",
            faIcon: "fa-solid fa-hammer",
            props: {contentData: data.getPolicyData()}
        },

        {
            path: "/license",
            name: "license",
            component: SecondaryPage,
            label: "License",
            faIcon: "fa-solid fa-copy",
            props: {contentData: data.getLegalData()}
        },

        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]

    return createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: routeList
    })
}