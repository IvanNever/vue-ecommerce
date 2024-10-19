import { createApp } from 'vue';
import router from './infrastructure/router';
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { initPublicContext } from '@/infrastructure/context';
import { initUserContext } from './user/infrastructure/context';

import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

initPublicContext();
initUserContext();

app.mount('#app');
