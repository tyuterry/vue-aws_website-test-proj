<script setup lang="ts">
import LinkTitleAndSummary from "@/components/LinkTitleAndSummary.vue";
import LinkTitleVue from "@/components/LinkTitle.vue";
import { ref, type Ref } from "vue";
import ResourceBlockVue from "@/components/ResourceBlock.vue";
import type { NavItem } from "@/models/NavItem.model";

let categoryIndex = ref(0);
let mainCategoryView: Ref<Boolean> = ref(true);

let mainCategory: NavItem[] = [
  {
    text: "最近造訪",
    link: "",
    icon: "fa-solid fa-cube",
    childs: [],
    resources: [],
  },
  {
    text: "我的最愛",
    link: "",
    icon: "fa-regular fa-star",
    childs: [],
    resources: [],
  },
  {
    text: "所有服務",
    link: "",
    childs: [],
    resources: [],
  },
];
let consoleServiceData: Ref<NavItem[]> = ref([]);

fetch("/data.json")
  .then((res) => res.json())
  .then((json) => {
    consoleServiceData.value = json["consoleServceData"];
  });
// fetch("/api/consoleServceData")
//   .then((res) => res.json())
//   .then((json) => {
//     consoleServiceData.value = json;
//   });

function onclick(index: number, mainCategory: boolean) {
  mainCategoryView.value = mainCategory;
  categoryIndex.value = index;
}
</script>

<template>
  <div class="flex flex-row mt-25px h-full">
    <div class="basis-1/3 py-30px px-30px overflow-auto">
      <div
        v-for="(data, index) of mainCategory"
        :key="data.text"
        class="text-txtPaimary text-lg font-bold py-5px hover:text-txtActive cursor-pointer"
        @click="onclick(index, true)"
      >
        {{ data.text }}
      </div>

      <div class="bg-[#414750] w-full h-[1px] my-20px" />

      <div
        v-for="(data, index) of consoleServiceData"
        :key="data.text"
        class="text-txtPaimary py-3px hover:text-txtActive cursor-pointer"
        @click="onclick(index, false)"
      >
        {{ data.text }}
      </div>
    </div>
    <div class="py-30px px-20px overflow-auto category basis-2/3">
      <portal to="service" v-slot="props">
        <div class="pb-20px text-2xl flex flex-row items-center h-[60px]">
          <div class="w-50px text-3xl">
            <FAicon
              v-if="props.services[categoryIndex]?.icon"
              :icon="props.services[categoryIndex]?.icon"
            />
          </div>
          {{ props.services[categoryIndex]?.text }}
        </div>

        <LinkTitleAndSummary
          class="pb-20px pl-50px"
          v-for="child of props.services[categoryIndex]?.childs"
          :key="child.text"
          :title="child.title"
          :text="child.text"
          :link="child.link"
        />
      </portal>

      <portal-target
        name="service"
        v-if="mainCategoryView"
        :slot-props="{ services: mainCategory }"
      />
      <portal-target
        name="service"
        v-if="!mainCategoryView"
        :slot-props="{ services: consoleServiceData }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
