<template>
  <v-data-table
    :headers="headers"
    :items="publicaciones"
    :sort-by="[{ key: 'nombre', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Listado de {{ tipo_publicacion }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="80%">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" v-bind="props">
              Agregar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}{{ tipo_publicacion }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4" sm="12">
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Titulo"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-text-field
                      v-model="editedItem.ciudad"
                      label="Ciudad"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-text-field
                      v-model="editedItem.fecha"
                      label="Fecha"
                      type="date"
                      required
                    />
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-file-input
                      v-model="editedItem.imagen"
                      label="Seleccione una imagen"
                      accept="image/*"
                      required
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-file-input
                      v-model="editedItem.documento"
                      label="Seleccione un documento"
                      accept="application/pdf"
                      required
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripción "
                      rows="4"
                      required
                    />
                  </v-col>
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
        <v-dialog v-model="dialogDelete" max-width="50%">
          <v-card>
            <h5 class="text-h6 text-center">
              Estas seguro de eliminar este {{ tipo_publicacion }}?
            </h5>
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
        <v-dialog v-model="dialogImagen" max-width="60%">
          <v-card>
            <v-img
              :src="`${API_Backend}/${editedItem.imagen}`"
              height="100%"
              width="100%"
              alt="Imagen del evento"
              cover
            ></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeImagen">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.imagen="{ item }">
      <v-img
        :src="`${API_Backend}/${item.imagen}`"
        height="100"
        width="100"
        alt="Imagen del evento"
        @click="selectImage(item)"
        cover
        class="cursor-pointer"
      ></v-img>
    </template>
    <template v-slot:item.documento="{ item }">
      <a
        class="me-2"
        size="small"
        :href="`${API_Backend}/${item.documento}`"
        target="_blank"
      >
        <span class="material-icons text-black">visibility</span>
      </a>
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
        Recargar
      </v-btn>
    </template>
  </v-data-table>
  <SnackBar :text="textSnackbar" :color="colorSnackbar" v-model:snackbar="snackbar" />
</template>
<script>
import axios from "axios";
import SnackBar from "./SnackBar.vue";
export default {
  props: {
    tipo_publicacion: {
      type: String,
      required: true,
    },
  },
  components: {
      SnackBar
  },
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    dialog: false,
    dialogDelete: false,
    dialogImagen: false,
    snackbar: false, // Control snackbar visibility here
    textSnackbar: "",
    colorSnackbar: "",
    publicaciones: [],
    headers: [
      {
        title: "Titulo",
        align: "start",
        sortable: false,
        key: "nombre",
      },
      { title: "Descripción", key: "descripcion" },
      { title: "Fecha", key: "fecha" },
      { title: "Ciudad", key: "ciudad" },
      { title: "Imagen", key: "imagen", sortable: false },
      { title: "PDF", key: "documento", sortable: false },
      { title: "Actions", key: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      nombre: null,
      descripcion: null,
      fecha: null,
      ciudad: null,
      imagen: null,
      documento: null,
    },
    defaultItem: {
      nombre: null,
      descripcion: null,
      fecha: null,
      ciudad: null,
      imagen: null,
      documento: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar " : "Editar";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogImagen(val) {
      val || this.closeImagen();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      try {
        const response = await axios.get(
          `${this.API_Backend}/publicacion/tipo/${this.tipo_publicacion}`
        );
        this.publicaciones = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    editItem(item) {
      this.editedIndex = this.publicaciones.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.publicaciones.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    selectImage(item) {
      this.editedIndex = this.publicaciones.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogImagen = true;
    },
    closeImagen() {
      this.dialogImagen = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async deleteItemConfirm() {
      try {
        const response = await axios.delete(
          `${this.API_Backend}/publicacion/${this.editedItem.id}`
        );
        this.initialize();
        this.textSnackbar = `${this.tipo_publicacion} eliminado exitosamente.`;
        this.colorSnackbar ="red"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
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
        // Validación previa de los campos
        if (
          !this.editedItem.nombre ||
          !this.editedItem.descripcion ||
          !this.editedItem.fecha ||
          !this.editedItem.imagen ||
          !this.editedItem.documento
        ) {
          alert("Por favor, complete todos los campos obligatorios.");
          return;
        }
        // Crear el objeto FormData para enviar tanto los datos del evento como la imagen
        const formData = new FormData();
        formData.append("nombre", this.editedItem.nombre);
        formData.append("descripcion", this.editedItem.descripcion);
        formData.append("fecha", this.editedItem.fecha);
        formData.append("ciudad", this.editedItem.ciudad);
        formData.append("tipo", this.tipo_publicacion);

        // Verificar si se ha seleccionado una imagen
        if (this.editedItem.imagen instanceof File) {
          formData.append("imagen", this.editedItem.imagen);
        } else {
          alert("Por favor, seleccione una imagen.");
          return;
        }
        if (this.editedItem.documento instanceof File) {
          formData.append("documento", this.editedItem.documento);
        } else {
          alert("Por favor, seleccione un documento.");
          return;
        }

        const response = await axios.post(
          `${this.API_Backend}/publicacion/crear`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.initialize();
        this.textSnackbar = `${this.tipo_publicacion} eliminado exitosamente.`;
        this.colorSnackbar ="green"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);

        this.initialize();
      } catch (error) {
        console.error(error);
        alert(
          "Hubo un error al registrar el evento. Por favor, intente nuevamente."
        );
      }

      // Cerrar el diálogo o el formulario
      this.close();
    },
    async actualizar() {
      try {
        const response = await axios.put(
          `${this.API_Backend}/publicacion/${this.editedItem.id}`,
          {
            nombre: this.editedItem.nombre,
          }
        );
        this.initialize();
        this.textSnackbar = `${this.tipo_publicacion} eliminado exitosamente.`;
        this.colorSnackbar ="orange-darken-4"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        console.error(error);
        alert("Error registering Regional");
      }
    },
  },
};
</script>
