import HomePage from "../views/HomePage.vue";
import HomeView from "@/views/HomeView.vue";
import PqrsView from "@/views/users/PqrsView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: { path: "/home" },
    children: [
      { path: "/home", name: "Home", component: HomePage },
      { path: "/pqrs", name: "PQRS", component: PqrsView },
    ],
  },
];
