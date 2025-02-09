<template>
  <div class="form-container mx-auto">
    <v-container class="mx-auto text-center bg-white rounded" width="500">
      <h3 class="font-weight-black text-dark mb-4">Formulario para PQRS</h3>
      <v-form fast-fail submit.prevent>
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
              type="number"
              v-model="age"
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
              label="Regional"
              :items="regionales"
              item-title="regional_name"
              item-value="id"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="centro_formacion"
              label="Centro de formación"
              :items="regionales"
              item-title="regional_name"
              item-value="id"
              required
            />
          </v-col>
        </v-row>

        <!-- Fila para el campo de texto -->
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="texto"
              label="Escribe aquí"
              hint="Describe tu peticion PQRS aqui"
              persistent-hint
              rows="4"
              required
            />
          </v-col>
        </v-row>

        <!-- Botón de submit -->
        <v-btn
          class="mt-8 text-blue-lighten-4 bg-black"
          type="submit"
          @click="register"
        >
          Generar
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "",
    apellido: "",
    email: "",
    telefono: "",
    regional: "",
    password: "",
    confirmPassword: "",
    regionales: [
      {
        id: 1,
        regional_name: "Regional Norte",
      },
      {
        id: 2,
        regional_name: "Regional Sur",
      },
      {
        id: 3,
        regional_name: "Regional Este",
      },
      {
        id: 4,
        regional_name: "Regional Oeste",
      },
      {
        id: 5,
        regional_name: "Regional Centro",
      },
    ],

    nameRules: [(value) => !!value || "Name is required."],
    ageRules: [(value) => !!value || "Age is required."],
    weightRules: [(value) => !!value || "Weight is required."],
    heightRules: [(value) => !!value || "Height is required."],
    emailRules: [
      (value) => !!value || "E-mail is required.",
      (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
    ],
    passwordRules: [
      (value) => !!value || "Password is required.",
      // value => value.length >= 8 || 'Password must be at least 8 characters.',
      // value => /(?=.*[A-Z])/.test(value) || 'Password must contain at least one uppercase letter.',
      // value => /(?=.*[0-9])/.test(value) || 'Password must contain at least one number.',
      // value => /(?=.*[!@#$%^&*])/.test(value) || 'Password must contain at least one special character.',
    ],
    confirmPasswordRules: [
      (value) => !!value || "Confirm Password is required.",
      //value => value === this.password || 'Passwords do not match.',
    ],
  }),
  methods: {
    async register() {
      const numericAge = parseInt(this.age, 10);
      const numericHeight = parseInt(this.height, 10);
      const numericWeight = parseInt(this.weight, 10);

      try {
        // Lógica para el registro de usuario
        await axios.post(`http://localhost:3000/auth/register`, {
          name: this.name,
          age: numericAge,
          height: numericHeight,
          weight: numericWeight,
          email: this.email,
          password: this.password,
          role: 1,
        });
        alert("Registration successful!");
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
        alert("Error registering user");
      }
    },
  },
};
</script>
<style scoped>


/* Ajustes de margen y padding en pantallas pequeñas */
@media (max-width: 600px) {
  .form-container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>

