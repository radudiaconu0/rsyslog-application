<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>System logs</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <Table />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Table from "./components/Table.vue";

export default Vue.extend({
  name: "App",

  components: {
    Table,
  },

  data: () => ({
    //
  }),
});
</script>
