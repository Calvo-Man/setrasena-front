<template>
    <div class="form-container mx-auto mt-10">
      <v-container class="mx-auto text-center bg-white rounded" width="100%">
        <img src="@/assets/banner.png" alt="icono personalizado" class="logo" />
        <div class="bg-dark card-header">
          <h3 class="font-weight-black text-white mb-4">Iniciar sesión como administrador</h3>
        </div>
        <v-form @submit.prevent="submit" class="form-item">
          <!-- Fila para el correo y teléfono -->
          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                v-model="email"
                label="Correo electrónico"
                :rules="emailRules"
                required
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                type="password"
                v-model="password"
                label="Contraseña"
                :rules="passwordRules"
                required
              />
            </v-col>
          </v-row>
  
          <!-- Botón de submit -->
          <v-btn class="mt-8 text-blue-lighten-4 bg-black" type="submit">
            Iniciar sesión
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
      email: "",
      password: "",
      emailRules: [
        (value) => !!value || "El correo es requerido.",
        (value) => /.+@.+\..+/.test(value) || "El correo no es valido.",
      ],
      passwordRules: [
        (value) => !!value || "La contraseña es requerida.",
      ],
    }),
  
    methods: {
      async submit() {
        try {
        //   const response = await axios.post(`${this.API_Backend}/pqrs/crear`, {
            
        //     email: this.email,
        //     password:this.password
            
        //   });
          alert("Login exitoso");
          this.$router.push({ name: 'home' });
        } catch (error) {
          console.error(error);
          alert("Hubo un error al iniciar sesión");
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
  