import HomePage from "../views/HomePage.vue";
import HomeView from "@/views/HomeView.vue";
import MisionView from "@/views/nosotros/MisionView.vue";
import PlataformaLuchaView from "@/views/nosotros/PlataformaLuchaView.vue";
import PqrsView from "@/views/usuarios/PqrsView.vue";
import AfilicionView from "@/views/usuarios/AfilicionView.vue";
import consultarAfiliacion from "@/views/usuarios/consultarAfiliacion.vue";
import VisionView from "@/views/nosotros/VisionView.vue";
import HimnoNacional from "@/views/simbolos-patrios/HimnoNacional.vue";
import HimnoSena from "@/views/simbolos-patrios/HimnoSena.vue";
import HimnoInternacional from "@/views/simbolos-patrios/HimnoInternacional.vue";
import RegionalesMapView from "@/views/regionales/RegionalesMapView.vue";
import PrincipiosView from "@/views/estatutos/PrincipiosView.vue";
import JuntaNacionalView from "@/views/juntas/JuntaNacionalView.vue";
import BoletinesView from "@/views/publicaciones/BoletinesView.vue";
import ComunicadosView from "@/views/publicaciones/ComunicadosView.vue";
import FlashInformativoView from "@/views/publicaciones/FlashInformativoView.vue";
import EventosyReunionesView from "@/views/eventos/EventosyReunionesView.vue";
import PanelAdminView from "@/views/admin/PanelAdminView.vue";
import LoginView from "@/views/admin/LoginView.vue";
export const routes = [
  {
    path: "/auth/login",
    name: "LoginAdmin",
    component: LoginView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: { path: "/home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: HomePage,
        children: [
          {
            path: "/introduccion",
            name: "Introduccion",
            
          },
          {
            path: "/home#nosotros",
            name: "Nosotros",
           
          },
        ],
      },

      { path: "/pqrs", name: "PQRS", component: PqrsView },
      { path: "/afiliacion", name: "Afilicion", component: AfilicionView },
      {
        path: "/consultar-afiliacion",
        name: "Consultar Afiliacion",
        component: consultarAfiliacion,
      },

      { path: "/mision", name: "Mision", component: MisionView },
      { path: "/vision", name: "Vision", component: VisionView },
      {
        path: "plataforma-lucha",
        name: "Plataforma de lucha",
        component: PlataformaLuchaView,
      },
      {
        path: "/himno-colombia",
        name: "Himno Nacional",
        component: HimnoNacional,
      },
      { path: "/himno-sena", name: "Himno SENA", component: HimnoSena },
      {
        path: "/himno-socialista",
        name: "Himno Internacional",
        component: HimnoInternacional,
      },
      { path: "/regionales", name: "Regionales", component: RegionalesMapView },
      { path: "/principios", name: "Principios", component: PrincipiosView },
      {
        path: "/junta-nacional",
        name: "Junta Nacional",
        component: JuntaNacionalView,
      },
      { path: "/boletines", name: "Boletines", component: BoletinesView },
      { path: "/comunicados", name: "Comunicados", component: ComunicadosView },
      {
        path: "/flash-informativo",
        name: "Flash Informativo",
        component: FlashInformativoView,
      },
      {
        path: "/eventos",
        name: "Eventos y Reuniones",
        component: EventosyReunionesView,
      },
      {
        path: "/admin",
        name: "Panel Admin",
        component: PanelAdminView,
        // meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: HomeView,
  },
];
