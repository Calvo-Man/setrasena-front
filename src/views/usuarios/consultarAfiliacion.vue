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
      <div class="card-body text-center mt-5" v-if="afiliacion">
        <h3>
          Datos de su solicitud de afiliación:
        </h3>
        
          <h4>
            Nombre: {{ afiliacion.nombres }}
          </h4>
          <h4>
            Apellido: {{ afiliacion.apellidos }}
          </h4>
          <h4>
            Documento: {{ afiliacion.documento }}
          </h4>
          <h4>Email: {{ afiliacion.email }}</h4>
          <h4>Telefono: {{ afiliacion.telefono }}</h4>
          <h4>
            Objeto contractual: {{ afiliacion.objeto_contractual }}
          </h4>
          <h4>
            Estado: {{ afiliacion.estado }}
          </h4>
          
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
    afiliacion: null,
  }),

  methods: {
    async fetchAfiliacionesByDocumento() {
      try {
        const response = await axios.get(
          `${this.API_Backend}/afiliado/${this.documento}`
        );
        this.afiliacion = response.data;
        console.log(this.afiliacion);
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
