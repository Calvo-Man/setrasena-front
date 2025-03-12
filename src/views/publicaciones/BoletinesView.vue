<template>
  <Publicaciones
    :tipo="'Boletín'"
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

};
</script>
