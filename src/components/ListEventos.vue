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
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" v-bind="props">
              Agregar
            </v-btn>
          </template>
          <v-card width="750">
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
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
              <v-btn color="blue-darken-1" variant="text" @click="ElegirAccion">
                Save
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
    <template v-slot:item.imagen="{ item }">
      <v-img :src="`${API_Backend}/${item.imagen}`" height="100" width="100" alt="Imagen del evento" cover></v-img>
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
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    API_Backend: import.meta.env.VITE_API_BACKEND,
    dialog: false,
    dialogDelete: false,
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
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      try {
        const response = await axios.get(`${this.API_Backend}/evento`);
        this.eventos = response.data;
      } catch (error) {
        console.error(error);
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

    async deleteItemConfirm() {
      try {
        const response = await axios.delete(
          `${this.API_Backend}/evento/${this.editedItem.id}`
        );
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

        // Enviar la solicitud POST con los datos del evento y la imagen
        const response = await axios.post(
          `${this.API_Backend}/evento/crear`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Especifica que estamos enviando un formulario con archivos
            },
          }
        );

        alert("Registro exitoso del evento.");

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
          `${this.API_Backend}/evento/${this.editedItem.id}`,
          {
            nombre: this.editedItem.nombre,
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
