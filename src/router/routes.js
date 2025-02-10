import HomePage from "../views/HomePage.vue";
import HomeView from "@/views/HomeView.vue";
import MisionView from "@/views/nosotros/MisionView.vue";
import PlataformaLuchaView from "@/views/nosotros/PlataformaLuchaView.vue";
import PqrsView from "@/views/usuarios/PqrsView.vue";
import AfilicionView from "@/views/usuarios/AfilicionView.vue";
import VisionView from "@/views/nosotros/VisionView.vue";
import HimnoNacional from "@/views/simbolos-patrios/HimnoNacional.vue";
import HimnoSena from "@/views/simbolos-patrios/HimnoSena.vue";
import HimnoInternacional from "@/views/simbolos-patrios/HimnoInternacional.vue";
import RegionalesMapView from "@/views/regionales/RegionalesMapView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: { path: "/home" },
    children: [
      { path: "/home", name: "Home", component: HomePage },
      { path: "/pqrs", name: "PQRS", component: PqrsView },
      { path: "/afiliacion", name: "Afilicion", component: AfilicionView },
      { path: "/mision", name: "Mision", component: MisionView },
      { path: "/vision", name: "Vision", component: VisionView },
      { path: "/plataforma-lucha", name: "Plataforma de lucha", component:PlataformaLuchaView },
      { path: "/himno-colombia", name: "Himno Nacional", component:HimnoNacional },
      { path: "/himno-sena", name: "Himno SENA", component:HimnoSena },
      { path: "/himno-socialista", name: "Himno Internacional", component:HimnoInternacional },
      { path: "/regionales", name: "Regionales", component:RegionalesMapView },
    ],
  },
];
