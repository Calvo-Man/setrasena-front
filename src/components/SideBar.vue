<script setup>
import { ref } from "vue";
import logoURL from "../assets/logo.png";
import MenuItem from "./MenuItem.vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>
<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h3>Menu</h3>

    <div class="menu">
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
            label: "Misión",
            icon: "",
            to: "/mision",
          },
          {
            label: "Visión",
            icon: "",
            to: "/vision",
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
        to: "/",
        children: [
          {
            label: "Principios",
            icon: "",
            to: "/principios",
          },
        ],
      },
      {
        label:"Junta directiva",
        icon:"people_outline",
        to:"/",
        children:[
            {
                label:"Junta nacional",
                icon:"",
                to:"/junta-nacional"
            }
        ]
      },
      {
        label:"Simbolos patrios",
        icon:"flag",
        to:"/",
        children:[
            {
                label:"Himno de colombia",
                icon:"",
                to:"/himno-colombia"
            },
            {
                label:"Himno del SENA",
                icon:"",
                to:"/himno-sena"
            },{
                label:"Himno internacional socialista",
                icon:"",
                to:"/himno-socialista"
            }
        ]
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
        to: "/",
        children:[
            {
                label:"Boletines",
                icon:"",
                to:"/boletines"
            },
            {
                label:"Comunicados",
                icon:"",
                to:"/comunicados"
            },{
                label:"Flash informativo",
                icon:"",
                to:"/flash-informativo"
            }
        ]
      },
      {
        label: "Generar PQRS",
        icon: "support",
        to: "/pqrs",
      },
      {
        label: "Afiliate aqui",
        icon: "app_registration",
        to: "/afiliarse",
      },
    ],
  }),
  components: {
    MenuItem,
  },
};
</script>

<style lang="scss" >
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--red-dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

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
        border-right: 5px solid red;

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

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
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
    z-index: 99;
  }
}
</style>
