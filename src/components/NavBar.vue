<template>
    <div class="navbar">
        <!-- <img src="@/assets/banner.png" alt="icono personalizado" style="width: 150px; height: 24px; margin-right: 8px" /> -->
        <span class="font-weight-black">Sindicato de trabajadores y empleados del SENA</span>
        <v-spacer></v-spacer>

<v-btn class="btn-logout">
    <span class="material-icons">logout</span>
    <span>Cerrar Sesión</span>
</v-btn>
    </div>
</template>
<style scoped lang="scss">
.navbar {
    background-color: var(--light);
    color: var(--dark);
    padding: 10px;
    display: flex;
    align-items: center;
   
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