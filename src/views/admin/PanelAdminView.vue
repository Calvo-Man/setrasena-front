<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Panel de Administración</h1>
    </div>
    <v-container>
      <v-row>
        <!-- Botones para mostrar los formularios -->
        <v-col
          cols="12"
          md="6"
          class="mt-4 d-flex flex-wrap gap-3 opcion-panel"
        >
          <v-btn @click="setForm('boletin')" color="primary">
            Agregar Boletín
          </v-btn>
          <v-btn @click="setForm('comunicado')" color="primary">
            Agregar Comunicado
          </v-btn>
          <v-btn @click="setForm('flash')" color="primary">
            Agregar Flash Informativo
          </v-btn>
          <v-btn @click="setForm('regional')" color="primary">
            Agregar Regional
          </v-btn>
          <v-btn @click="setForm('centroFormacion')" color="primary">
            Agregar Centro de Formación
          </v-btn>
        </v-col>

        <!-- Columna para mostrar el formulario correspondiente -->
        <v-col cols="12" md="6">
          <!-- Formulario de Boletín -->
          <v-card v-if="currentForm === 'boletin'">
            <v-card-title>Agregar Boletín</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Título del Boletín" required />
                <v-textarea label="Contenido del Boletín" rows="5" required />
                <v-btn type="submit" color="success">Guardar Boletín</v-btn>
              </v-form>
            </v-card-text>
          </v-card>

          <!-- Formulario de Comunicado -->
          <v-card v-if="currentForm === 'comunicado'">
            <v-card-title>Agregar Comunicado</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Título del Comunicado" required />
                <v-textarea
                  label="Contenido del Comunicado"
                  rows="5"
                  required
                />
                <v-btn type="submit" color="success">Guardar Comunicado</v-btn>
              </v-form>
            </v-card-text>
          </v-card>

          <!-- Formulario de Flash Informativo -->
          <v-card v-if="currentForm === 'flash'">
            <v-card-title>Agregar Flash Informativo</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Título del Flash" required />
                <v-textarea label="Contenido del Flash" rows="5" required />
                <v-btn type="submit" color="success">Guardar Flash</v-btn>
              </v-form>
            </v-card-text>
          </v-card>

          <!-- Formulario de Regional -->
          <v-card v-if="currentForm === 'regional'">
            <v-card-title>Agregar Regional</v-card-title>
            <v-card-text>
              <v-form fast-fail submit.prevent>
                <v-text-field
                  label="Nombre de la Regional"
                  v-model="regional"
                  required
                />
                <v-btn  @click="SaveRegional" color="success">Guardar Regional</v-btn>
              </v-form>
            </v-card-text>
          </v-card>

          <!-- Formulario de Centro de Formación -->
          <v-card v-if="currentForm === 'centroFormacion'">
            <v-card-title>Agregar Centro de Formación</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Nombre del Centro de Formación" required />
                <v-textarea label="Descripción del Centro" rows="5" required />
                <v-btn type="submit" color="success">Guardar Centro</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    API_Backend:import.meta.env.VITE_API_BACKEND,
    currentForm: "",
    regional: "",
  }),

  methods: {
    async SaveRegional() {
        if(!this.regional){
            console.log("Debe llenar el campo")
            return;
        }
        try {
        const response = await axios.post(`${this.API_Backend}/regional/crear`, {
          nombre: this.regional,
        });
        alert("Registration successful!");
        
      } catch (error) {
        console.error(error);
        alert("Error registering Regional");
      }
    },
    setForm(form) {
      this.currentForm = form;
    },
  },
};
</script>

<style scoped>
.card {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card-header {
  background-color: var(--dark);
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
}

.card-title {
  font-size: 1.8em;
  margin: 0;
}

.opcion-panel {
  border-right: 1px solid black;
}

.v-btn {
  width: 100%;
}

.v-card {
  margin-bottom: 20px;
}

.v-form {
  display: flex;
  flex-direction: column;
}

.v-textarea,
.v-text-field {
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
