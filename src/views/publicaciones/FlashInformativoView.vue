<template>
  <Publicaciones
    :tipo="'Flash informativo'"
    :titulo="'Flash informativos SETRASENA'"
    :descripcion="
      'Consulta todos nuestros flash informativos en esta sección, y mantente informado.'
    "
  />
</template>
<script>
import Publicaciones from "@/components/Publicaciones.vue";
export default {
  components: {
    Publicaciones,
  },

};
</script>
