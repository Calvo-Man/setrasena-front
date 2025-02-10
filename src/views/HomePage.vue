<template>
    <div class="container">
      <v-carousel
        show-arrows="hover"
        cycle
        hide-delimiter-background
        height="200"
        width="100%"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%">
            <v-img
              :src="slide.image"
              alt="Slide Image"
                 
              contain
              class="full-img"
            />
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  
  <script>
  import imagen1 from "@/assets/imagen1.jpeg";
  import imagen2 from "@/assets/imagen2.jpeg";
  import imagen3 from "@/assets/imagen3.jpeg";
  export default {
    data() {
      return {
        
        bannerImages: [imagen1, imagen2, imagen3],
        slides: [
          {
            image: imagen1,
              
          },
          {
            image:imagen2
          },
          {
            image:imagen3
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    width: 50vw;
    background-color: blue;
  }
  
  .full-img {
    object-fit: cover; /* La imagen cubre completamente el área del carrusel */
    
  }
  </style>
  