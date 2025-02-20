<script setup>
import ListCentros from "@/components/ListCentros.vue";
import listRegionales from "@/components/listRegionales.vue";
import ListBoletines from "@/components/ListBoletines.vue";
import ListComunicados from "@/components/ListComunicados.vue";
import ListFlash from "@/components/ListFlash.vue";
import ListEventos from "@/components/ListEventos.vue";
</script>
<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Panel de Administración</h1>
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
            <ListBoletines />
          </v-card>

          <!-- Formulario de Comunicado -->
          <v-card v-if="selectedForm === 'comunicado'">
            <ListComunicados />
          </v-card>

          <!-- Formulario de Flash Informativo -->
          <v-card v-if="selectedForm === 'flash'">
            <ListFlash />
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
      { value: "boletin", nombre: "Boletín" },
      { value: "comunicado", nombre: "Comunicado" },
      { value: "flash", nombre: "Flash Informativo" },
      { value: "eventos", nombre: "Eventos" },
      { value: "regional", nombre: "Regional" },
      { value: "centroFormacion", nombre: "Centro de Formación" },
    ],
    regionales: [],
  }),
  mounted() {
    this.fetchRegionales();
  },

  methods: {
    async SaveRegional() {
      if (!this.regional) {
        console.log("Debe llenar el campo");
        return;
      }
      try {
        const response = await axios.post(
          `${this.API_Backend}/regional/crear`,
          {
            nombre: this.regional,
          }
        );
        alert("Registration successful!");
      } catch (error) {
        console.error(error);
        alert("Error registering Regional");
      }
    },
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
  width: 80%;
  margin: 20px auto;
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
