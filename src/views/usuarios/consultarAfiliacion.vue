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
            <v-btn
              type="submit"
              :loading="loading"
              color="red-darken-3"
              :disabled="!documento"
            >
              Consultar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <div class="card-body text-center mt-5">
        <div class="datos">
          <h3>
            {{ mensaje }}
          </h3>
          <v-data-table
            v-if="items.length > 0"
            :headers="headers"
            :items="items"
            item-key="documento"
            hide-default-footer
          >
            <template v-slot:item.estado="{ item }">
              <v-chip
                variant="outlined"
                :color="'success'"
                :text="item.estado"
              ></v-chip>
            </template>
          </v-data-table>
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
    loading: false,
    mensaje: "",
    headers: [
      {
        title: "Documento",
        align: "start",
        key: "documento",
      },
      { title: "Nombre", key: "nombres" },
      { title: "Apellidos", key: "apellidos" },
      { title: "Telefono", key: "telefono" },
      { title: "Email", key: "email" },
      { title: "Objeto contractual", key: "objeto_contractual" },
      { title: "Estado", align: "end", key: "estado" },
    ],
  }),

  methods: {
    async fetchAfiliacionesByDocumento() {
      try {
        this.loading = true;
        const response = await axios.get(
          `${this.API_Backend}/afiliado/documento/${this.documento}`
        );
        if (response.data) {
          this.items = [response.data];
          this.mensaje = "Datos de su solicitud de afiliación:";
        } else {
          this.items = [];
          this.mensaje =
            "No se encontraron datos de afiliación para el documento ingresado.";
        }
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
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

.v-btn {
  width: 100%;
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
