import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
  components,
  directives,
  theme: {
    // defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          background: '#ECEFF1',
          surface: '#CFD8DC',
          'on-background': '#212121',
          'on-surface': '#000000'
        }
      },
      dark: {
        colors: {
          background: '#263238',
          surface: '#37474F',
          'on-background': '#E0E0E0',
          'on-surface': '#EEEEEE'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi'
  }
});
