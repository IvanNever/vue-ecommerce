import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './infrastructure/router'
import { initEntityContext } from '@/entity/infrastructure/context'
import { initPublicContext } from '@/infrastructure/context'

const app = createApp(App)

app.use(createPinia())
app.use(router)

initPublicContext()
initEntityContext()

app.mount('#app')
