<template>
  <div class="form-container mx-auto">
    <v-container class="mx-auto text-center bg-white rounded" width="550">
      <div class="bg-dark card-header">
        <h3 class="font-weight-black text-white mb-4">Formulario para PQRS</h3>
      </div>
      <v-form @submit.prevent="register">
        <!-- Fila para el nombre y apellido -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="name"
              label="Nombre"
              :rules="nameRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastName"
              label="Apellido"
              :rules="nameRules"
              required
            />
          </v-col>
        </v-row>

        <!-- Fila para el correo y teléfono -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              label="Correo electronico"
              :rules="emailRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="tel"
              v-model="telefono"
              label="Telefono"
              :rules="phoneRules"
              required
            />
          </v-col>
        </v-row>

        <!-- Fila para el select de regionales y centro de formación -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="regional"
              @update:model-value="fecthCentrosDeRegionales"
              label="Regional"
              :items="regionales"
              item-title="nombre"
              item-value="id"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="centro_formacion"
              label="Centro de formación"
              :items="centros_formacion"
              item-title="nombre"
              item-value="id"
              required
            />
          </v-col>
        </v-row>

        <!-- Fila para el campo de texto -->
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="mensaje"
              label="Escribe aquí"
              hint="Describe tu peticion PQRS aqui"
              persistent-hint
              rows="4"
              required
            />
          </v-col>
        </v-row>

        <!-- Botón de submit -->
        <v-btn class="mt-8 text-blue-lighten-4 bg-black" type="submit">
          Generar PQRS
        </v-btn>
        <h5 class="text-disabled mt-4">
          SETRASENA UN SINDICATO COMPROMETIDO EN LA LUCHA CONTRA LA CORRUPCION
          <br />
          Bogotá, Carrera 7 N°34-50
        </h5>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    name: "",
    apellido: "",
    email: "",
    telefono: "",
    regional: "",
    centro_formacion: "",
    mensaje: "",
    regionales: [],
    centros_formacion: [],

    nameRules: [(value) => !!value || "Name is required."],
    emailRules: [
      (value) => !!value || "E-mail is required.",
      (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
    ],
    phoneRules: [(value) => !!value || "Phone is required."],
  }),
  mounted() {
    this.fetchRegionales();
  },
  computed: {},

  methods: {
    async register() {
      try {
        const response = await axios.post(`${this.API_Backend}/auth/register`, {
          name: this.name,
          apellido: this.apellido,
          email: this.email,
          telefono: this.telefono,
          regional: this.regional,
          centro_formacion: this.centro_formacion,
          mensaje: this.mensaje,
        });
        alert("Registration successful!");
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.error(error);
        alert("Error registering user");
      }
    },
    async fetchRegionales() {
      try {
        const response = await axios.get(`${this.API_Backend}/regional`);
        this.regionales = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fecthCentrosDeRegionales(id_regional) {
      if (!this.regionales) {
        alert("Debe seleccionar una regional");
        return;
      }
      try {
        this.regionales.forEach((regional) => {
          if (regional.id == id_regional) {
            this.centros_formacion=regional.centros;
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.bg-dark {
  background-color: var(--dark);
}
.card-header {
  background-color: var(--dark);
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
}
/* Ajustes de margen y padding en pantallas pequeñas */
@media (max-width: 600px) {
  .form-container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
