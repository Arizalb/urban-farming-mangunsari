<template>
  <v-app :theme="theme" class="bg-grey-lighten-4">
    <!-- Navbar -->
    <NavBar @theme-changed="updateTheme" />

    <!-- Konten utama -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue"; // Import Footer

export default {
  components: {
    NavBar,
    Footer, // Tambahkan ke daftar komponen
  },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    updateTheme(newTheme) {
      this.theme = newTheme;
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      this.theme = savedTheme;
    }
  },
};
</script>
