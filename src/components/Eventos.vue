<template>
  <v-card class="pa-3">
    <v-card-title class="text-center bg-black rounded">{{
      titulo
    }}</v-card-title>
    <h4 class="text-center mt-4">
      {{ descripcion }}
    </h4>
    <v-card
      v-for="(evento, index) in paginatedEventos"
      :key="index"
      :color="'red-darken-2'"
      class="ma-3 d-flex borde-card mx-auto"
    >
      <div class="d-flex  flex-column flex-md-row" >
        <!-- Imagen -->
        <div class="w-100 w-sm-100 w-lg-100 ">
          <v-img :src="`${evento.imagen}`" class="img-container" alt="Imagen del evento" cover></v-img>
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
              <p>{{ evento.hora }} a {{ evento.fin }}</p>
              <p>Evento {{ evento.modalidad }}: {{ evento.lugar }}</p>
              <p>{{ evento.ciudad }}</p>
            </div>
          </div>
          <div class="descripcion">
            <v-card-title class="text-body1">{{ evento.nombre }}</v-card-title>
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
    },
  },
  data() {
    return {
      page: 1, // Current page
      API_Backend: import.meta.env.VITE_API_BACKEND,
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
}
.ver-pdf {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.6rem;
  
  @media (max-width: 1024px) {
    right: 0px;
  }
  @media (max-width: 1215px) {
    left: 0;
    width: 150px;
  }
}
.img-container {
  width: 350px;

  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 959px) {
    width: 100vw;
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
