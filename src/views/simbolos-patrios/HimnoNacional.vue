<template>
  <v-container>
    <v-card class="mx-auto mt-1" elevation="11" subtitle="Sindicato de trabajadores y empleados del SENA" width="100%" max-width="500">
      <template v-slot:title>
        <img src="../../assets/logo.png" alt="icono personalizado" style="width: 24px; height: 24px; margin-right: 8px" />
        <span class="font-weight-black">Himno Nacional</span>
      </template>
    </v-card>

    <v-row>
      <!-- Primera estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Primera estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Cesó la horrible noche<br />
            La libertad sublime<br />
            Derrama las auroras<br />
            De su invencible luz.<br />
            La humanidad entera,<br />
            Que entre cadenas gime,<br />
            Comprende las palabras<br />
            Del que murió en la cruz.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Segunda estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item >
            <v-card-title>Segunda estrofa</v-card-title>
          </v-card-item>
          <v-card-text >
            "Independencia" grita<br />
            El mundo americano:<br />
            Se baña en sangre de héroes<br />
            La tierra de Colón.<br />
            Pero este gran principio:<br />
            "el rey no es soberano"<br />
            Resuena,<br />
            Y los que sufren<br />
            Bendicen su pasión.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tercera estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Tercera estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Del Orinoco el cauce<br />
            Se colma de despojos,<br />
            De sangre y llanto un río<br />
            Se mira allí correr.<br />
            En Bárbula no saben<br />
            Las almas ni los ojos<br />
            Si admiración o espanto<br />
            Sentir o padecer.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Cuarta estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Cuarta estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            A orillas del Caribe<br />
            Hambriento un pueblo lucha<br />
            Horrores prefiriendo<br />
            A pérfida salud. !Oh, sí¡ de Cartagena<br />
            La abnegación es mucha,<br />
            Y escombros de la muerte<br />
            Desprecian su virtud.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Quinta estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Quinta estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            De Boyacá en los campos<br />
            El genio de la gloria<br />
            Con cada espiga un héroe<br />
            Invicto coronó.<br />
            Soldados sin coraza<br />
            Ganaron la victoria;<br />
            Su varonil aliento<br />
            De escudo les sirvió.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Sexta estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Sexta estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Bolívar cruza el Andes<br />
            Que riega dos océanos<br />
            Espadas cual centellas<br />
            Fulguran en Junín.<br />
            Centauros indomables<br />
            Descienden a los llanos<br />
            Y empieza a presentirse<br />
            De la epopeya el fin.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Séptima estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Séptima estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            La trompa victoriosa<br />
            Que en Ayacucho truena<br />
            En cada triunfo crece<br />
            Su formidable son.<br />
            En su expansivo empuje<br />
            La libertad se estrena,<br />
            Del cielo Americano<br />
            Formando un pabellón.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Octava estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Octava estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            La Virgen sus cabellos<br />
            Arranca en agonía<br />
            Y de su amor viuda<br />
            Los cuelga del ciprés.<br />
            Lamenta su esperanza<br />
            Que cubre losa fría;<br />
            Pero glorioso orgullo<br />
            Circunda su alba tez.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Novena estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Novena estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            La Patria así se forma<br />
            Termópilas brotando;<br />
            Constelación de cíclopes<br />
            Su noche iluminó;<br />
            La flor estremecida<br />
            Mortal el viento hallando<br />
            Debajo los laureles<br />
            Seguridad buscó.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Décima estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Décima estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Más no es completa gloria<br />
            Vencer en la batalla,<br />
            Que al brazo que combate<br />
            Lo anima la verdad.<br />
            La independencia sola<br />
            El gran clamor no acalla:<br />
            Si el sol alumbra a todos<br />
            Justicia es libertad.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Undécima estrofa -->
      <v-col xs="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto mt-4 text-center" elevation="3">
          <v-card-item>
            <v-card-title>Undécima estrofa</v-card-title>
          </v-card-item>
          <v-card-text>
            Del hombre los derechos<br />
            Nariño predicando,<br />
            El alma de la lucha<br />
            Profético enseñó.<br />
            Ricaurte en San Mateo<br />
            En átomos volando<br />
            ¡Deber antes que vida!,<br />
            Con llamas escribió.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
