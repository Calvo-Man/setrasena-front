<template>
  <v-card width="100%" class="pa-3">
    <v-card-title class="text-center bg-black rounded">{{
      titulo
    }}</v-card-title>
    <h4 class="text-center mt-4">
      {{ descripcion }}
    </h4>
    <v-card
  v-for="(evento, index) in paginatedEventos"
  :key="index"
  :color="isSelected ? 'white' : 'red-darken-2'"
  class="ma-3 d-flex borde-card mx-auto"
  height="auto"
  width="100%"
  @click="toggle"
>
  <div class="d-flex flex-column flex-md-row">
    <!-- Imagen -->
    <div class="w-100 w-md-33">
      <v-img :src="evento.imagen" height="200" cover></v-img>
    </div>
    <!-- Información -->
    <div class="d-flex flex-column w-100 w-md-66">
      <div class="info-date d-flex flex-column flex-md-row align-start align-md-center">
        <div class="day align-center">
          <p class="text-h3 text-white">{{ getDay(evento.fecha) }}</p>
        </div>
        <p class="month text-5">
          {{ getMonthAbbreviation(evento.fecha) }}
        </p>
        <p class="year text-5">{{ getYear(evento.fecha) }}</p>
        <div class="informacion">
          <p>{{ evento.ciudad }}</p>
          <p>{{ evento.fecha }}</p>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn class="material-icons bg-black ver-pdf">
            <span class="material-icons">visibility</span>
            <h3>Ver documento</h3>
          </v-btn>
        </div>
      </div>
      <div class="descripcion">
        <v-card-title class="text-body-1">{{ evento.nombre }}</v-card-title>
        <v-card-text class="text-body-2">
          {{ evento.descripcion }}
        </v-card-text>
      </div>
    </div>
  </div>
  <div class="d-flex fill-height justify-center"></div>
</v-card>


    <v-pagination
      v-model="page"
      :length="totalPages"
      rounded="0"
    ></v-pagination>
  </v-card>
</template>

<script>
import { h } from 'vue';

export default {
  name: "banner-eventos",
  props: {
    eventos: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    }
  },
  data() {
    return {
      page: 1, // Current page
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.eventos.length / 5);
    },
    // Paginate eventos based on the current page
    paginatedEventos() {
      const start = (this.page - 1) * 5;
      return this.eventos.slice(start, start + 5);
    },
  },

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
.borde-card {
  border: 1px solid black;
  position: relative;
  .ver-pdf {
    position: absolute;
    top: 10px;
    right: 0;
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
  }
  .year {
    margin-top: 10px;
    margin-right: 10px;
    margin-left: -10px;
    font-size: 1.5rem;
    letter-spacing: 3px;
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
