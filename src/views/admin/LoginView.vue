<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8 mt-12"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <img src="@/assets/banner.png" alt="icono personalizado" class="logo" />
      <div class="text-subtitle-1 text-medium-emphasis">Correo:</div>

      <!-- Formulario de inicio de sesión -->
      <form @submit.prevent="submit">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Contraseña

          <!-- <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Olvidaste tu contraseña?
          </a> -->
        </div>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Introduce tu contraseña"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          type="submit"
          :loading="loading"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          Iniciar Sesión
        </v-btn>
      </form>

      <h5 class="text-disabled mt-4">
        SETRASENA UN SINDICATO COMPROMETIDO EN LA LUCHA CONTRA LA CORRUPCION
        <br />
        Bogotá, Carrera 7 N°34-50
      </h5>
    </v-card>

    <!-- SnackBar para mostrar mensajes -->
    <SnackBar
      :text="snackbarText"
      :color="snackbarColor"
      v-model:snackbar="snackbar"
    />
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
import SnackBar from "@/components/SnackBar.vue";

export default {
  components: {
    SnackBar,
  },
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    email: "",
    password: "",
    snackbar: false,
    snackbarText: "",
    loading: false,
    snackbarColor: "green", // Color verde por defecto (para éxitos)
    visible: false, // Control para mostrar/ocultar la contraseña
    emailRules: [
      (value) => !!value || "El correo es requerido.",
      (value) => /.+@.+\..+/.test(value) || "El correo no es válido.",
    ],
    passwordRules: [(value) => !!value || "La contraseña es requerida."],
  }),

  computed: {
    // isFormValid() {
    //   return (
    //     this.email &&
    //     this.password &&
    //     !this.$refs.email.hasError &&
    //     !this.$refs.password.hasError
    //   );
    // },
  },

  methods: {
    async submit() {
      try {
        // Llamar a la acción 'login' del store (si es necesario autenticar por API)
        // await store.dispatch("login", {
        //   email: this.email,
        //   password: this.password,
        // });

        // Si el login es exitoso, mostrar SnackBar y redirigir
        this.snackbarText = "Inicio de sesión exitoso";
        this.snackbarColor = "green";
        

        // Redirigir al usuario después de un breve delay
        await store.dispatch("login");

        this.snackbar = true;
        setTimeout(() => {
          this.$router.push({ path: "/admin" });
        }, 1000);
      } catch (error) {
        // Si ocurre un error en el login, mostrar un error en SnackBar
        this.snackbarText =
          "Error al iniciar sesión. Verifica tus credenciales.";
        this.snackbarColor = "red";
        this.snackbar = true;
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
}

.form-item {
  justify-content: center;
  align-items: center; /* Centra la imagen verticalmente */
}

@media (max-width: 600px) {
  .form-container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
