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
          descripcion:"beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          imagen: "img/imagen1.jpeg",
          documento: "docs/boletin1.pdf",
          fecha: "2022-12-15",
          ciudad: "Monteria, Cordóba",
        },
        {
          nombre: "Asamblea nacional",
          imagen: imagen2,
          descripcion:
            "beatae deserunt aut cupiditate nulla repellat commodi, voluptates minima at quae? Praesentium, accusamus!",
          fecha: "2022-01-16",

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
