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
  import store from "@/store";
  
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
        // try {
        //   const response = await axios.post(`${import.meta.env.VITE_API_BACKEND}/auth/login`, {
        //   email: this.email,
        //   password: this.password,
        // })

        // this.$store.commit('setUser', response.data)

        // this.$notify({ text: 'Login exitoso', type: 'success' })
        await store.dispatch('login')

        this.$router.push({ path: '/admin' })
      // } catch (error) {
      //   if (error.response.data.message === 'Incorrect password') {
      //     //this.$notify({ text: 'Contraseña incorrecta', type: 'error' })
      //     this.passwordError = 'Contraseña incorrecta'
      //   } else if (error.response.data.message === 'Invalid credentials') {
      //     //this.$notify({ text: 'El usuario no existe', type: 'error' })
      //     this.emailError = 'El usuario no existe'
      //   } else if (error.request) {
      //     //  console.error('Sin respuesta del servidor:', error.request)
      //   } else {
      //     // console.error('Error en la solicitud:', error.message)
      //   }
      //   //console.error('Configuración completa del error:', error.config)
      // }
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
  