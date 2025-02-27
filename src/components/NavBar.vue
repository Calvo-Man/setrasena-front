<template>
    <div class="navbar">
      <img src="@/assets/banner.png" alt="icono personalizado" class="logo" />
      
      <!-- <v-btn class="btn-logout">
        <span class="material-icons">logout</span>
        <span>Cerrar Sesión</span>
      </v-btn> -->
    </div>
  </template>
  
  <style scoped lang="scss">
  .navbar {
    background-color: var(--light);
    color: var(--dark);
    padding: 1px; /* Puedes ajustar el padding si es necesario */
    display: flex;
    justify-content: center; /* Centra el contenido horizontalmente */
    align-items: center; /* Centra el contenido verticalmente */
    text-align: center;
  }
  
  .logo {
    width: 200px;
  }
  
  .btn-logout {
    background-color: var(--dark);
    color: var(--light);
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: var(--red-dark);
      color: var(--light);
      transition: 0.3s ease-in-out;
    }
  }
  </style>
  