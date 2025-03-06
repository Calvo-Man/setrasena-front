<template>
  <BannerAfiliacion/>
  <v-footer class="d-flex flex-column">
    <div
      class="d-flex w-100 align-center px-4 text-white"
      style="background-color: var(--dark);"
    >
      <strong>Nuestras Redes Sociales!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon.icon"
        :href="icon.href"
        target="_blank"
        class="mx-4"
        size="small"
        variant="plain"
        
      ></v-btn>
    </div>

    <div class="px-4 py-2 text-center w-100">
      <img src="@/assets/banner.png" alt="icono personalizado" class="logo" />
      <div class="text-whit">
        <strong
          >SINDICATO DE EMPLEADOS Y TRABAJADORES DEL SENA JUNTA NACIONAL</strong
        >
        <p>Registro Sindical N° 002178 de diciembre 26 de 2003</p>
        <p>NIT. 802023705</p>
      </div>
    </div>
  </v-footer>
</template>
<script>
import BannerAfiliacion from './BannerAfiliacion.vue';

export default {
  name: "FooterView",
  components: {BannerAfiliacion},
  data: () => ({
    icons: [{icon:"mdi-facebook",href:"https://www.facebook.com/setrasenabol/"}, {icon:"mdi-twitter",href:"https://x.com/SetrasenaJnal"}, "mdi-linkedin", "mdi-instagram"],
    hrefs: ["https://www.facebook.com/setrasenabol/", "twitter", "linkedin", "instagram"],
  }),
};
</script>
