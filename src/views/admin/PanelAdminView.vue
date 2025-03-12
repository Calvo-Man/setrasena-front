<script setup>
import ListCentros from "@/components/ListCentros.vue";
import listRegionales from "@/components/listRegionales.vue";
import ListEventos from "@/components/ListEventos.vue";
import ListAfiliaciones from "@/components/ListAfiliaciones.vue";
import PanelPublicaciones from "@/components/PanelPublicaciones.vue";
</script>
<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Panel de Administración</h1>
    </div>
    <div class="card-body text-center mt-5">
      <h3>Bienvenido al panel de administración del SETRASENA</h3>
      <h5>Aqui podrás gestionar los boletines, comunicados, flash informativos, eventos y reuniones, afiliaciones, regionales y centros de formación.</h5>
      <h5>Por favor, selecciona una opción para comenzar:</h5>
    </div>
    <v-container class="mx-auto">
      <v-row>
        <!-- Botones para mostrar los formularios -->
        <v-col cols="12" sm="12" class="mb-0">
          <v-select
            v-model="selectedForm"
            label="Seleccione una opción"
            :items="opciones"
            item-title="nombre"
            item-value="value"
            required
          />
        </v-col>

        <!-- Columna para mostrar el formulario correspondiente -->
        <v-col cols="12">
          <!-- Formulario de Boletín -->
          <v-card v-if="selectedForm === 'boletin'">
            <PanelPublicaciones :tipo_publicacion="'Boletín'" />
          </v-card>

          <!-- Formulario de Comunicado -->
          <v-card v-if="selectedForm === 'comunicado'">
            <PanelPublicaciones :tipo_publicacion="'Comunicado'" />
          </v-card>

          <!-- Formulario de Flash Informativo -->
          <v-card v-if="selectedForm === 'flash'">
            <PanelPublicaciones :tipo_publicacion="'flash informativos'"  />
          </v-card>

          <!-- Formulario de Eventos -->
          <v-card v-if="selectedForm === 'eventos'">
            <ListEventos />
          </v-card>

          <!-- Formulario de Regional -->
          <v-card v-if="selectedForm === 'regional'">
            <listRegionales />
          </v-card>

          <!-- Formulario de Centro de Formación -->
          <v-card v-if="selectedForm === 'centroFormacion'">
            <ListCentros :regionales="regionales" />
          </v-card>

          <!-- Formulario de Afiliaciones -->
          <v-card v-if="selectedForm === 'afiliaciones'">
            <ListAfiliaciones />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    selectedForm: "",
    opciones: [
      { value: "boletin", nombre: "Boletínes" },
      { value: "comunicado", nombre: "Comunicados" },
      { value: "flash", nombre: "Flash Informativos" },
      { value: "eventos", nombre: "Eventos y Reuniones" },
      { value: "afiliaciones", nombre: "Afiliaciones" },
      { value: "regional", nombre: "Regionales" },
      { value: "centroFormacion", nombre: "Centros de Formación" },
    ],
    regionales: [],
    
  }),
  mounted() {
    this.fetchRegionales();
  },

  methods: {
    
    setForm(form) {
      this.selectedForm = form;
    },
    async fetchRegionales() {
      try {
        const response = await axios.get(`${this.API_Backend}/regional`);
        this.regionales = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card-header {
  background-color: var(--dark);
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
}

.card-title {
  font-size: 1.8em;
  margin: 0;
}

.opcion-panel {
  border-right: 1px solid black;
}

.v-btn {
  width: 100%;
}

.v-card {
  margin-bottom: 20px;
}

.v-form {
  display: flex;
  flex-direction: column;
}

.v-textarea,
.v-text-field {
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
