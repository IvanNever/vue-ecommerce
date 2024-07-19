import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './infrastructure/router'
import { initPublicContext } from '@/infrastructure/context'
import { initUserContext } from './user/infrastructure/context'

const app = createApp(App)

app.use(createPinia())
app.use(router)

initPublicContext()
initUserContext()

app.mount('#app')
