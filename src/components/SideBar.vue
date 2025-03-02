<script setup>
import { ref, onMounted } from 'vue';
import logoURL from "../assets/logo.png";
import MenuItem from "./MenuItem.vue";

// Creamos una propiedad reactiva para el estado del menú
const is_expanded = ref(true);

// Función que actualiza el estado de is_expanded dependiendo del ancho de la ventana
const updateMenuState = () => {
  if (window.innerWidth > 1024) {
    is_expanded.value = true; // Si el ancho es mayor a 1024px, el menú estará expandido
  } else {
    is_expanded.value = false; // Si el ancho es menor o igual a 1024px, el menú estará contraído
  }
};

// Establecer el valor inicial de is_expanded cuando el componente se monta
onMounted(() => {
  updateMenuState(); // Verifica el tamaño de la ventana al cargar el componente
  window.addEventListener('resize', updateMenuState); // Añade un listener para cuando el tamaño de la ventana cambie
});


// ToggleMenu para alternar el estado de is_expanded
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  console.log(is_expanded.value);
};
</script>
<template>
  <button
    class="menu-toggle-no-expanded"
    :class="`${is_expanded ? 'is-expanded' : ''}`"
    @click="ToggleMenu"
  >
    <h3>Menu</h3>
    <span class="material-icons">keyboard_double_arrow_right</span>
  </button>
  <aside
    :class="`${is_expanded ? 'is-expanded' : ''}`"
    class="scrollable-nav-main"
  >
    <div class="logo">
      <img :src="logoURL" alt="" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h3>Menu</h3>

    <div class="menu scrollable-nav-main">
      <MenuItem
        v-for="(item, index) in menuTree"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :to="item.to"
        :depth="0"
        :smallMenu="smallMenu"
      />
    </div>
  </aside>
</template>
<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "recursive-menu",
  data: () => ({
    smallMenu: false,
    is_expanded:true,
    //Menu de opciones de la barra lateral
    menuTree: [
      {
        label: "Home",
        icon: "home",
        to: "/home",
      },
      {
        label: "Quienes somos",
        icon: "groups",
        to: "",
        children: [
          {
            label: "Introducción",
            icon: "",
            to: "/introduccion",
          },
          {
            label: "Sobre nosotros",
            icon: "",
            to: "/home#nosotros",
          },
          {
            label: "Plataforma de lucha",
            icon: "",
            to: "/plataforma-lucha",
          },
        ],
      },
      {
        label: "Estatutos",
        icon: "description",

        children: [
          {
            label: "Principios",
            icon: "",
            to: "/principios",
          },
        ],
      },
      {
        label: "Junta directiva",
        icon: "people_outline",

        children: [
          {
            label: "Junta nacional",
            icon: "",
            to: "/junta-nacional",
          },
        ],
      },
      {
        label: "Simbolos patrios",
        icon: "flag",

        children: [
          {
            label: "Himno de colombia",
            icon: "",
            to: "/himno-colombia",
          },
          {
            label: "Himno del SENA",
            icon: "",
            to: "/himno-sena",
          },
          {
            label: "Himno internacional socialista",
            icon: "",
            to: "/himno-socialista",
          },
        ],
      },
      {
        label: "Eventos y reuniones",
        icon: "event",
        to: "/eventos",
      },
      {
        label: "Regionales",
        icon: "map",
        to: "/regionales",
      },
      {
        label: "Publicaciones",
        icon: "forum",

        children: [
          {
            label: "Boletines",
            icon: "",
            to: "/boletines",
          },
          {
            label: "Comunicados",
            icon: "",
            to: "/comunicados",
          },
          {
            label: "Flash informativo",
            icon: "",
            to: "/flash-informativo",
          },
        ],
      },
      {
        label: "Administracion",
        icon: "admin_panel_settings",
        to: "/admin",
      },
      {
        label: "Generar PQRS",
        icon: "support",
        to: "/pqrs",
      },
      {
        label: "Afiliate aqui",
        icon: "app_registration",
        to: "/afiliacion",
      },
    ],
  }),
  components: {
    MenuItem,
  },
};
</script>

<style lang="scss">
.menu-toggle-no-expanded {
  display: flex;
  position: absolute;
  z-index: 991;
  .material-icons {
    position: absolute;
    top: 10px;
    left: 65px;
    font-size: 2rem;
    color: var(--dark);
    transition: 0.2s ease-out;
  }

  &:hover {
    .material-icons {
      color: var(--red-dark);
      transform: translateX(0.5rem);
    }
  }
  &.is-expanded {
    display: none;
    opacity: 0;
  }
  h3 {
    position: absolute;
    top: 15px;
    left: 25px;
    color: var(--dark);
    font-size: 0.985rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
}
aside {
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: var(--red-dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  opacity: 0;
  transition: 0.2s ease-in-out;
  display: none;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: -1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--dark);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--light);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--dark);
    font-size: 0.975rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;
    max-height: 100vh;
    overflow-y: auto;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--dark);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--dark);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--red-dark);
        box-shadow: 10px 1px 4px var(--dark);

        .material-icons,
        .text {
          color: var(--light);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark);
        border-right: 5px solid var(--light);

        .material-icons,
        .text {
          color: var(--light);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);
    display: flex;
    opacity: 1;
    transition: 0.3s ease-in-out;
    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        opacity: 0;
        @media (max-width: 1024px) {
          transform: rotate(-180deg);
          opacity: 1;
        }
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 991;
  }
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
  background: var(--light); /* Color del control */
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
  scrollbar-color: var(--dark) var(--red-dark); /* Color del "thumb" y del track */
}
</style>
