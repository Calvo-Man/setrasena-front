<template>
    <v-card
      class="mx-auto"
      width="700"
    >
    <v-card-title class="text-center">
      Regionales
    </v-card-title>
    <v-img
      class="mx-auto"
      height="500"
      lazy-src="https://picsum.photos/id/11/100/60"
      width="700"
      :src="bannerImage"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
    </v-card>
  </template>
<script >
import banner from '@/assets/RegionalesMap.jpeg';
export default {
  data() {
    return {
      bannerImage: banner,
    };
  },
};
</script>