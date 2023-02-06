<script setup lang="ts">
import { ref, type Ref } from "vue";
import ConsoleDragPanelVue from "@/components/ConsoleDragPanel.vue";
import ModalComponentVue from "@/components/ModalComponent.vue";
import type { ConsoleData } from "@/models/ConsoleData.model";

import axios from "axios";

let consoleData: Ref<Array<ConsoleData>> = ref([]);
let modalshow: Ref<boolean> = ref(false);

query();

function query() {
  axios.get("/api/consoleData").then((response: { data: any }) => {
    consoleData.value = JSON.parse(response.data[0].data).content;
  });
}

function update() {
  axios
    .post("/api/consoleData/1", {
      data: JSON.stringify({ content: consoleData.value }),
    })
    .then(() => {
      query();
    });
}

function openModal() {
  modalshow.value = true;
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
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +快速存取
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +圖表顯示
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +公告
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +圓餅圖檢視
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +即時訊息
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +通知面板
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +控制台狀態
        </div>
        <div
          class="flex-auto w-[40%] text-center h-30px border cursor-pointer m-5px"
        >
          +表格檢視
        </div>
      </div>
    </ModalComponentVue>
  </div>
</template>

<style lang="scss"></style>
