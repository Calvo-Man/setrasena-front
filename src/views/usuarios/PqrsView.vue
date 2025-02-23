<template>
  <div class="form-container mx-auto">
    <v-container class="mx-auto text-center bg-white rounded" width="600">
      <div class="bg-dark card-header">
        <h3 class="font-weight-black text-white mb-4">Formulario para PQRS</h3>
      </div>
      <v-form @submit.prevent="submit">
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
              v-model="apellido"
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
            <!-- Alerta de error si el mensaje contiene malas palabras -->
            <v-alert
              v-if="mensaje && isProfane"
              type="error"
              class="mt-2"
            >
              ¡Por favor, no uses malas palabras en tu mensaje!
            </v-alert>
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
import {Filter} from "bad-words";  // Importa la librería
import { listBadWords } from "@/assets/js/BadWordsList";



export default {
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    // Crear una instancia de la librería Filter
    filter: new Filter({ list: listBadWords }),
    name: "",
    apellido: "",
    email: "",
    telefono: "",
    regional: "",
    centro_formacion: "",
    mensaje: "",
    regionales: [],
    centros_formacion: [],
    nameRules: [(value) => !!value || "El nombre es requerido."],
    emailRules: [
      (value) => !!value || "El correo es requerido.",
      (value) => /.+@.+\..+/.test(value) || "El correo no es valido.",
    ],
    phoneRules: [(value) => !!value || "El telefono es requerido."],
    isProfane: false, // Variable para controlar el estado de malas palabras
    
  }),
  mounted() {
    this.fetchRegionales();
  },
  methods: {
    // Método para validar si el mensaje contiene malas palabras
    validateMessage() {
      this.isProfane = this.filter.isProfane(this.mensaje);
      
    },

    // Método de submit
    async submit() {
      // Evitar enviar el formulario si hay malas palabras
      if (this.isProfane) {
        alert("Por favor, no utilices malas palabras.");
        return; // Detener la ejecución del formulario
      }

      try {
        const response = await axios.post(`${this.API_Backend}/pqrs/crear`, {
          nombres: this.name,
          apellidos: this.apellido,
          email: this.email,
          telefono: this.telefono,
          regional: this.regional,
          centro: this.centro_formacion,
          asunto: this.mensaje,
        });
        alert("¡Registro exitoso!");
      } catch (error) {
        console.error(error);
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
            this.centros_formacion = regional.centros;
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    // Observer para detectar cambios en el mensaje en tiempo real
    mensaje() {
      this.validateMessage(); // Validar cada vez que el mensaje cambie
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
