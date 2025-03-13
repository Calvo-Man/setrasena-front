<template>
  <v-data-table
    :headers="headers"
    :items="regionales"
    :sort-by="[{ key: 'nombre', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Listado de regionales</v-toolbar-title>
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
                      label="Regional"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close"
                >Cancelar</v-btn
              >
              
              <v-btn
                :loading="loading"
                class="flex-grow-1"
                
                variant="text"
                color="blue-darken-1"
                @click="ElegirAccion"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Estas seguro de eliminar esta regional?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                :loading="loading"
                color="blue-darken-1"
                class="flex-grow-1"
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
      <v-icon class="me-2" size="small" @click="editItem(item)"
        >mdi-pencil</v-icon
      >
      <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn :loading="loading" color="primary" @click="initialize">Recargar</v-btn>
    </template>
  </v-data-table>

  <!-- Snackbar Component -->
  <SnackBar
    :text="textSnackbar"
    :color="colorSnackbar"
    v-model:snackbar="snackbar"
  />
</template>

<script>
import axios from "axios";
import SnackBar from "./SnackBar.vue";

export default {
  components: {
    SnackBar,
  },
  data() {
    return {
      API_Backend: import.meta.env.VITE_API_BACKEND,
      snackbar: false, // Control snackbar visibility here
      dialog: false,
      dialogDelete: false,
      textSnackbar: "",
      colorSnackbar: "",
      loading:false,
      headers: [
        { title: "Regionales", align: "start", key: "nombre" },
        { title: "Actions", key: "actions", sortable: false },
      ],
      regionales: [],
      editedIndex: -1,
      editedItem: { nombre: null },
      defaultItem: { nombre: null },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Regional" : "Editar Regional";
    },
  },

  watch: {
    dialog(val) {
      if (!val) this.close();
    },
    dialogDelete(val) {
      if (!val) this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      try {
        this.loading = true;
        const response = await axios.get(`${this.API_Backend}/regional`);
        this.regionales = response.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.textSnackbar = "Error al cargar datos.";
        this.colorSnackbar = "red";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
    },

    editItem(item) {
      this.editedIndex = this.regionales.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.regionales.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      try {
        this.loading = true;
        await axios.delete(
          `${this.API_Backend}/regional/${this.editedItem.id}`
        );
        this.loading = false;
        this.initialize();
        this.textSnackbar = "Regional eliminada exitosamente.";
        this.colorSnackbar = "red";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        this.loading = false;
        this.textSnackbar = `Error al eliminar Regional, intente nuevamente.`;
        this.colorSnackbar ="red"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    async ElegirAccion() {
      if (!this.editedItem.nombre) {
        console.log("Debe llenar el campo");
        return;
      }

      if (this.editedIndex !== -1) {
        await this.actualizar();
      } else {
        await this.save();
      }

      this.close();
    },

    async save() {
      try {
        this.loading = true;
        await axios.post(`${this.API_Backend}/regional/crear`, {
          nombre: this.editedItem.nombre,
        });
        this.loading = false;
        this.initialize();
        this.textSnackbar = "Regional agregada exitosamente.";
        this.colorSnackbar = "green";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        this.loading = false;
        this.textSnackbar = `Error al agregar Regional, intente nuevamente.`;
        this.colorSnackbar ="red"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
    },

    async actualizar() {
      try {
        this.loading = true;
        await axios.put(`${this.API_Backend}/regional/${this.editedItem.id}`, {
          nombre: this.editedItem.nombre,
        });
        this.loading = false;
        this.initialize();
        this.textSnackbar = "Regional actualizada exitosamente.";
        this.colorSnackbar = "orange-darken-4";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        this.loading = false;
        this.textSnackbar = `Error al actualizar Regional, intente nuevamente.`;
        this.colorSnackbar ="red"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
    },
  },
};
</script>
