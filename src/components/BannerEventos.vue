<template>
  <v-sheet class="mx-auto" max-width="100%">
    <v-slide-group
      v-model="model"
      class="pa-4 bg-grey-lighten-"
      center-active
      show-arrows
    >
      <v-slide-group-item
        v-for="(evento, index) in eventos"
        :key="index"
        v-slot="{ isSelected, toggle }"
      >
        <v-card
          :color="isSelected ? 'white' : 'red-darken-2'"
          class="ma-4 d-flex borde-card"
          height="200"
          width="800"
          @click="toggle"
        >
          <div class="w-33">
            <v-img
              :src="evento.imagen"
              height="200"
              cover
            ></v-img>
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
                <p>{{ evento.modalidad }}: {{ evento.lugar }}</p>
                <p>{{ evento.ciudad }}</p>
              </div>
            </div>
            <div class="descripcion ">
              <v-card-title class="text-body-1">{{ evento.nombre }}</v-card-title>
              <v-card-text class="text-body-2">{{ evento.descripcion }}</v-card-text>
            </div>
          </div>
          <div class="d-flex fill-height justify-center"></div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg"
export default {
  name: "banner-eventos",

  data: () => ({
    model: null,
    eventos: [
      {
        nombre: "Asamblea general de trabajo",
        imagen:imagen1,
        descripcion:
          "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
        fecha: "2022-12-31",
        inicio: "9:00 a.m",
        fin: "10:00 a.m",
        modalidad: "Evento presencial",
        lugar: "Circunavalar 27,Centro de industria y turismo",
        ciudad: "Monteria, Cordóba",
      },
      {
        nombre: "Asamblea nacional",
        imagen:imagen2,
        descripcion: "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
        fecha: "2022-01-15",
        inicio: "10:00 a.m",
        fin: "12:00 p.m",
        modalidad: "Evento virtual",
        lugar: "Microsoft teams",
      
        ciudad: "Medellín, Colombia",
      },
      
      
    ],
  }),
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
    p{
        font-size: 0.9rem;
    }
    
    
  }
</style>
