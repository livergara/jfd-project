import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ganttastic from '@infectoone/vue-ganttastic'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ganttastic)

app.mount('#app')
