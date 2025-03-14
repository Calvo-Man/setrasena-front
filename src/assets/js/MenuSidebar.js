import store from "@/store";
import { computed } from "vue";
const isAuthenticated = store.getters.isAuthenticated;
export const MenuSidebar = [
    {
      label: "Home",
      icon: "home",
      to: "/home",
      noRequiresAdmin: true,
    },
    {
      label: "Quienes somos",
      icon: "groups",
      to: "",
      noRequiresAdmin: true,
      children: [
        {
          label: "Introducción",
          icon: "",
          href: "/home#introduccion",
          noRequiresAdmin: true,
        },
        {
          label: "Sobre nosotros",
          icon: "",
          href: "/home#nosotros",
          to: "",
          noRequiresAdmin: true,
        },
      ],
    },
    {
      label: "Estatutos",
      icon: "description",
      noRequiresAdmin: true,

      children: [
        {
          label: "Principios",
          icon: "",
          to: "/principios",
          noRequiresAdmin: true,
        },
        {
          label: "Plataforma de lucha",
          icon: "",
          to: "/plataforma-lucha",
          noRequiresAdmin: true,
        },
      ],
    },
    {
      label: "Junta directiva",
      icon: "people_outline",
      noRequiresAdmin: true,
      children: [
        {
          label: "Junta nacional",
          icon: "",
          to: "/junta-nacional",
          noRequiresAdmin: true,
        },
      ],
    },
    {
      label: "Simbolos patrios",
      icon: "flag",
      noRequiresAdmin: true,
      children: [
        {
          label: "Himno de colombia",
          icon: "",
          to: "/himno-colombia",
          noRequiresAdmin: true,
        },
        {
          label: "Himno del SENA",
          icon: "",
          to: "/himno-sena",
          noRequiresAdmin: true,
        },
        {
          label: "Himno internacional socialista",
          icon: "",
          to: "/himno-socialista",
          noRequiresAdmin: true,
        },
      ],
    },
    {
      label: "Eventos y reuniones",
      icon: "event",
      to: "/eventos",
      noRequiresAdmin: true,
    },
    {
      label: "Regionales",
      icon: "map",
      to: "/regionales",
      noRequiresAdmin: true,
    },
    {
      label: "Publicaciones",
      icon: "forum",
      noRequiresAdmin: true,
      children: [
        {
          label: "Boletines",
          icon: "",
          to: "/boletines",
          noRequiresAdmin: true,
        },
        {
          label: "Comunicados",
          icon: "",
          to: "/comunicados",
          noRequiresAdmin: true,
        },
        {
          label: "Flash informativo",
          icon: "",
          to: "/flash-informativo",
          noRequiresAdmin: true,
        },
      ],
    },
    {
      label: "Administracion",
      icon: "admin_panel_settings",
      to: "/admin",
      noRequiresAdmin: false,
    },
    {
      label: "Generar PQRS",
      icon: "support",
      to: "/pqrs",
      noRequiresAdmin: true,
    },
    {
      label: "Afiliacion",
      icon: "app_registration",
      noRequiresAdmin: true,
      children:[
        {
          label: "Afiliate aqui",
          to: "/afiliacion",
          noRequiresAdmin: true,
        },
        {
          label: "Consultar estado",
          to: "/consultar-afiliacion",
          noRequiresAdmin: true,
        },
      ]
    },
    
  ];
 