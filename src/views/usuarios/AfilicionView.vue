<template>
  <div class="form-container mx-auto">
    <v-container class="mx-auto text-center bg-white rounded" width="100%">
      <h3 class="font-weight-black text-dark mb-4">Formulario de Afiliación</h3>
      <h3 class="font-weight-black text-white bg-dark mb-4">
        Datos Personales
      </h3>
      <v-form validate-on="submit lazy" @submit.prevent="crearAfiliado">
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
              label="Numero telefónico de contacto"
              :rules="phoneRules"
              type="number"
              required
            />
          </v-col>
        </v-row>
        <v-row>
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
            <v-select
              v-model="objeto_contractual"
              label="Objeto contractual"
              :items="objeto_contractual_options"
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
              v-model="regional"
              @update:model-value="fecthCentrosDeRegionales"
              label="Seleccione una regional"
              :items="regionales"
              item-title="nombre"
              item-value="id"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="centro_formacion"
              label="Seleccione el centro de formacion"
              :items="centros"
              item-title="nombre"
              item-value="id"
              required
            />
          </v-col>
         
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="fecha_ingreso"
              label="Fecha de ingreso"
              type="date"
              :rules="dateRules"
              required
            />
          </v-col>
          <v-col cols="12" sm="6" v-if="objeto_contractual !== 'Planta'">
            <v-text-field
              v-model="fecha_salida"
              label="Fecha de terminación"
              type="date"
              :rules="dateRules"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" v-if="objeto_contractual !== 'Planta'">
            <v-text-field
              v-model="numero_contrato"
              label="Numero de contrato"
              :rules="contratoRules"
              required
            />
          </v-col>  
        </v-row>
        <v-row v-if="objeto_contractual === 'Planta'">
          <v-col cols="8" sm="7">
            <v-text-field
              v-model="cargo"
              label="Cargo"
              :rules="positionRules"
              required
            />
          </v-col>
          <v-col cols="4" sm="5">
            <v-text-field
              v-model="grado"
              label="Grado"
              :rules="degreeRules"
              required
            />
          </v-col>
        </v-row>
        <v-row v-if="objeto_contractual === 'Planta'">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="dependencia"
              label="Dependencia"
              :rules="dependencyRules"
              type="text"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="isInCareer"
              label="Inscrito en carrera administrativa"
              :items="yesNoOptions"
              item-title="text"
              item-value="value"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              required
            />
          </v-col>
        </v-row>
        <v-row v-if="objeto_contractual === 'Planta'">
          <v-col cols="12" sm="6">
            <v-select
              v-model="isPublicEmployee"
              label="Empleado público"
              :rules="[(v) => !!v || 'Debe seleccionar una opción']"
              :items="yesNoOptions"
              item-title="text"
              item-value="value"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="isOfficialWorker"
              label="Trabajador oficial"
              :items="yesNoOptions"
              item-title="text"
              item-value="value"
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
    email: "",
    fecha_ingreso: "",
    cargo: "",
    grado: "",
    regional: "",
    numero_contrato:"",
    centro_formacion: "",
    dependencia: "",
    salario: "",
    objeto_contractual: "",
    isInCareer: null,
    isPublicEmployee: null,
    isOfficialWorker: null,
    acceptedTerms: false,
    
    yesNoOptions: [{ text: "Sí", value: true }, { text: "No", value: false }],
    objeto_contractual_options:["Planta","Contrato","Prestación de servicios"],
    regionales:[],
    centros:[],

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
    dependencyRules: [(value) => !!value || "Dependencia es requerida."],
    salaryRules: [(value) => !!value || "Asignación básica es requerida."],
  }),
  mounted(){
    this.fetchRegionales()
  },

  methods: {
    crearAfiliado() {
      if (
        !this.nombre ||
        !this.apellido ||
        !this.fecha_nacimiento ||
        !this.lugar_nacimiento ||
        !this.idNumber ||
        !this.phone ||
        !this.email ||
        !this.fecha_ingreso ||
        !this.cargo ||
        !this.grado ||
        !this.regional ||
        !this.centro_formacion ||
        !this.dependencia ||
        !this.salario  
      ) {
        return;
      }
      // Validar el formulario
      if (!this.acceptedTerms) {
        alert("Debe aceptar los términos para continuar.");
        return;
      }
      const formData = {
        nombres: this.nombre,
        apellidos: this.apellido,
        documento: this.idNumber,
        fecha_nacimiento: this.fecha_nacimiento,
        lugar_nacimiento: this.lugar_nacimiento,
        telefono: this.phone,
        email: this.email,
        honorario_mensual: this.salario,
        objeto_contractual: this.objeto_contractual,
        fecha_ingreso_sena: this.fecha_ingreso,
        cargo: this.cargo,
        grado: this.grado,
        dependencia: this.dependencia,
        inscrito_carrera_admin: this.isInCareer,
        empleado_publico: this.isPublicEmployee,
        trabajador_oficial: this.isOfficialWorker,
        regional: this.regional,
        centro: this.centro_formacion
      };
      try {
        const response = axios.post(`${this.API_Backend}/afiliado/crear`, formData);
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
    async fecthCentrosDeRegionales(id_regional) {
      if (!this.regionales) {
        alert("Debe seleccionar una regional");
        return;
      }
      this.centro_formacion="";
      try {
        this.regionales.forEach((regional) => {
          if (regional.id == id_regional) {
            this.centros=regional.centros;
          }
        });
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
