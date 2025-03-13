<template>
  <v-data-table
    :headers="headers"
    :items="eventos"
    :sort-by="[{ key: 'nombre', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Listado de Eventos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="70%">
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
                  <v-col
                    cols="12"
                    class="text-center align-center justify-center"
                  >
                    <v-img
                      :src="`${API_Backend}/${editedItem.imagen}`"
                      width="400"
                      alt="Imagen del evento"
                      contain
                    ></v-img>
                  </v-col>
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
                      v-model="editedItem.lugar"
                      label="Lugar"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-select
                      v-model="editedItem.modalidad"
                      label="Modalidad"
                      :items="['Presencial', 'Virtual']"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4" sm="12">
                    <v-text-field
                      v-model="editedItem.fecha"
                      label="Fecha"
                      type="date"
                      required
                    />
                  </v-col>
                  <v-col cols="8" md="4" sm="12">
                    <v-text-field
                      v-model="editedItem.hora"
                      label="Hora de inicio"
                      type="time"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="4" sm="12">
                    <v-text-field
                      label="Hora de fin"
                      v-model="editedItem.fin"
                      type="time"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-file-input
                      v-model="editedItem.imagen"
                      label="Seleccione una imagen"
                      accept="image/*"
                      required
                    ></v-file-input>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripción"
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
              >Estas seguro de eliminar este evento?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                :loading="loading"
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogImagen">
          <v-card class="d-flex flex-column align-center justify-center">
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
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn :loading="loading" color="primary" @click="initialize">
        Recargar
      </v-btn>
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
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    dialog: false,
    dialogDelete: false,
    dialogImagen: false,
    snackbar: false,
    loading: false,
    textSnackbar: "",
    colorSnackbar: "",
    headers: [
      {
        title: "Eventos y Reuniones",
        align: "start",
        sortable: true,
        key: "nombre",
      },
      { title: "Descripción", key: "descripcion" },
      { title: "Fecha", key: "fecha" },
      { title: "hora", key: "hora", sortable: false },
      { title: "Fin", key: "fin", sortable: false },
      { title: "Modalidad", key: "modalidad" },
      { title: "Lugar", key: "lugar" },
      { title: "Ciudad", key: "ciudad" },
      { title: "Imagen", key: "imagen", sortable: false },
      { title: "Actions", key: "actions", sortable: false },
    ],
    eventos: [],
    editedIndex: -1,
    editedItem: {
      nombre: null,
      descripcion: null,
      imagen: null,
      fecha: null,
      hora: null,
      fin: null,
      modalidad: null,
      lugar: null,
      ciudad: null,
    },
    defaultItem: {
      nombre: null,
      descripcion: null,
      imagen: null,
      fecha: null,
      hora: null,
      fin: null,
      modalidad: null,
      lugar: null,
      ciudad: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Evento" : "Editar Evento";
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
        this.loading = true;
        const response = await axios.get(`${this.API_Backend}/evento`);
        this.eventos = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.textSnackbar = "Error al cargar datos.";
        this.colorSnackbar = "red";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
    },

    editItem(item) {
      this.editedIndex = this.eventos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.eventos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    selectImage(item) {
      this.editedIndex = this.eventos.indexOf(item);
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
        this.loading = true;
        const response = await axios.delete(
          `${this.API_Backend}/evento/${this.editedItem.id}`
        );
        this.initialize();
        this.textSnackbar = "Evento eliminado exitosamente.";
        this.colorSnackbar = "red";
        this.snackbar = true;
        this.loading = false;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        this.loading = false;
        this.textSnackbar = `Error al eliminar ${this.tipo_publicacion}, intente nuevamente.`;
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
      if (this.editedIndex !== -1) {
        this.actualizar();
      } else {
        this.save();
      }
    },

    async save() {
      try {
        this.loading = true;
        // Validación previa de los campos
        if (
          !this.editedItem.nombre ||
          !this.editedItem.descripcion ||
          !this.editedItem.fecha ||
          !this.editedItem.imagen
        ) {
          alert("Por favor, complete todos los campos obligatorios.");
          return;
        }
        // Crear el objeto FormData para enviar tanto los datos del evento como la imagen
        const formData = new FormData();
        formData.append("nombre", this.editedItem.nombre);
        formData.append("descripcion", this.editedItem.descripcion);
        formData.append("fecha", this.editedItem.fecha);
        formData.append("hora", this.editedItem.hora);
        formData.append("fin", this.editedItem.fin);
        formData.append("modalidad", this.editedItem.modalidad);
        formData.append("lugar", this.editedItem.lugar);
        formData.append("ciudad", this.editedItem.ciudad);
        formData.append("tipo", "Evento");

        // Verificar si se ha seleccionado una imagen
        if (this.editedItem.imagen instanceof File) {
          formData.append("imagen", this.editedItem.imagen);
        } else {
          alert("Por favor, seleccione una imagen.");
          return;
        }
        const response = await axios.post(
          `${this.API_Backend}/evento/crear`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // this.loading = false;
        this.initialize();
        this.textSnackbar = "Evento guardado exitosamente.";
        this.colorSnackbar = "green";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        this.loading = false;
        this.textSnackbar = `Error al guardar ${this.tipo_publicacion}, intente nuevamente.`;
        this.colorSnackbar ="red"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
      this.close();
    },

    async actualizar() {
      try {
        this.loading = true;
        // Validación previa de los campos
        if (
          !this.editedItem.nombre ||
          !this.editedItem.descripcion ||
          !this.editedItem.fecha ||
          !this.editedItem.imagen
        ) {
          alert("Por favor, complete todos los campos obligatorios.");
          return;
        }
        // Crear el objeto FormData para enviar tanto los datos del evento como la imagen
        const formData = new FormData();
        formData.append("nombre", this.editedItem.nombre);
        formData.append("descripcion", this.editedItem.descripcion);
        formData.append("fecha", this.editedItem.fecha);
        formData.append("hora", this.editedItem.hora);
        formData.append("fin", this.editedItem.fin);
        formData.append("modalidad", this.editedItem.modalidad);
        formData.append("lugar", this.editedItem.lugar);
        formData.append("ciudad", this.editedItem.ciudad);
        formData.append("tipo", "Evento");

        // Verificar si se ha seleccionado una imagen
        if (this.editedItem.imagen instanceof File) {
          formData.append("imagen", this.editedItem.imagen);
        }
        const response = await axios.patch(
          `${this.API_Backend}/evento/${this.editedItem.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.loading = false;
        this.initialize();
        this.textSnackbar = "Evento actualizado exitosamente.";
        this.colorSnackbar = "orange-darken-4";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      } catch (error) {
        this.loading = false;
        this.textSnackbar = `Error al actualizar ${this.tipo_publicacion}, intente nuevamente.`;
        this.colorSnackbar ="red"
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
      this.close();
    },
  },
};
</script>
