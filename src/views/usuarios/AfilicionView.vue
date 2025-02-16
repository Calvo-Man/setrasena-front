<template>
  <div class="form-container mx-auto">
    <v-container class="mx-auto text-center bg-white rounded" width="55vw">
      <h3 class="font-weight-black text-dark mb-4">Formulario de Afiliación</h3>
      <h3 class="font-weight-black text-white bg-dark mb-4">
        Datos Personales
      </h3>

      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <!-- Datos personales -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="nombre"
              label="Nombre(s)"
              :rules="nameRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="apellido"
              label="Apellido(s)"
              :rules="nameRules"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="fecha_nacimiento"
              label="Fecha de nacimiento"
              type="date"
              :rules="dobRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lugar_nacimiento"
              label="Lugar de nacimiento"
              :rules="placeRules"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="idNumber"
              label="Cédula de ciudadanía No."
              :rules="idRules"
              type="number"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="phone"
              label="Teléfono particular"
              :rules="phoneRules"
              type="number"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="mobile"
              label="Teléfono móvil"
              type="number"
              :rules="mobileRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              label="E-mail"
              :rules="emailRules"
              type="email"
              required
            />
          </v-col>
        </v-row>

        <!-- Datos laborales -->
        <h3 class="font-weight-black text-white bg-dark mb-4">
          Datos Laborales
        </h3>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="fecha_ingreso"
              label="Fecha de ingreso al Sena"
              type="date"
              :rules="dateRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="cargo"
              label="Cargo"
              :rules="positionRules"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="grado"
              label="Grado"
              :rules="degreeRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="regionalSelected"
              label="Regional"
              :items="regionales"
              item-title="nombre"
              item-value="id"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="departamento"
              label="Dependencia"
              :rules="departmentRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="salario"
              label="Asignación básica mensual"
              :rules="salaryRules"
              type="number"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="isInCareer"
              label="Inscrito en carrera administrativa"
              :items="careerOptions"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="isPublicEmployee"
              label="Empleado público"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              :items="yesNoOptions"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="isOfficialWorker"
              label="Trabajador oficial"
              :items="yesNoOptions"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-checkbox
              v-model="acceptedTerms"
              :rules="[
                (v) => !!v || 'Debe aceptar los términos para continuar',
              ]"
              label="De la manera más atenta me permito solicitarles mi admisión como afiliado a esta Organización Sindical, conforme lo consagra el Artículo 5º de los Estatutos, comprometiéndome a cumplir fielmente los mismos. De igual forma autorizo a la Junta Directiva para que tramite ante la Oficina de Nómina de Gestión Humana del SENA, el descuento correspondiente al 1% de mi asignación básica mensual a favor de SETRASENA, conforme lo consagran los Artículos 45, 46 y 47 de los Estatutos, en armonía con el Artículo 39 de la Constitución Política de Colombia..."
              required
            >
            </v-checkbox>
          </v-col>
        </v-row>
        <!-- Botón de submit -->
        <v-btn class="mt-8 text-blue-lighten-4 bg-black" type="submit">
          Enviar Datos
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
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
    lugar_nacimiento: "",
    idNumber: "",
    phone: "",
    mobile: "",
    email: "",
    fecha_ingreso: "",
    cargo: "",
    grado: "",
    regional: "",
    departamento: "",
    salario: "",
    isInCareer: null,
    isPublicEmployee: null,
    isOfficialWorker: null,
    acceptedTerms: false,
    careerOptions: ["Sí", "No"],
    yesNoOptions: ["Sí", "No"],
    regionales:[],

    nameRules: [(value) => !!value || "Nombre es requerido."],
    dobRules: [(value) => !!value || "Fecha de nacimiento es requerida."],
    placeRules: [(value) => !!value || "Lugar de nacimiento es requerido."],
    idRules: [(value) => !!value || "Cédula es requerida."],
    phoneRules: [(value) => !!value || "Teléfono es requerido."],
    mobileRules: [(value) => !!value || "Teléfono móvil es requerido."],
    emailRules: [
      (value) => !!value || "Correo electrónico es requerido.",
      (value) =>
        /.+@.+\..+/.test(value) || "Correo electrónico debe ser válido.",
    ],
    dateRules: [(value) => !!value || "Fecha de ingreso es requerida."],
    positionRules: [(value) => !!value || "Cargo es requerido."],
    degreeRules: [(value) => !!value || "Grado es requerido."],
    regionalRules: [(value) => !!value || "Regional es requerido."],
    departmentRules: [(value) => !!value || "Dependencia es requerida."],
    salaryRules: [(value) => !!value || "Asignación básica es requerida."],
  }),
  mounted(){
    this.fetchRegionales()
  },

  methods: {
    submit() {
      if (
        !this.nombre ||
        !this.apellido ||
        !this.fecha_nacimiento ||
        !this.lugar_nacimiento ||
        !this.idNumber ||
        !this.phone ||
        !this.mobile ||
        !this.email ||
        !this.fecha_ingreso ||
        !this.cargo ||
        !this.grado ||
        !this.regional ||
        !this.departamento ||
        !this.salario ||
        !this.isInCareer ||
        !this.isPublicEmployee ||
        !this.isOfficialWorker
      ) {
        alert("Todos los campos son obligatorios.");
        return;
      }
      // Validar el formulario
      if (!this.acceptedTerms) {
        alert("Debe aceptar los términos para continuar.");
        return;
      }
      const formData = {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha_nacimiento: this.fecha_nacimiento,
        lugar_nacimiento: this.lugar_nacimiento,
        idNumber: this.idNumber,
        phone: this.phone,
        mobile: this.mobile,
        email: this.email,
        fecha_ingreso: this.fecha_ingreso,
        cargo: this.cargo,
        grado: this.grado,
        regional: this.regional,
        departamento: this.departamento,
        salario: this.salario,
        isInCareer: this.isInCareer,
        isPublicEmployee: this.isPublicEmployee,
        isOfficialWorker: this.isOfficialWorker,
      };
      try {
        const response = axios.post(`${this.API_Backend}/afilicion`, formData);
        alert("Datos enviados correctamente");
      } catch (error) {
        if (error.response.status === 400) {
          alert("Error al enviar los datos.");
        }
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
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: var(--dark);
}

/* Ajustes de margen y padding en pantallas pequeñas */
@media (max-width: 600px) {
  .form-container {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
