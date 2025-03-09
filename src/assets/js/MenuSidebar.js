export const MenuSidebar = [
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
          href: "/home#introduccion",
        },
        {
          label: "Sobre nosotros",
          icon: "",
          href: "/home#nosotros",
          to: "",
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
        {
          label: "Plataforma de lucha",
          icon: "",
          to: "/plataforma-lucha",
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
  ];