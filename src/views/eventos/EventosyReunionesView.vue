<template>
    <v-card width="100%" class="pa-3">
      <v-card-title class="text-center bg-black rounded">Eventos y Reuniones SETRASENA</v-card-title>
      <v-card
        v-for="(evento, index) in paginatedEventos"
        :key="index"
        :color="isSelected ? 'white' : 'red-darken-2'"
        class="ma-3  d-flex borde-card mx-auto"
        height="200"
        width="100%"
        @click="toggle"
      >
        <div class="w-33">
          <v-img :src="evento.imagen" height="200" cover></v-img>
        </div>
        <div>
          <div class="info-date d-flex">
            <div class="day align-center">
              <p class="text-h3 text-white">{{ getDay(evento.fecha) }}</p>
            </div>
            <p class="month text-5">
              {{ getMonthAbbreviation(evento.fecha) }}
            </p>
            <div class="informacion">
              <p>{{ evento.inicio }} a {{ evento.fin }}</p>
              <p>{{ evento.tipo_evento }}: {{ evento.lugar }}</p>
              <p>{{ evento.ciudad }}</p>
            </div>
          </div>
          <div class="descripcion">
            <v-card-title class="text-body-1">{{ evento.nombre }}</v-card-title>
            <v-card-text class="text-body-2">{{ evento.descripcion }}</v-card-text>
          </div>
        </div>
        <div class="d-flex fill-height justify-center"></div>
      </v-card>
  
      <v-pagination v-model="page" :length="totalPages" rounded="0"></v-pagination>
    </v-card>
  </template>
  
  <script>
  import imagen1 from "@/assets/imagen1.jpeg";
  import imagen2 from "@/assets/imagen2.jpeg";
  
  export default {
    name: "banner-eventos",
  
    data() {
      return {
        page: 1, // Pagina actual
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
          {
            nombre: "Asamblea general de trabajo",
            imagen: imagen1,
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
            lugar: "Microsoft teams", // Fixed duplicate "lugar"
            ciudad: "Medellín, Colombia",
          },
          {
            nombre: "Asamblea general de trabajo",
            imagen: imagen1,
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
            lugar: "Microsoft teams", // Fixed duplicate "lugar"
            ciudad: "Medellín, Colombia",
          },
        ],
      };
    },
  
    computed: {
      totalPages() {
        return Math.ceil(this.eventos.length / 5);
      },
      // Paginate eventos based on the current page
      paginatedEventos() {
        const start = (this.page - 1) * 3;
        return this.eventos.slice(start, start + 5);
      },
    },
  
    methods: {
      // Método para obtener el día de la fecha
      getDay(date) {
        const d = new Date(date);
        return d.getDate();
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
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .borde-card {
    border: 1px solid black;
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
      margin-left: -14px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem; /* Ajusta el tamaño de la fuente según lo necesites */
      letter-spacing: 8px; /* Ajusta el espacio entre las letras */
    }
    .informacion {
      border-left: 1px solid rgb(10, 10, 10);
      padding-left: 6px;
      height: 70%;
  
      margin-top: 10px;
      p {
        font-size: 0.7rem;
      }
    }
  
    .align-center {
      display: flex; /* Usamos flexbox para centrar */
      justify-content: center;
      align-items: center;
    }
  }
  .descripcion {
    padding: 10px;
    width: 100%;
    p {
      font-size: 0.9rem;
    }
  }
  </style>
  