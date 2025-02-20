<template>
    <v-data-table
      :headers="headers"
      :items="boletines"
      :sort-by="[{ key: 'nombre', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Listado de Comunicados</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                class="mb-2"
                color="primary"
                v-bind="props"
              >
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
                      md="8"
                      sm="8"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Regional"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.descripcion"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.archivo"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="ElegirAccion"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Estas seguro de eliminar este boletin?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.archivo="{item}">
        <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
        >
          mdi-download
        </v-icon>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
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
            title: 'Boletines',
            align: 'start',
            sortable: false,
            key: 'nombre',
          },
           { title: 'Descripción', key: 'Descripcion' },
           {title:"Fecha de publicación",key:"fecha"},
          { title: 'PDF', key: 'archivo',sortable:false },

        
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        boletines: [
            {
                nombre:"Boletin 1",
                
            }
        ],
        editedIndex: -1,
        editedItem: {
          nombre: null,
          descripcion: null,
          archivo: null,
        },
        defaultItem: {
          nombre: null,
          descripcion: null,
          archivo: null,
          
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Agregar Boletin' : 'Editar Boletin'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.initialize()
      },
  
      methods: {
        async initialize () {
          try {
          const response = await axios.get(`${this.API_Backend}/boletin`);
          this.regionales = response.data;
        } catch (error) {
          console.error(error);
        }
        },
  
        editItem (item) {
          this.editedIndex = this.boletines.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.boletines.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        async deleteItemConfirm () {
          try {
            const response =await axios.delete(`${this.API_Backend}/boletin/${this.editedItem.id}`);
          } catch (error) {
            console.error(error);
          }
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
        async ElegirAccion(){
          if(!this.editedItem.nombre){
              console.log("Debe llenar el campo")
              return;
          }
          
          if(this.editedIndex !== -1){
            this.actualizar();
          }else{
            this.save();
          }
          
          this.close();
        },
  
        async save () {
          
          try {
          const response = await axios.post(`${this.API_Backend}/boletin/crear`, {
            nombre: this.editedItem.nombre,
          });
          alert("Registration successful!");
          
        } catch (error) {
          console.error(error);
          alert("Error registering Regional");
        }
          this.close()
        },
        async actualizar() {
          try {
            const response = await axios.put(`${this.API_Backend}/boletin/${this.editedItem.id}`, {
              nombre: this.editedItem.nombre,
            });
            alert("Registration successful!");
            this.initialize();
          } catch (error) {
            console.error(error);
            alert("Error registering Regional");
          }
          
        }
      },
    }
  </script>