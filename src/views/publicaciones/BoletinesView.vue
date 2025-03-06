<template>
  <Publicaciones
    :eventos="boletines"
    :titulo="'Boletines informativos SETRASENA'"
    :descripcion="
      'Consulta todos nuestros boletines informativos en esta sección, y mantente informado.'
    "
  />
</template>
<script>
import Publicaciones from "@/components/Publicaciones.vue";
import imagen1 from "@/assets/imagen1.jpeg";
import imagen2 from "@/assets/imagen2.jpeg";
export default {
  components: {
    Publicaciones,
  },
  data() {
    return {
      boletines: [
        {
          nombre: "Asamblea general de trabajo",
          imagen: "img/imagen1.jpeg",
          documento: "",
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-12-15",
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
          fecha: "2022-01-16",
          inicio: "10:00 a.m",
          fin: "12:00 p.m",
          tipo_evento: "Evento virtual",
          lugar: "Microsoft teams",
          lugar: "Centro de industria",
          ciudad: "Medellín, Colombia",
        },
        {
          nombre: "Asamblea nacional",
          imagen: imagen2,
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-03-17",
          inicio: "10:00 a.m",
          fin: "12:00 p.m",
          tipo_evento: "Evento virtual",
          lugar: "Microsoft teams",
          lugar: "Centro de industria",
          ciudad: "Medellín, Colombia",
        },
        {
          nombre: "Asamblea nacional",
          imagen: imagen2,
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-04-18",
          inicio: "10:00 a.m",
          fin: "12:00 p.m",
          tipo_evento: "Evento virtual",
          lugar: "Microsoft teams",
          lugar: "Centro de industria",
          ciudad: "Medellín, Colombia",
        },
        {
          nombre: "Asamblea nacional",
          imagen: imagen2,
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-05-19",
          inicio: "10:00 a.m",
          fin: "12:00 p.m",
          tipo_evento: "Evento virtual",
          lugar: "Microsoft teams",
          lugar: "Centro de industria",
          ciudad: "Medellín, Colombia",
        },
        {
          nombre: "Asamblea nacional",
          imagen: imagen2,
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-06-20",
          inicio: "10:00 a.m",
          fin: "12:00 p.m",
          tipo_evento: "Evento virtual",
          lugar: "Microsoft teams",
          lugar: "Centro de industria",
          ciudad: "Medellín, Colombia",
        },
        {
          nombre: "Asamblea nacional",
          imagen: imagen2,
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-11-25",
          inicio: "10:00 a.m",
          fin: "12:00 p.m",
          tipo_evento: "Evento virtual",
          lugar: "Microsoft teams",
          lugar: "Centro de industria",
          ciudad: "Medellín, Colombia",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {},
};
</script>
