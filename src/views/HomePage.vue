<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row class="hero-section" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-bold mb-4 text-white">
          Urban Farming: Pertanian Modern di Lingkungan Anda
        </h1>
        <p class="text-subtitle-1 mb-6 text-white">
          Mulai bertanam sayuran segar tanpa perlu lahan luas
        </p>
        <v-btn
          color="white"
          text-color="green"
          size="large"
          to="/tanaman"
          class="px-6"
        >
          Mulai Bertanam
        </v-btn>
      </v-col>
    </v-row>

    <!-- Keunggulan Section -->
    <v-row class="my-8 pa-4">
      <v-col cols="12" class="text-center mb-6">
        <h2 class="text-h4">Kenapa Urban Farming?</h2>
      </v-col>

      <v-col
        v-for="(fitur, index) in fiturUnggulan"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card elevation="2" class="h-100 text-center pa-4" color="secondary">
          <v-icon size="64" color="white" class="mb-4">
            {{ fitur.icon }}
          </v-icon>
          <v-card-title>{{ fitur.judul }}</v-card-title>
          <v-card-text>
            {{ fitur.deskripsi }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Panduan Singkat Section -->
    <v-row class="langkah pa-6">
      <v-col cols="12" class="text-center mb-6">
        <h2 class="text-h4">Langkah Mudah Memulai</h2>
      </v-col>

      <v-col
        v-for="(langkah, index) in langkahMemulai"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card color="#eaeaea" class="h-100 d-flex flex-column" elevation="1">
          <v-card-title class="d-flex align-center">
            <v-chip color="green" text-color="white" class="mr-3">
              {{ index + 1 }}
            </v-chip>
            {{ langkah.judul }}
          </v-card-title>
          <v-card-text>
            {{ langkah.deskripsi }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fiturUnggulan: [
        {
          icon: "mdi-leaf",
          judul: "Pangan Sehat",
          deskripsi: "Hasilkan sayuran segar tanpa bahan kimia berbahaya",
        },
        {
          icon: "mdi-cash",
          judul: "Hemat Biaya",
          deskripsi: "Kurangi pengeluaran untuk membeli sayuran di pasar",
        },
        {
          icon: "mdi-earth",
          judul: "Ramah Lingkungan",
          deskripsi: "Kontribusi nyata untuk lingkungan dari rumah",
        },
      ],
      langkahMemulai: [
        {
          judul: "Pilih Tanaman",
          deskripsi:
            "Tentukan jenis sayuran yang ingin ditanam sesuai kondisi rumah",
        },
        {
          judul: "Siapkan Media",
          deskripsi: "Sediakan pot, polybag, atau lahan kecil di sekitar rumah",
        },
        {
          judul: "Rawat & Panen",
          deskripsi: "Lakukan perawatan rutin dan nikmati hasil panen sendiri",
        },
      ],
    };
  },
  mounted() {
    // Tambahkan style kustom untuk hero section
    const heroSection = this.$el.querySelector(".hero-section");
    if (heroSection) {
      heroSection.style.background = "secondary";
      heroSection.style.backgroundSize = "cover";
      heroSection.style.backgroundPosition = "center";
      heroSection.style.minHeight = "500px";
      heroSection.style.display = "flex";
      heroSection.style.alignItems = "center";
    }
  },
};
</script>

<style scoped>
.hero-section {
  transition: background 0.5s ease;
  background-color: #6d9773;
  color: white; /* Opsional: untuk warna teks */
}
.langkah {
  background-color: #6d9773;
  color: white; /* Opsional: untuk warna teks */
}
</style>
