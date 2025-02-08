<template>
  <div class="app">
        <SideBar />
        <div class="container">
          <main>

            <RouterView /> 
          </main>
        </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>

<style scoped lang="scss">

</style>
