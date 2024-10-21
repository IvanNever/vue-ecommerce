import { createApp } from 'vue';
import router from './infrastructure/router';
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import './assets/styles/main.scss';

import { initPublicContext } from '@/infrastructure/context';
import { initUserContext } from '@/users/infrastructure/context';

import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi'
  }
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

initPublicContext();
initUserContext();

app.mount('#app');
