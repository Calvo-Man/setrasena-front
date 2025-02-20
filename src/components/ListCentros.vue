<template>
  <v-data-table
    :headers="headers"
    :items="centros"
    :sort-by="[{ key: 'nombre', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Listado de Centros de Formación</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" v-bind="props">
              Agregar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Centro de Formación"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8" sm="8">
                    <v-text-field
                      v-model="editedItem.direccion"
                      label="Dirección"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8" sm="8">
                    <v-select
                      v-model="editedItem.regional"
                      label="Seleccione una opción"
                      :items="regionales"
                      item-title="nombre"
                      item-value="id"
                      required 
                    />
                  </v-col>
                  <!--  <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="ElegirAccion">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Estas seguro de eliminar este centro?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    regional: [],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Centros de Formación",
        align: "start",
        sortable: false,
        key: "nombre",
      },
      { title: "Direccion", key: "direccion" },
      { title: "Regional", key: "regional.nombre" },
      // { title: 'Carbs (g)', key: 'carbs' },
      // { title: 'Protein (g)', key: 'protein' },
      { title: "Acciones", key: "actions", sortable: false },
    ],
    centros: [],
    editedIndex: -1,
    editedItem: {
      nombre: null,
      direccion: null,
      regional: null,
      // calories: 0,
      // fat: 0,
      // carbs: 0,
      // protein: 0,
    },
    defaultItem: {
      nombre: null,
      direccion: null,
      regional: null,
      // carbs: 0,
      // protein: 0,
    },
  }),
  props: {
    regionales: {
      type: Array,
      required: true,
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Centro de Formación" : "Editar Centro de Formación";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      try {
        const response = await axios.get(`${this.API_Backend}/centro`);
        this.centros = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editItem(item) {
      this.editedIndex = this.centros.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.centros.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      
    },
    async deleteItemConfirm() {
      try {
        const response = await axios.delete(
          `${this.API_Backend}/centro/${this.editedItem.id}`
        );
        this.initialize();
      } catch (error) {
        console.error(error);
      }
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async ElegirAccion() {
      if (!this.editedItem.nombre) {
        console.log("Debe llenar el campo");
        return;
      }

      if (this.editedIndex !== -1) {
        this.actualizar();
      } else {
        this.save();
      }

      this.close();
    },

    async save() {
      try {
        const response = await axios.post(
          `${this.API_Backend}/centro/crear`,
          {
            nombre: this.editedItem.nombre,
            direccion: this.editedItem.direccion,
            regional: this.editedItem.regional
          }
        );
        alert("Registration successful!");
      } catch (error) {
        console.error(error);
        alert("Error registering Regional");
      }
      this.close();
    },
    async actualizar() {
      try {
        const response = await axios.patch(
          `${this.API_Backend}/centro/${this.editedItem.id}`,
          {
            nombre: this.editedItem.nombre,
            direccion: this.editedItem.direccion,
            regional: this.editedItem.regional
          }
        );
        alert("Registration successful!");
        this.initialize();
      } catch (error) {
        console.error(error);
        alert("Error registering Regional");
      }
    },
  },
};
</script>
