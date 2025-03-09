<template>
  <div class="navbar">
    <v-carousel :show-arrows="false" hide-delimiters cycle height="100%" class="logo-container">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        class="logo"
      ></v-carousel-item>
    </v-carousel>
    <!-- <img src="@/assets/banner.png" alt="icono personalizado" class="logo" /> -->
  </div>
</template>

<script>
import image1 from "@/assets/banner.png";
import image2 from "@/assets/fsm-logo.png";
import image3 from "@/assets/fenaltrase.png";

export default {
  data() {
    return {
      items: [{ src: image1 }, { src: image2 }, { src: image3 }],
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: var(--light);
  color: var(--dark);
  padding: 5px;
  display: flex;

  align-items: center; /* Centra la imagen verticalmente */
  text-align: center;
  position: fixed;

  width: 100%; /* Asegura que el navbar ocupe el 100% del ancho */
  z-index: 9;
  @media (max-width: 1024px) {
    justify-content: center;
  }
}
.logo-container {
  margin-left: calc(40% - 100px);
  width: 250px;
  @media (max-width: 1024px) {
    margin-left: 10px;
  }
  @media (max-width: 600px) {
    margin-left: 90px;
  }

}
.logo {
  width: 200px; /* Puedes ajustar el tamaño de la imagen */
  height: 50px;
  
  
}
</style>
