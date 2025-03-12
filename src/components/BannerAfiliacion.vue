<template>
    <v-banner
      color="red-darken-3"
      icon="mdi-account-box"

    >
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
</template>