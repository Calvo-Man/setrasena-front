<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <v-app style="background: var(--grey);" class="scrollable-nav">
    <RouterView />
  </v-app>
</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --grey: #d3d7e0;
  --red-dark:#EB2929;
  --dark: #0b0b0c;
  --dark-alt: #334155;
  --light: #ffffff;
  --sidebar-width: 350px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
  
}
 body{
  background: var(--grey);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}

</style>
