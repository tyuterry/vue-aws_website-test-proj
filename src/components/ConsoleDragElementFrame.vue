<script setup lang="ts">
import QuickAccessVue from "@/dragelements/QuickAccess.vue";
import BulletinsVue from "@/dragelements/Bulletins.vue";
import ConsoleBarVue from "@/dragelements/ConsoleBar.vue";
import ConsoleDoughnutVue from "@/dragelements/ConsoleDoughnut.vue";
import QuickInformationVue from "@/dragelements/QuickInformation.vue";
import AlertPanelVue from "@/dragelements/AlertPanel.vue";
import ConsoleStateVue from "@/dragelements/ConsoleState.vue";
import ConsoleTable from "@/dragelements/ConsoleTable.vue";

import ConsoleAccountOptionDropdownVue from "./ConsoleAccountOptionDropdown.vue";
import { computed, ref, type Ref } from "vue";

const dragComponents: { [key: string]: any } = {
  quickaccess: QuickAccessVue,
  bulletins: BulletinsVue,
  consolebar: ConsoleBarVue,
  consoledoughunt: ConsoleDoughnutVue,
  quickinformation: QuickInformationVue,
  alertpanel: AlertPanelVue,
  consolestate: ConsoleStateVue,
  consoletable: ConsoleTable,
};

const emit = defineEmits(["update:colSpan", "delete:id"]);

const props = defineProps({
  id: String,
  title: String,
  colSpan: Number,
  data: Object({
    content: Object,
    option: Object,
  }),
  type: String,
});

const widthStyle = computed(() => {
  let widthSt = props.colSpan ?? 1;
  return `${widthSt * 33}%`;
});

let dropdownOpen: Ref<boolean> = ref(false);

function onDropdownOpen() {
  dropdownOpen.value = true;
}

function onClickOutSide() {
  dropdownOpen.value = false;
}

function updatecolSpan(colspan: number) {
  dropdownOpen.value = false;
  emit("update:colSpan", colspan);
}

function deleteElement() {
  emit("delete:id", props.id);
}
</script>

<template>
  <div class="p-10px" :style="{ width: widthStyle }">
    <div class="flex h-[400px] border flex-col bg-bgWhite">
      <div
        class="border-b-[1px] cursor-grab h-40px text-lg flex items-center px-10px w-full"
      >
        <div class="flex-auto handle">{{ props.title }}</div>
        <div
          class="w-20px justify-self-end cursor-pointer text-center"
          @click="onDropdownOpen"
          v-click-outside-element="onClickOutSide"
        >
          <FAicon icon="fa-solid fa-ellipsis-vertical" />
        </div>
        <ConsoleAccountOptionDropdownVue
          class="h-5px mt-auto text-center cursor-pointer"
          v-model:open="dropdownOpen"
          :darkTheme="false"
        >
          <div class="w-[50px] border">
            <div :class="{ active: colSpan == 1 }" @click="updatecolSpan(1)">
              窄
            </div>
            <div :class="{ active: colSpan == 2 }" @click="updatecolSpan(2)">
              寬
            </div>
            <div @click="deleteElement()">刪除</div>
          </div>
        </ConsoleAccountOptionDropdownVue>
      </div>
      <component
        v-if="props.type != undefined"
        :is="dragComponents[props.type as string]"
        :content="props.data"
        :colspan="props.colSpan"
      ></component>
    </div>
  </div>
</template>

<style>
.active {
  background-color: #00000030;
}
</style>
