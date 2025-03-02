<template>
  <div class="app">
    <SideBar />
    <div class="container mx-auto scrollable-nav-main">
      <NavBar />
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
main{
  margin-top: 50px;
}
.container {
  max-height: 100vh;
  overflow-y: auto;
  width: 100%;
}

/* Personaliza las barras de desplazamiento para navegadores basados en Webkit (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 1px; /* Ancho de la barra de scroll */
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

/* Personaliza las barras de desplazamiento para Firefox */
.scrollable-nav-main {
  scrollbar-width: thin; /* Ancho de la barra de desplazamiento */
  scrollbar-color: var(--dark) #f1f1f1; /* Color del "thumb" y del track */
}
</style>
