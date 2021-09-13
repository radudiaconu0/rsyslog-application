<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
      :loading="loading"
    ></v-data-table>
    <v-btn @click="fetchLogs">Refresh logs</v-btn>
  </div>
</template>

<script lang="ts">
import axios from "axios";
interface SysEvent {
  id: number;
  current_datetime: string;
  system_total_memory: string;
  cpu_core_number: string;
  cpu_clock: string;
  root_free_space: string;
}

import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Data si ora curenta", value: "current_datetime" },
        { text: "Memoria totala sistem", value: "system_total_memory" },
        { text: "Numar core-uri CPU", value: "cpu_core_number" },
        { text: "Frecventa curenta procesor", value: "cpu_clock" },
        { text: "Spatiu liber in root", value: "root_free_space" },
      ],
      items: [] as Array<SysEvent>,
      loading: false,
    };
  },
  methods: {
    async fetchLogs() {
      try {
        this.loading = true;
        let { data } = await axios.get("http://localhost:3000/system-logs");
        this.items = data;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },

  async mounted() {
    await this.fetchLogs();
  },
});
</script>

<style>
</style>