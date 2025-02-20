<template>
  <v-card class="mx-auto bg-black" width="1000">
    <v-carousel
      show-arrows="hover"
      cycle
      hide-delimiter-background
      height="250"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-img :src="slide.image" alt="Slide Image" cover />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-divider></v-divider>
    <v-card-title class="mt-4">
      Eventos recientes
    </v-card-title>

    <v-sheet class="mx-auto" max-width="1000">
      <v-slide-group v-model="model" class="pa-4 bg-grey-lighten-4" center-active show-arrows>
        <v-slide-group-item
          v-for="n in eventos.length"
          :key="n"
          v-slot="{ isSelected, toggle }"
        > 
          <v-card
            :color="isSelected ? 'red-darken-2' : 'white'"
            class="ma-4"
            height="250"
            width="250"
            @click="toggle"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              height="100"
              cover
            ></v-img>
            <v-card-text class="text-body-1">{{ eventos[n - 1].nombre }}</v-card-text>
            <v-card-subtitle>Ciudad: {{ eventos[n - 1].ciudad }}</v-card-subtitle>
            <v-card-subtitle>Lugar: {{ eventos[n - 1].lugar }}</v-card-subtitle>
            <v-card-subtitle>Fecha: {{ eventos[n - 1].fecha }}</v-card-subtitle>
            <div class="d-flex fill-height justify-center">
              
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
      <v-expand-transition>
        <v-sheet v-if="model != null" height="200">
          <div class="d-flx fill-height text-center justify-center pa-4">
          <v-card-title>{{ eventos[model].nombre }}</v-card-title>
          
          <v-card-text class="text-body-1">{{ eventos[model].descripcion }}</v-card-text>
          <v-card-subtitle>Fecha: {{ eventos[model].fecha }}</v-card-subtitle>
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
    
  </v-card>
</template>

<script>
import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg";
import imagen3 from "@/assets/imagen3.jpeg";
export default {
  data() {
    return {
      bannerImages: [imagen1, imagen2, imagen3],
      model: null,
      slides: [
        {
          image: imagen1,
        },
        {
          image: imagen2,
        },
        {
          image: imagen3,
        },
      ],
      eventos: [
        {
          image: imagen1,
          nombre: "Asamblea general de trabajo",
          descripcion: "lorem ipsum dolor sit amet consectetur adipisicinge voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
          fecha: "2022-12-31",
          lugar:"Centro de industria",
          ciudad: "Bogotá, Colombia",
        },
        {
          image: imagen2,
          nombre: "Asamblea nacional",
          descripcion: "Descripción del evento 2",
          detalle: "lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
          fecha: "2022-12-31",
          lugar:"Centro de industria",
          ciudad: "Medellin, Colombia",                          
        },
        {
          image: imagen3,
          nombre: "Evento 3",
          descripcion: "Descripción del evento 3",
          fecha: "2022-12-31",
          lugar:"Centro de industria",
          cuidad: "Bogotá, Colombia",
        },
        {
          image: imagen1,
          nombre: "Evento 4",
          descripcion: "Descripción del evento 4",
          fecha: "2022-12-31",
          lugar:"Centro de industria",
          ciudad: "Cali, Colombia",
        },
        {
          image: imagen2,
          nombre: "Evento 5",
          descripcion: "Descripción del evento 5",
          fecha: "2022-12-31",
          lugar:"Centro de industria",
          ciudad: "Nueva York, Estados Unidos",
        },
        {
          image: imagen3,
          nombre: "Evento 6",
          descripcion: "Descripción del evento 6",
          fecha: "2022-12-31",
          lugar:"Centro de industria",
          ciudad: "Monterrey, Mexico",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
