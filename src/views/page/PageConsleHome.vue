<script setup lang="ts">
import { ref, type Ref } from "vue";
import ConsoleDragPanelVue from "@/components/ConsoleDragPanel.vue";
import ModalComponentVue from "@/components/ModalComponent.vue";
import { ConsoleData } from "@/models/ConsoleData.model";

import axios from "axios";

let consoleData: Ref<Array<ConsoleData>> = ref([]);
let modalshow: Ref<boolean> = ref(false);
let consoleWidget: Ref<Array<any>> = ref([]);

query();

// axios.get("/api/consoleWidget").then((response: { data: any }) => {
//   console.log(response);
//   consoleWidget.value = response.data;
// });

axios.get("/data.json").then((response: { data: any }) => {
  console.log(response);
  consoleWidget.value = response.data["consoleWidget"];
});

function query() {
  // axios.get("/api/consoleData").then((response: { data: any }) => {
  //   consoleData.value = JSON.parse(response.data[0].data).content;
  // });

  axios.get("/data.json").then((response: { data: any }) => {
    // console.log(response);
    consoleData.value = JSON.parse(
      response.data["consoleData"][0].data
    ).content;
  });
}

fetch("/data.json");
function update() {
  // axios
  //   .post("/api/consoleData/1", {
  //     data: JSON.stringify({ content: consoleData.value }),
  //   })
  //   .then(() => {
  //     query();
  //   });
}

function openModal() {
  modalshow.value = true;
}
function closeModal() {
  modalshow.value = false;
}

function addWidget(widgetType: string, widgetTitle: string) {
  let sortMax = Math.max.apply(
    null,
    consoleData.value.map(function (o) {
      return o.sortNumber;
    })
  );
  let newWidget = new ConsoleData();
  newWidget.id = Math.random().toString(36).substring(7);
  newWidget.sortNumber = sortMax + 1;
  newWidget.type = widgetType;
  newWidget.colSpan = 1;
  newWidget.title = widgetTitle;
  consoleData.value.push(newWidget);
  closeModal();
}
</script>
<template>
  <div class="mx-[10%] my-10px text-txtDark">
    <div class="flex flex-row px-20px">
      <router-link to="/">
        <div
          class="text-txtWhite bg-themeColor font-extrabold py-5px px-20px rounded-[40px] cursor-pointer hover:bg-themeColorActive"
        >
          首頁
        </div>
      </router-link>
      <div class="flex-grow"></div>
      <div
        @click="openModal()"
        class="text-txtWhite bg-themeColor font-extrabold py-5px mr-10px px-20px rounded-[40px] cursor-pointer hover:bg-themeColorActive"
      >
        新增小工具
      </div>
      <div
        @click="update()"
        class="text-txtWhite bg-themeColor font-extrabold py-5px px-20px rounded-[40px] cursor-pointer hover:bg-themeColorActive"
      >
        儲存
      </div>
    </div>

    <ConsoleDragPanelVue
      v-model="consoleData"
      :sortNumber="'sortNumber'"
    ></ConsoleDragPanelVue>

    <ModalComponentVue v-model:open="modalshow" :title="'新增小工具'">
      <div class="flex flex-row flex-wrap justify-center items-center m-20px">
        <div
          v-for="widget of consoleWidget"
          :key="widget.title"
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
          @click="addWidget(widget.type, widget.title)"
        >
          {{ widget.addtext }}
        </div>
      </div>
    </ModalComponentVue>
  </div>
</template>

<style lang="scss"></style>
