/** Created by Ryan Balieiro on 11/24/2022 **/
import './scss/style.scss'
import 'bootstrap/dist/js/bootstrap.js'
import {createApp, reactive} from 'vue'
import App from './App.vue'
import {AgencyManager} from "./classes/AgencyManager.js"

const agencyManager = reactive(new AgencyManager())

agencyManager.init().then(r => {
    const props = {agencyManager}
    createApp(App, props).mount("#app")
})
