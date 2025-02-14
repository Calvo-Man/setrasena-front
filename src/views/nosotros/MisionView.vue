<template>
  <v-container>
    <!-- Tarjeta para la Misión -->
    <v-card class="mx-auto my-4" max-width="500">
      <v-card-title>
        <span class="headline">Misión</span>
      </v-card-title>
      <v-card-text class="mt-4">
        Nuestra misión es ofrecer programas educativos de alta calidad que respondan a las necesidades del entorno laboral y social, proporcionando a los estudiantes los conocimientos técnicos, habilidades y competencias necesarias para su éxito personal y profesional.
      </v-card-text>
    </v-card>

    <!-- Tarjeta para la Visión -->
    <v-card class="mx-auto my-4" max-width="500">
      <v-card-title>
        <span class="headline">Visión</span>
      </v-card-title>
      <v-card-text class="mt-4">
        Nuestra visión es ser una organización líder en la formación de profesionales altamente capacitados que transformen sus comunidades y el mundo laboral con sus conocimientos, habilidades y valores, contribuyendo al desarrollo sostenible y el bienestar social.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'VisionMisionCards',
};
</script>

<style scoped>
.v-card {
  margin: 20px auto;
  box-shadow: 10px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.v-card-title {
  background-color: var(--dark);
  color: white;
  padding: 16px;
  font-size: 1.5em;
  border-radius: 8px 8px 0 0;
}

.v-card-text {
  padding: 16px;
  font-size: 1.1em;
  color: #333;
}
</style>
