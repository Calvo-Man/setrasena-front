<template>
  <v-card class="mx-auto" width="100%" height="100%" >
    <v-card-title class="text-center bg-blck mb-4">
      Subdirectivas y comites seleccionados
    </v-card-title>
    <v-card class="mb-4" elevation="0">
      <v-card-title class="headline  title bg-black mb-4"
        >Subdirectivas</v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col
            v-for="(item, index) in subdirectivas"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card>
              <v-card-title class="text-body-1">{{ item.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mb-4" elevation="0">
      <v-card-title class="headline  title bg-black mb-4"
        >Comites seleccionados</v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col
            v-for="(item, index) in comites"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card>
              <v-card-title class="text-body-1">{{ item.name }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card-title class="headline  title bg-black mb-4"
        >Mapa de regionales</v-card-title
      >
    <v-img
      height="100%"
      lazy-src="https://picsum.photos/id/11/100/60"
      width="100%"
      :src="bannerImage"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
  </v-card>
</template>
<script>
import banner from "@/assets/RegionalesMap.jpeg";

export default {
  data() {
    return {
      bannerImage: banner,
      subdirectivas: [
        { name: "CORDOBA" },
        { name: "BOLIVAR" },
        { name: "BOGOTA - CUNDINAMARCA" },
        { name: "ATLANTICO" },
        { name: "HUILA" },
        { name: "SANTANDER" },
        { name: "NORTE DE SANTANDER" },

        { name: "CESAR" },
        { name: "ORINOQUIA (META Y CASANARE)" },
      ],
      comites: [
        { name: "SAN ANDRES ISLAS" },
        { name: "ARAUCA" },
        { name: "TOLIMA" },
        { name: "BOYACA" },
       
      ],
    };
  },
};
</script>
