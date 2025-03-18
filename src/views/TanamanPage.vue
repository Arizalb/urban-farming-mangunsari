<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center mb-6">
        <h1 class="text-h4">Katalog Tanaman Urban Farming</h1>
        <p class="text-subtitle-1">Temukan tanaman yang cocok untuk Anda</p>
      </v-col>

      <!-- Filter dan Pencarian -->
      <v-col cols="12" class="mb-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="search"
              label="Cari Tanaman"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="selectedKategori"
              :items="uniqueCategories"
              label="Kategori"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="selectedTingkatKesulitan"
              :items="uniqueDifficulties"
              label="Tingkat Kesulitan"
              variant="outlined"
              clearable
            ></v-select>
          </v-col>
        </v-row>
      </v-col>

      <!-- Grid Tanaman -->
      <v-col
        v-for="tanaman in filteredTanaman"
        :key="tanaman.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card elevation="2" class="h-100 d-flex flex-column">
          <v-img :src="tanaman.imageUrl" cover height="250">
            <v-chip
              style="background-color: #eaeaea; color: white"
              color="primary"
              text-color="white"
              class="ma-2"
            >
              {{ tanaman.category }}
            </v-chip>
          </v-img>

          <v-card-title>{{ tanaman.name }}</v-card-title>

          <v-card-subtitle>
            <v-icon small color="primary" class="mr-1"> mdi-sprout </v-icon>
            Kesulitan: {{ tanaman.difficulty }}
          </v-card-subtitle>

          <v-card-text class="flex-grow-1">
            {{ tanaman.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="showDetailTanaman(tanaman)"
            >
              Detail Tanaman
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal Detail Tanaman -->
    <v-dialog v-model="dialogDetail" max-width="600">
      <v-card v-if="selectedTanaman">
        <v-img :src="selectedTanaman.imageUrl" height="300" cover></v-img>

        <v-card-title>{{ selectedTanaman.name }}</v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="6">
              <strong>Kategori:</strong> {{ selectedTanaman.category }}
            </v-col>
            <v-col cols="6">
              <strong>Tingkat Kesulitan:</strong>
              {{ selectedTanaman.difficulty }}
            </v-col>

            <v-col cols="12" class="mt-4">
              <h3 class="text-h6 mb-2">Deskripsi</h3>
              <p>{{ selectedTanaman.description }}</p>
            </v-col>

            <v-col cols="12">
              <h3 class="text-h6 mb-2">Cara Penanaman</h3>
              <v-list density="compact">
                <v-list-item
                  v-for="(langkah, index) in selectedTanaman.plantingSteps"
                  :key="index"
                >
                  <v-list-item-title>
                    {{ index + 1 }}. {{ langkah }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>

            <v-col cols="12">
              <h3 class="text-h6 mb-2">Waktu Panen</h3>
              <p>{{ selectedTanaman.harvestTime }}</p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" variant="text" @click="dialogDetail = false">
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import plantsData from "../data/plants.json";

export default {
  data() {
    return {
      daftarTanaman: plantsData.plants.map((tanaman) => {
        const imageName = tanaman.name.toLowerCase().replace(/\s+/g, "-");
        return {
          ...tanaman,
          imageUrl: `/images/${imageName}.jpg`,
        };
      }),
      search: "",
      selectedKategori: null,
      selectedTingkatKesulitan: null,
      dialogDetail: false,
      selectedTanaman: null,
    };
  },
  computed: {
    uniqueCategories() {
      return [
        ...new Set(this.daftarTanaman.map((tanaman) => tanaman.category)),
      ];
    },
    uniqueDifficulties() {
      return [
        ...new Set(this.daftarTanaman.map((tanaman) => tanaman.difficulty)),
      ];
    },
    filteredTanaman() {
      return this.daftarTanaman.filter((tanaman) => {
        const matchSearch =
          !this.search ||
          tanaman.name.toLowerCase().includes(this.search.toLowerCase());

        const matchKategori =
          !this.selectedKategori || tanaman.category === this.selectedKategori;

        const matchKesulitan =
          !this.selectedTingkatKesulitan ||
          tanaman.difficulty === this.selectedTingkatKesulitan;

        return matchSearch && matchKategori && matchKesulitan;
      });
    },
  },
  methods: {
    showDetailTanaman(tanaman) {
      this.selectedTanaman = tanaman;
      this.dialogDetail = true;
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease;
}
.v-card:hover {
  transform: scale(1.05);
}
</style>
