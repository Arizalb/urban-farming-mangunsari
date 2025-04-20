<template>
  <v-footer color="green-darken-2" dark class="footer-custom">
    <v-container fluid>
      <v-row>
        <!-- Kolom Pertama: Tentang Kami -->
        <v-col cols="12" md="4">
          <div class="d-flex align-center mb-4">
            <v-icon color="white" size="large" class="mr-3">
              mdi-sprout
            </v-icon>
            <h2 class="text-h5 font-weight-bold">Urban Farming</h2>
          </div>

          <p class="text-body-2 mb-4">
            Misi kami adalah memberdayakan masyarakat melalui pertanian
            perkotaan yang berkelanjutan dan inovatif.
          </p>

          <div class="social-icons">
            <v-btn
              v-for="social in socialMedia"
              :key="social.name"
              icon
              variant="text"
              class="mx-2"
              :href="social.link"
              target="_blank"
            >
              <v-icon color="white">{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Kolom Kedua: Kontributor -->
        <v-col cols="12" md="4">
          <h3 class="text-h6 mb-4 font-weight-bold">Kontributor</h3>

          <v-list
            color="transparent"
            class="contributor-list pa-0"
            bg-color="transparent"
          >
            <v-list-item
              v-for="(contributor, index) in contributors"
              :key="index"
              class="px-0 mb-2"
            >
              <template v-slot:prepend>
                <v-avatar color="green-lighten-1" size="40" class="mr-3">
                  <v-icon color="white">{{ contributor.icon }}</v-icon>
                </v-avatar>
              </template>

              <v-list-item-title class="font-weight-medium">
                {{ contributor.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Kolom Ketiga: Kontak -->
        <v-col cols="12" md="4">
          <h3 class="text-h6 mb-4 font-weight-bold">Kontak Kami</h3>

          <v-list
            color="transparent"
            class="contributor-list pa-0"
            bg-color="transparent"
          >
            <v-list-item
              v-for="(contact, index) in contacts"
              :key="index"
              class="px-0 mb-2"
            >
              <template v-slot:prepend>
                <v-icon color="white" class="mr-3">
                  {{ contact.icon }}
                </v-icon>
              </template>

              <v-list-item-title>
                {{ contact.info }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Garis Pembatas -->
      <v-divider color="white" class="my-4"></v-divider>

      <!-- Copyright -->
      <v-row>
        <v-col class="text-center">
          <p class="text-caption">
            &copy; {{ new Date().getFullYear() }} Urban Farming PKK Mangunsari.
            Hak Cipta Dilindungi.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialMedia: [
        {
          name: "Facebook",
          icon: "mdi-facebook",
          link: "#",
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          link: "https://instagram.com/kelurahan_mangunsari",
        },
        {
          name: "Twitter",
          icon: "mdi-twitter",
          link: "#",
        },
      ],
      contributors: [
        {
          name: "Kelurahan Mangunsari",
          icon: "mdi-domain",
        },
        {
          name: "PKK Mangunsari",
          icon: "mdi-account-group",
        },
        {
          name: "KKN Universitas IVET 2025",
          icon: "mdi-school",
        },
      ],
      contacts: [
        {
          info: "Gunungpati, Semarang, Jawa Tengah",
          icon: "mdi-map-marker",
        },
        {
          info: "024 76922083",
          icon: "mdi-phone",
        },
        {
          info: "mangunsarihebat@gmail.com",
          icon: "mdi-email",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-custom {
  background-color: #00856f !important; /* Warna primary yang Anda tentukan sebelumnya */
  background: #00856f !important; /* Override gradient sebelumnya */
  transition: all 0.3s ease;
}

.contributor-list .v-list-item,
.contact-list .v-list-item {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

/* .contributor-list .v-list-item:hover,
.contact-list .v-list-item:hover {
  opacity: 1;
  transform: translateX(10px);
} */

.social-icons .v-btn {
  transition: transform 0.3s ease;
}

/* .social-icons .v-btn:hover {
  transform: scale(1.2);
} */
</style>
