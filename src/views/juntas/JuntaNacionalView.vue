<template>
    <v-container>
      <!-- Card para los miembros del equipo -->
      <v-card class="mb-4">
        <v-card-title class="headline text-center title">Miembros del Equipo</v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="(member, index) in teamMembers" :key="index" cols="12" md="6" lg="4">
              <v-card>
                <v-card-title class="text-body-1">{{ member.name }} {{ member.lastname }}</v-card-title>
                <v-card-subtitle>{{ member.cargo }}</v-card-subtitle>
                <v-card-text>
                 
                  <div><strong>Regional:</strong> {{ member.regional }}</div>
                  <div><strong>Email:</strong> <a :href="'mailto:' + member.email">{{ member.email }}</a></div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
  
      <!-- Card para la comisión estatutaria de reclamos -->
      <v-card class="mb-4">
        <v-card-title class="headline">Comisión Estatutaria de Reclamos</v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="(member, index) in comisionMembers" :key="index" cols="12" md="6" lg="4">
              <v-card>
                <v-card-title class="text-body-1">{{ member.name }} {{ member.lastname }}</v-card-title>
                <v-card-subtitle>{{ member.cargo }}</v-card-subtitle>
                <v-card-text>
                  
                  <div><strong>Regional:</strong> {{ member.regional }}</div>
                  <div><strong>Email:</strong> <a :href="'mailto:' + member.email">{{ member.email }}</a></div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "TeamMembers",
    data() {
      return {
        // Miembros del equipo
        teamMembers: [
          { name: 'ENIER ENRIQUE', lastname: 'CAAMAÑO FERNANDEZ', cc: '77102900', regional: 'CESAR', email: 'eecaamano@sena.edu.co', cargo: 'PRESIDENTE' },
          { name: 'JULIA CARMELA', lastname: 'TORRES LÓPEZ', cc: '33332335', regional: 'BOLIVAR', email: 'milojuli1122@gmail.com', cargo: 'VICEPRESIDENTE' },
          { name: 'VERA JUDITH', lastname: 'IBANEZ DE JURE', cc: '32810252', regional: 'ATLANTICO', email: 'vjibanezj@sena.edu.co', cargo: 'FISCAL' },
          { name: 'JOSE NICOLAS', lastname: 'ACOSTA SIERRA', cc: '78026364', regional: 'CORDOBA', email: 'jacostas@sena.edu.co', cargo: 'SECRETARIO GENERAL' },
          { name: 'WILSON', lastname: 'MARTINEZ CUESTA', cc: '79461801', regional: 'BOGOTA - CUNDINAMARCA', email: 'wmartinezc@sena.edu.co', cargo: 'SECRETARIO DE ASUNTOS DE GEENRO' },
          { name: 'CAMPO ELIAS', lastname: 'OLAVE RODRIGUEZ', cc: '16633036', regional: 'HUILA', email: 'colave@sena.edu.co', cargo: 'SECRETARIO DE ORGANZIACIONES' },
          { name: 'JULIO ENRIQUE', lastname: 'BUITRAGO CASTRO', cc: '79044072', regional: 'BOGOTA - CUNDINAMARCA', email: 'jebuitrago@sena.edu.co', cargo: 'TESORERO' },
          { name: 'ORESTE ALI', lastname: 'MAYORGA RODRIGUEZ', cc: '73166175', regional: 'BOLIVAR', email: 'omayorgar@sena.edu.co', cargo: 'SECRETARIO DE EDUCACION' },
          { name: 'SAMIR LEONARDO', lastname: 'TOLOZA MARIÑO', cc: '13740217', regional: 'SANTANDER', email: 'stoloza@sena.edu.co', cargo: 'SECRETARIO DE COMUNICACIONES' },
          { name: 'JHON ALBEIRO', lastname: 'DIAZ CUADRO', cc: '7919951', regional: 'META', email: 'jhondc@misena.edu.co', cargo: 'SECRETARIO JURIDICO' }
        ],
        // Miembros de la comisión estatutaria
        comisionMembers: [
          { name: 'ANGELA YOHANA', lastname: 'OREJARENA PEREIRA', cc: '63501703', regional: 'ATLANTICO', email: 'aorejarena@sena.edu.co', cargo: 'COMISION ESTATUTARIA DE RECLAMOS' },
          { name: 'HERNAN ANTONIO', lastname: 'RANGEL ENCISO', cc: '93360418', regional: 'TOLIMA', email: 'hrangele@sena.edu.co', cargo: 'COMISION ESTATUTARIA DE RECLAMOS' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .title{
    background-color: var(--dark);
    color: var(--light);
    margin-bottom: 10px;
  }
  .v-card {
    margin-bottom: 20px;
  }
  .v-card-title {
    font-weight: bold;
  }
  .v-card-subtitle {
    font-style: italic;
  }
  </style>
  