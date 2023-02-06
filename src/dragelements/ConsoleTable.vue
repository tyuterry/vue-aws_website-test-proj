<script setup lang="ts">
import { reactive, ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const props = defineProps({
  content: Object,
  colspan: Number,
});
const gridApi = ref(null);

const onGridReady = (params: any) => {
  gridApi.value = params.api;
};

const rowData = reactive({
  value: [
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
  ],
});

const columnDefs = reactive({
  value: [{ field: "make" }, { field: "model" }, { field: "price" }],
});

const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1,
};
</script>
<template>
  <div class="h-full">
    <ag-grid-vue
      class="ag-theme-alpine h-full"
      height="100%"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      animateRows="true"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>
<style scoped lang="scss"></style>
