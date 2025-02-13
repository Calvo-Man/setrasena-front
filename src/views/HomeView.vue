<template>
  <div class="app ">
    <SideBar />
    <div class="container mx-auto scrollable-nav-main">
      
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped lang="scss">
.container {
  max-height: 100vh;
  overflow-y: auto;

  width: 100%;
}
/* Personaliza el fondo de la barra de desplazamiento */
::-webkit-scrollbar {
  width: 12px; /* Ancho de la barra de scroll */
}

/* Personaliza el "track" o fondo sobre el que se desplaza */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* Color de fondo del track */
}

/* Personaliza el "thumb" o control deslizante */
::-webkit-scrollbar-thumb {
  background: var(--dark); /* Color del control */
}

/* Cambia el color del "thumb" cuando está en hover */
::-webkit-scrollbar-thumb:hover {
  background: #1298cd;
}

/* Cambia el color del "thumb" cuando se presiona */
::-webkit-scrollbar-thumb:active {
  background: #333;
}
</style>
