<template>
  <v-sheet class="mx-auto" max-width="100%">
    <v-slide-group
      v-model="model"
      class="pa-4 bg-grey-lighten-"
      center-active
      show-arrows
    >
      <v-slide-group-item v-for="(evento, index) in eventos" :key="index">
        <v-card :color="'red-darken-2'" class=" ma-2 d-flex border-card">
          <div class="d-flex  flex-column flex-md-row">
            <!-- Imagen -->
            <div class="w-100 w-sm-100 w-lg-100 ">
              <v-img :src="evento.imagen" height="200" cover></v-img>
            </div>
            <!-- Información -->
            <div class="d-flex flex-column ">
              <div class="info-date d-flex">
                <div class="day align-center">
                  <p class="text-h3 text-white">{{ getDay(evento.fecha) }}</p>
                </div>
                <p class="month text-5">
                  {{ getMonthAbbreviation(evento.fecha) }}
                </p>
                <p class="year text-5">{{ getYear(evento.fecha) }}</p>
                <div class="informacion">
                  <p>{{ evento.inicio }} a {{ evento.fin }}</p>
                  <p>{{ evento.tipo_evento }}: {{ evento.lugar }}</p>
                  <p>{{ evento.ciudad }}</p>
                </div>
              </div>
              <div class="descripcion">
                <v-card-title class="text-body1">{{
                  evento.nombre
                }}</v-card-title>
                <v-card-text class="text-body-2">
                  {{ evento.descripcion }}
                </v-card-text>
              </div>
            </div>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg";
export default {
  name: "banner-eventos",

  data: () => ({
    model: null,
    eventos: [
      {
        nombre: "Asamblea general de trabajo",
        imagen: "/img/imagen1.jpeg",
        descripcion:
          "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
        fecha: "2022-12-31",
        inicio: "9:00 a.m",
        fin: "10:00 a.m",
        tipo_evento: "Evento presencial",
        lugar: "Circunavalar 27,Centro de industria y turismo",
        ciudad: "Monteria, Cordóba",
      },
      {
        nombre: "Asamblea nacional",
        imagen: imagen2,
        descripcion:
          "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
        fecha: "2022-01-15",
        inicio: "10:00 a.m",
        fin: "12:00 p.m",
        tipo_evento: "Evento virtual",
        lugar: "Microsoft teams",
        ciudad: "Medellín, Colombia",
      },
    ],
  }),
  methods: {
    // Método para obtener el día de la fecha
    getDay(date) {
      const d = new Date(date);
      return d.getDate() + 1;
    },
    // Método para obtener la abreviación del mes
    getMonthAbbreviation(date) {
      const months = [
        "ENE",
        "FEB",
        "MAR",
        "ABR",
        "MAY",
        "JUN",
        "JUL",
        "AGO",
        "SEP",
        "OCT",
        "NOV",
        "DIC",
      ];
      const d = new Date(date);
      return months[d.getMonth()];
    },
    getYear(date) {
      const d = new Date(date);
      return d.getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.border-card {
  border: 1px solid black;
  position: relative;
  @media (max-width: 870px) {
    width: 600px;
  }
  @media (max-width: 700px) {
   width: 500px;
  
 }
 @media (max-width: 600px) {
   width: 480px;
  
 }
  @media (max-width: 430px) {
    width: 400px;
  }
  .ver-pdf {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 0.6rem;
  }
}

.info-date {
  height: 70px;
  width: 470px;

  .day {
    background-color: var(--dark);
    height: 90%;
    width: 70px;
  }

  .month {
    transform: rotate(270deg); /* Rotar el contenedor */
    height: 60px;
    width: 80px;
    margin-left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem; /* Ajusta el tamaño de la fuente según lo necesites */
    letter-spacing: 8px; /* Ajusta el espacio entre las letras */
    @media (max-width: 500px) {
      margin-left: -20px;
    }
  }
  .year {
    margin-top: 10px;
    margin-right: 5px;
    margin-left: -10px;
    font-size: 1.5rem;
    letter-spacing: 3px;
    @media (max-width: 500px) {
      margin-left: -20px;
    }
  }
  .informacion {
    border-left: 1px solid rgb(10, 10, 10);
    padding-left: 6px;
    height: 70%;

    margin-top: 10px;
    p {
      font-size: 0.7rem;
    }
    @media (max-width: 500px) {
      width: 50%;
    }
    @media (max-width: 430px) {
      width: 45%;
    }
    @media (max-width: 370px) {
      width: 35%;
      margin-bottom: 80px;
    }
  }

  .align-center {
    display: flex; /* Usamos flexbox para centrar */
    justify-content: center;
    align-items: center;
  }
}
.descripcion {
  padding: 0px;
  margin-top: 10px;
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 75%;
  }
}
</style>
