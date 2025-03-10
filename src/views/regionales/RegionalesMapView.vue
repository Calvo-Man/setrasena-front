<template>
  <v-card class="mx-auto" width="100%" height="100%">
    <v-card-title class="text-center bg-blck mb-4">
      Subdirectivas y comites seccionales
    </v-card-title>
    <v-card class="mb-4" elevation="0">
      <v-card-title class="headline  title bg-black mb-4"
        >Subdirectivas</v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col
            v-for="(item, index) in subdirectivas"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-dialog max-width="90%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-card
                  v-bind="activatorProps"
                  class="text-body-1 d-flex align-center justify-center"
                >
                  <v-card-title class="text-body-1">{{
                    item.name
                  }}</v-card-title>
                </v-card>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card class="scrollable-nav-main">
                  <h3 class=" text-center mb-4 title bg-black"
                    >Miembros de la subdirectiva {{ item.name }}</h3
                  >
                  <v-card-text>
                    <v-row>
                      <v-col
                        v-for="(member, index) in subdirectivasMembers.find(
                          (sub) => sub.name === item.name
                        ).members"
                        :key="index"
                        cols="12"
                        md="6"
                        lg="4"
                      >
                        <v-card>
                          <v-card-title class="text-body-1"
                            >{{ member.nombres }}
                            {{ member.apellidos }}</v-card-title
                          >
                          <v-card-subtitle>{{
                            member.cargo_según_deposito
                          }}</v-card-subtitle>
                          <v-card-text>
                            <div>
                              <strong>Email:</strong>
                              <a>{{ member.correo_electronico }}</a>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      text="Cerrar"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mb-4" elevation="0">
      <v-card-title class="headline  title bg-black mb-4"
        >Comites seccionales</v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col
            v-for="(item, index) in comites"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <v-dialog max-width="70%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-card
                  v-bind="activatorProps"
                  class="text-body-1 d-flex align-center justify-center"
                >
                  <v-card-title class="text-body-1">{{
                    item.name
                  }}</v-card-title>
                </v-card>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card class="scrollable-nav-main">
                  <h3 class=" text-center mb-4 title bg-black"
                    >Miembros del comite seccional {{ item.name }}</h3
                  >
                  <v-card-text>
                    <v-row>
                      <v-col
                        v-for="(member, index) in subdirectivasMembers.find(
                          (sub) => sub.name === item.name
                        ).members"
                        :key="index"
                        cols="12"
                        md="6"
                        lg="4"
                      >
                        <v-card>
                          <v-card-title class="text-body-1"
                            >{{ member.nombres }}
                            {{ member.apellidos }}</v-card-title
                          >
                          <v-card-subtitle>{{
                            member.cargo_según_deposito
                          }}</v-card-subtitle>
                          <v-card-text>
                            <div>
                              <strong>Email:</strong>
                              <a>{{ member.correo_electronico }}</a>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      text="Cerrar"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card-title class="headline  title bg-black mb-4"
      >Mapa de regionales</v-card-title
    >
    <v-img
      height="100%"
      lazy-src="https://picsum.photos/id/11/100/60"
      width="100%"
      :src="bannerImage"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
  </v-card>
</template>
<script>
import banner from "@/assets/RegionalesMap.jpeg";
import { SubdirectivaMembers } from "@/assets/js/SubdirectivaMembers";
export default {
  data() {
    return {
      bannerImage: banner,
      subdirectivasMembers: SubdirectivaMembers,
      subdirectivas: [
        { name: "ANTIOQUIA" },
        { name: "CORDOBA" },
        { name: "BOLIVAR" },
        { name: "BOGOTA" },
        { name: "ATLANTICO" },
        { name: "HUILA" },
        { name: "SANTANDER" },
        { name: "NORTE DE SANTANDER" },
        { name: "CESAR" },
        { name: "CASANARE" },
        { name: "META" },
      ],
      comites: [
        { name: "SAN ANDRES" },
        { name: "ARAUCA" },
        { name: "TOLIMA" },
        { name: "BOYACA" },
      ],
      headers: [
        {
          title: "Nombre",
          align: "start",
          key: "nombres",
        },

        { title: "Apellidos", key: "apellidos" },
        { title: "Cargo segun deposito", key: "cargo_según_deposito" },

        {
          title: "Correo electronico",
          align: "end",
          key: "correo_electronico",
        },
      ],
    };
  },
};
</script>
<style scoped>
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
  background: var(--dark); /* Color del control */
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
  scrollbar-color: var(--red-dark) #f1f1f1; /* Color del "thumb" y del track */
}
</style>
