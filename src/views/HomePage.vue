<script setup>

import BannerEventos from "@/components/BannerEventos.vue";


</script>

<template>
  <v-card class="mt-0 bg-black" width="1000">
    <v-carousel
      show-arrows="hover"
      cycle
      hide-delimiter-background
      height="300"
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-img :src="slide.image" alt="Slide Image" cover />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-divider></v-divider>
    <v-card-title>
      Eventos recientes SETRASENA
    </v-card-title>
    <BannerEventos/>
    <v-banner color="red-darken-3" icon="mdi-account-box" lines="two">
      <template v-slot:prepend>
        <v-avatar></v-avatar>
      </template>

      <v-banner-text class="font-weight-bold">
        ¿Quieres estar afiliado al sindicato de empleados y trabajadores del
        sena SETRASENA? <br />
        Da click en el boton a continuación, llena el formulario y comenzaremos
        los tramites.
      </v-banner-text>

      <v-banner-actions>
        <v-btn to="/afiliacion" class="bg-red-darken-3" color="white"
          >Afiliate aqui</v-btn
        >
      </v-banner-actions>
    </v-banner>

    <v-card-title id="introduccion">
      Introducción sobre los sindicatos
    </v-card-title>
    <v-card class="pa-4">
      <v-card-text class="text-body-1">
        Desde la creación del congreso obrero permanente en 1876, como
        iniciativa de constitución de sindicatos, hasta el año 2023, la lucha
        sindical ha sido la misma, aunque los contextos sean diferentes, la
        persecución y el exterminio de los líderes sociales y sindicales en
        Colombia se ha incrementado gradualmente, al punto de ostentar los
        primeros puestos entre los países con las más altas tasas de crímenes de
        líderes sociales, activistas y sindicales. Los exterminios y sus
        estadísticas no muestran la persecución, el encarcelamiento y las
        amenazas de muerte a los líderes sindicales, aspectos que determinan la
        mitigación del ejercicio del liderazgo sindical.
      </v-card-text>
      <v-card-text class="text-body-1">
        Todos los factores antes mencionados, han ocasionado una diáspora
        sindical, como en ningún país del mundo. Tales acciones han sido
        utilizadas como método de presión, para eliminar a los sindicatos como
        contradictores de clase y de esta forma, el establecimiento ha
        beneficiado a empresarios nacionales y transnacionales, desarrollando en
        forma combinada todo un proceso de cooptación de dirigentes, con el
        objetivo de someter las justas y democráticas luchas de los trabajadores
        colombianos.
      </v-card-text>
      <v-card-text class="text-body-1">
        Por otra parte, entre los países con mejores Índices de Desarrollo
        Humano y a menudo citados como ejemplos de calidad de vida, los países
        nórdicos (Dinamarca, Finlandia, Noruega, Islandia y Suecia), sociedades
        con buenos niveles de educación y garantía de derechos para su
        población. No se trata de las economías más poderosas del planeta, ni
        las de mayor Producto Bruto per cápita. Sin embargo, los países nórdicos
        se encuentran en los primeros lugares en los rankings de Desarrollo
        Humano, así como del Índice de Felicidad realizado por las Naciones
        Unidas y cuentan con sindicatos fuertes, negociaciones colectivas y los
        niveles de sindicalización más altos del mundo.
      </v-card-text>
      <v-card-text class="text-body-1">
        Otra ventaja es el elogiado sistema educativo de Finlandia, las
        licencias por maternidad de 46 semanas de Noruega y en general los
        servicios públicos de calidad de todos estos países suelen ser motivo de
        comentarios en nuestro país y alrededor del mundo.
      </v-card-text>
      <v-card-text class="text-body-1">
        Históricamente, los cinco países nórdicos tienen la tasa de afiliación
        sindical más alta del mundo. El primero en el ranking es Islandia, con
        90 % de sus trabajadores afiliados a algún sindicato. Luego siguen
        Dinamarca (67%), Suecia (65%), Finlandia (58%) y Noruega (50%), de
        acuerdo con las estadísticas de la OCDE (2019).
      </v-card-text>
    </v-card>
    <v-card-title id="nosotros">
      Sobre nosotros
    </v-card-title>
    <v-card class="pa-4">
      <v-card-text class="text-body-1">
        SETRASENA como organización representante de los empleados y
        trabajadores del SENA y consciente de la situación de nuestra entidad,
        sigue luchando desde una plataforma propositiva, para que se continúe
        ejecutando directamente la formación profesional integral, gratuita y
        con calidad al servicio del pueblo colombiano. Nuestra organización con
        firmeza lucha por mejorar las condiciones laborales y los derechos
        económicos, políticos, sociales, culturales y ambientales de los
        trabajadores del SENA, teniendo como pilares los principios originales
        del proletariado mundial y una plataforma de lucha acorde con los
        análisis de la realidad mundial y nacional.
      </v-card-text>
      <v-card-text class="text-body-1"
        >SETRASENA, compromete la experiencia de sus dirigentes sindicales,
        fogueados y con conocimiento de la situación nacional y mundial, con
        vocación y espíritu de lucha al servicio de la causa de los trabajadores
        y el pueblo colombiano.</v-card-text
      >
    </v-card>
  </v-card>
</template>

<script>
import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg";
import imagen3 from "@/assets/imagen3.jpeg";
import BannerEventos from "@/components/BannerEventos.vue";
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
          descripcion:
            "lorem ipsum dolor sit amet consectetur adipisicinge voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
          fecha: "2022-12-31",
          lugar: "Centro de industria",
          ciudad: "Bogotá, Colombia",
        },
        {
          image: imagen2,
          nombre: "Asamblea nacional",
          descripcion: "Descripción del evento 2",
          detalle:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
          fecha: "2022-12-31",
          lugar: "Centro de industria",
          ciudad: "Medellin, Colombia",
        },
        {
          image: imagen3,
          nombre: "Evento 3",
          descripcion: "Descripción del evento 3",
          fecha: "2022-12-31",
          lugar: "Centro de industria",
          cuidad: "Bogotá, Colombia",
        },
        {
          image: imagen1,
          nombre: "Evento 4",
          descripcion: "Descripción del evento 4",
          fecha: "2022-12-31",
          lugar: "Centro de industria",
          ciudad: "Cali, Colombia",
        },
        {
          image: imagen2,
          nombre: "Evento 5",
          descripcion: "Descripción del evento 5",
          fecha: "2022-12-31",
          lugar: "Centro de industria",
          ciudad: "Nueva York, Estados Unidos",
        },
        {
          image: imagen3,
          nombre: "Evento 6",
          descripcion: "Descripción del evento 6",
          fecha: "2022-12-31",
          lugar: "Centro de industria",
          ciudad: "Monterrey, Mexico",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
