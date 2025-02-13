<template>
  <v-container>
    <!-- Card principal con logo -->
    <v-card class="mx-auto mt-1 mb-4" elevation="11" subtitle="Sindicato de trabajadores y empleados del SENA" width="500">
      <template v-slot:title>
        <img src="../../assets/logo.png" alt="icono personalizado" style="width: 24px; height: 24px; margin-right: 8px" />
        <span class="font-weight-black">La Internacional</span>
      </template>
    </v-card>

    <!-- Contenedor para las estrofas -->
    <v-row>
      <!-- Primera y Segunda Estrofa -->
      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Primera Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Agrupémonos todos,<br />
            en la lucha final.<br />
            El género humano<br />
            es la internacional. (Bis)
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Segunda Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            ¡Arriba, parias de la Tierra!<br />
            ¡En pie, famélica legión!<br />
            Atruena la razón en marcha:<br />
            es el fin de la opresión.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tercera y Cuarta Estrofa -->
      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Tercera Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Del pasado hay que hacer añicos.<br />
            ¡Legión esclava en pie a vencer!<br />
            El mundo va a cambiar de base.<br />
            Los nada de hoy todo han de ser.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Cuarta Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Ni en dioses, reyes ni tribunos,<br />
            está el supremo salvador.<br />
            Nosotros mismos realicemos<br />
            el esfuerzo redentor.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Quinta y Sexta Estrofa -->
      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Quinta Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Para hacer que el tirano caiga<br />
            y el mundo esclavo liberar,<br />
            soplemos la potente fragua<br />
            que el hombre nuevo ha de forjar.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Sexta Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            La ley nos burla y el Estado<br />
            oprime y sangra al productor;<br />
            nos da derechos irrisorios,<br />
            no hay deberes del señor.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Séptima Estrofa y Corro Repetido -->
      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Séptima Estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Basta ya de tutela odiosa,<br />
            que la igualdad ley ha de ser:<br />
            "No más deberes sin derechos,<br />
            ningún derecho sin deber".
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xs="12" sm="6" class="mb-4">
        <v-card class="mx-auto" elevation="3">
          <v-card-item>
            <v-card-title>Corro Repetido</v-card-title>
          </v-card-item>
          <v-card-text>
            Agrupémonos todos,<br />
            en la lucha final.<br />
            El género humano<br />
            es la internacional. (Bis)
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
