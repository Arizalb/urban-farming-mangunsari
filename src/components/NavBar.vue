<template>
  <v-app-bar color="primary" elevation="2">
    <!-- Logo di pojok kiri -->
    <template v-slot:prepend>
      <v-avatar class="ml-2" size="35">
        <v-img :src="logoSrc" alt="Logo Urban Farming"></v-img>
      </v-avatar>
    </template>

    <!-- Tombol sidebar hanya muncul di mobile -->
    <v-app-bar-nav-icon
      v-show="$vuetify.display.mobile"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="ml-4">Urban Farming</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Navigasi desktop -->
    <template v-if="!$vuetify.display.mobile">
      <v-btn text to="/">Beranda</v-btn>
      <v-btn text to="/tanaman">Tanaman</v-btn>
      <v-btn text to="/tentang">Tentang</v-btn>
    </template>
  </v-app-bar>

  <!-- Sidebar hanya untuk mobile -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="left"
    v-show="$vuetify.display.mobile"
  >
    <v-list>
      <v-list-item to="/" prepend-icon="mdi-home">
        <v-list-item-title>Beranda</v-list-item-title>
      </v-list-item>
      <v-list-item to="/tanaman" prepend-icon="mdi-sprout">
        <v-list-item-title>Tanaman</v-list-item-title>
      </v-list-item>
      <v-list-item to="/tentang" prepend-icon="mdi-information">
        <v-list-item-title>Tentang</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import logoPath from "../data/images/logo.png";
export default {
  data() {
    return {
      logoSrc: logoPath,
      drawer: false,
      theme: "light",
    };
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      this.theme = newTheme;
      this.$emit("theme-changed", newTheme);
      localStorage.setItem("app-theme", newTheme);
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      this.theme = savedTheme;
      this.$emit("theme-changed", savedTheme);
    }
  },
  watch: {
    $route() {
      this.drawer = false;
    },
  },
};
</script>
