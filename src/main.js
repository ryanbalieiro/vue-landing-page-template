import './scss/style.scss'
import {useData} from "./composables/data.js"
import {createAppRouter} from "./router/router.js"
import {createApp} from "vue"
import App from './vue/core/App.vue'

const data = useData()

data.fetchData().then(r => {
    const router = createAppRouter()
    createApp(App).use(router).mount('#app')
})