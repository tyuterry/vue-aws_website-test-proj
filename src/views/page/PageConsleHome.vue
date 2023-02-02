<script setup lang="ts">
import { ref, type Ref } from "vue";
import ConsoleDragPanelVue from "@/components/ConsoleDragPanel.vue";
import type { ConsoleData } from "@/models/ConsoleData.model";

let myArray: Ref<Array<ConsoleData>> = ref([
  {
    id: "0",
    type: "quickaccess",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "1",
    type: "barchart",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "2",
    type: "bulletins",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "3",
    type: "doughnutchart",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "4",
    type: "quickinformation",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "5",
    type: "",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "6",
    type: "",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "7",
    type: "",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "8",
    type: "",
    styleClass: "",
    data: {
      content: "",
    },
  },
  {
    id: "9",
    type: "",
    styleClass: "",
    data: {
      content: "",
    },
  },
]);
</script>
<template>
  <div class="mx-[10%] my-10px text-txtDark">
    <ConsoleDragPanelVue v-model="myArray"></ConsoleDragPanelVue>
  </div>
</template>

<style lang="scss"></style>
