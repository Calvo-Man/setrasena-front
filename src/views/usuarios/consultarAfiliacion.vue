<script setup></script>
<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Consultar estado de Afiliación</h1>
    </div>
    <div class="card-body text-center mt-5">
      <h5>
        Si quieres conocer el estado de tu solicitud de afiliación, por favor,
        ingresa a continuación el numero de tu documento de identidad.
      </h5>
      <h5>Por favor, digite su numero de documento:</h5>
    </div>
    <v-container class="mx-auto">
      <v-form @submit.prevent="fetchAfiliacionesByDocumento">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="documento"
              label="Documento"
              type="number"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="6">
            <v-btn type="submit" color="red-darken-3" :disabled="!documento">
              Consultar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <div class="card-body text-center mt-5">
          <div class="datos" v-if="items.length > 0">
          <h3>
              Datos de su solicitud de afiliación:
            </h3>
            <!-- 
          <p><strong>Nombre:</strong> {{ afiliacion.nombres }}</p>
          <p><strong>Apellidos:</strong> {{ afiliacion.apellidos }}</p>
          <p><strong>Documento:</strong> {{ afiliacion.documento }}</p>
          <p><strong>Email:</strong> {{ afiliacion.email }}</p>
          <p><strong>Telefono:</strong> {{ afiliacion.telefono }}</p>
          <p>
            <strong>Objeto Contractual:</strong>
            {{ afiliacion.objeto_contractual }}
          </p>
          <p><strong>Estado:</strong> {{ afiliacion.estado }}</p>
          -->
          
          <v-data-table
          :headers="headers"
          :items="items"
          item-key="name"
          hide-default-footer
          ></v-data-table>
        </div> 
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    documento: "",
    items: [],
    headers: [
      {
        title: "Documento",
        align: "start",
        key: "documento",
      },
      { title: "Nombre",  key: "nombres" },
      { title: "Apellidos",  key: "apellidos" },
      { title: "Telefono", key: "telefono" },
      { title: "Email",  key: "email" },
      { title: "Objeto contractual",  key: "objeto_contractual" },
      { title: "Estado", align: "end", key: "estado" },
    ],
  }),

  methods: {
    async fetchAfiliacionesByDocumento() {
      try {
        const response = await axios.get(
          `${this.API_Backend}/afiliado/${this.documento}`
        );
        this.items = [response.data];
        console.log(this.items);
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
