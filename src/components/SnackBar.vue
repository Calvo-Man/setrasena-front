<template>
    <div class="text-center ma-2">
      
      <v-snackbar v-model="localSnackbar" :color="color">
        {{ text }}
  
        <template v-slot:actions>
          <v-btn color="white" variant="text" @click="localSnackbar = false">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        localSnackbar: false, // Local state for controlling the snackbar visibility
      };
    },
    props: {
      text: {
        type: String,
      },
      color: {
        type: String,
      },
      snackbar: {
        type: Boolean,
      },
    },
    watch: {
      snackbar(val) {
        // Update localSnackbar when the parent changes the snackbar prop
        this.localSnackbar = val;
      },
      localSnackbar(val) {
        // Emit the updated snackbar state to the parent
        this.$emit('update:snackbar', val);
      },
    },
  };
  </script>
  
  