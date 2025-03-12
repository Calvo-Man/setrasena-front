<template>
  <v-card  class="pa-3">
    <v-card-title class="text-center bg-black rounded">{{
      titulo
    }}</v-card-title>
    <h4 class="text-center mt-4">
      {{ descripcion }}
    </h4>
    <v-card
      v-for="(evento, index) in paginatedpublicaciones"
      :key="index"
      :color="'red-darken-2'"
      class="ma-3 d-flex borde-card mx-auto"
    >
      <div class="d-flex  flex-column flex-md-row">
        <!-- Imagen -->
        <div class="w-100 w-sm-100 w-lg-100 ">
          <v-img :src="`${API_Backend}/${evento.imagen}`"   class="img-container" alt="Imagen del evento" ></v-img>
        </div>
        <!-- Información -->
        <div class="d-flex flex-column ">
          <div
            class="info-date d-flex"
          >
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
            
            <div>
              <v-btn
                class="material-icons bg-black ver-pdf"
                :href="`${API_Backend}/${evento.documento}`"
                target="_blank"
              >
                <span class="material-icons">visibility</span>
                <h3>Ver documento</h3>
              </v-btn>
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
import axios from "axios";
export default {
  name: "banner-publicaciones",
  props: {
    tipo: {
      type: String,
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
      publicaciones: [],
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.publicaciones.length / 5);
    },
    // Paginate publicaciones based on the current page
    paginatedpublicaciones() {
      const start = (this.page - 1) * 5;
      return this.publicaciones.slice(start, start + 5);
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

    async getPublicaciones() {
      try {
        const response = await axios.get(`${this.API_Backend}/publicacion/tipo/${this.tipo}`);
        this.publicaciones = response.data;
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
      }
    },
  },
  created() {
    this.getPublicaciones();
    this.publicaciones.sort(
        (a, b) => new Date(b.fecha) - new Date(a.fecha)
      )
  },
};
</script>

<style lang="scss" scoped>
.borde-card {
  border: 1px solid black;
  position: relative;
  .ver-pdf {
    position: absolute;
    top: 0px;
    right: 0;
    font-size: 0.6rem;
  }
}
.img-container {
  width: 400px;
  @media (max-width: 1215px) {
    width: 350px;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 1100px) {
    width: 250px;
  }
  @media (max-width: 1050px) {
    width: 220px;
  }
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
  padding: 0px;
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 75%;
  }
  

}
</style>
