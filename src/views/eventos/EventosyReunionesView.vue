<template>
  <Eventos
    :eventos="eventos"
    :titulo="'Eventos y reuniones SETRASENA'"
    :descripcion="
      'Consulta todos nuestros eventos y reuniones en esta sección, y mantente informado.'
    "
  ></Eventos>
</template>

<script>
import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg";
import Eventos from "@/components/Eventos.vue";
import axios from "axios";

export default {
  name: "banner-eventos",
  components: {
    Eventos,
  },

  data() {
    return {
      page: 1, // Pagina actual
      API_Backend: import.meta.env.VITE_API_BACKEND,
      eventos: [],
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

  mounted() {
    this.GetEventos();
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

    async GetEventos() {
      try {
        const response = await axios.get(`${this.API_Backend}/evento`);
        const data = response.data;
        this.eventos = data;
        console.log(this.eventos);
      } catch (error) {
        console.error(error);
      }
    }
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
