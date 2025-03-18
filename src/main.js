import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: "md",
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 840,
      xl: 1280,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#00856F",
          background: "#FFFFFF",
          surface: "#FFFFFF",
          // Warna pendukung lainnya
          secondary: "#6D9773",
          accent: "#00A86B",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#00856F",
          background: "#121212",
          surface: "#1E1E1E",
          secondary: "#6D9773",
          accent: "#00A86B",
        },
      },
    },
  },
  defaults: {
    global: {
      font: {
        family: "Ubuntu, sans-serif",
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
