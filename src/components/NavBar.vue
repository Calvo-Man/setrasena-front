<template>
  <div class="navbar">
    <img src="@/assets/banner.png" alt="icono personalizado" class="logo" />
  </div>
</template>

<style scoped lang="scss">
.navbar {
  background-color: var(--light);
  color: var(--dark);
  padding: 1px;
  display: flex;
  
  align-items: center; /* Centra la imagen verticalmente */
  text-align: center;
  position: fixed;

  width: 100%; /* Asegura que el navbar ocupe el 100% del ancho */
  z-index: 9;
  @media (max-width: 1024px) {
    justify-content: center;
  }
}

.logo {
  width: 200px; /* Puedes ajustar el tamaño de la imagen */
  margin-left: calc(40% - 100px);
  
  @media (max-width: 1024px) {
    margin-left: 0;
  }
}
</style>
