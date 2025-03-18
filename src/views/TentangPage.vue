<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 mb-4">Tentang Urban Farming</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="2" class="pa-4" color="secondary">
          <v-card-title>Misi Kami</v-card-title>
          <v-card-text>
            Urban Farming bertujuan membantu masyarakat perkotaan untuk mulai
            bercocok tanam di rumah, menyediakan pangan sehat dan mengurangi
            ketergantungan pada pasar.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="2" class="pa-4" color="secondary">
          <v-card-title>Kenapa Urban Farming?</v-card-title>
          <v-list bg-color="secondary">
            <v-list-item class="px-4 py-2">
              <v-list-item-icon class="mr-4">
                <v-icon color="white">mdi-leaf</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-white">
                Pangan Sehat
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="px-4 py-2">
              <v-list-item-icon class="mr-4">
                <v-icon color="white">mdi-cash</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-white">
                Hemat Biaya
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="px-4 py-2">
              <v-list-item-icon class="mr-4">
                <v-icon color="white">mdi-earth</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-white">
                Ramah Lingkungan
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" class="text-center mb-4">
        <v-btn color="accent" to="/tanaman" size="large">
          Mulai Bertanam
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
