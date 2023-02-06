<script setup lang="ts">
import { ref, type Ref } from "vue";
import ConsoleAccountOptionDropdownVue from "./ConsoleAccountOptionDropdown.vue";
import LinkItemAndContentVue from "./LinkItemAndContent.vue";
import LinkTitleVue from "./LinkTitle.vue";
import NavConsoleViewVue from "../views/nav/NavConsoleView.vue";
import GolbalSearchInputVue from "./GolbalSearchInput.vue";

let consoleNotices: Ref<{ label: string; data: string }[]> = ref([]);
let consoleSupport: { title: string; icon: boolean; divide: boolean }[] = [
  { title: "支援中心", icon: false, divide: false },
  { title: "專家協助", icon: true, divide: false },
  { title: "re:Post", icon: true, divide: true },
  { title: "文件", icon: true, divide: false },
  { title: "培訓", icon: true, divide: false },
  { title: "入門資源中心", icon: true, divide: true },
  { title: "傳送意見回饋", icon: false, divide: false },
];
let consoleLocation: Ref<{ label: string; code: string }[]> = ref([]);
let consoleAccount: { label: string; divide: false }[] = [
  { label: "帳戶 ID", divide: false },
  { label: "帳戶", divide: false },
  { label: "組織", divide: false },
  { label: "Service Quotas", divide: false },
  { label: "帳單儀表板", divide: false },
  { label: "安全憑證", divide: false },
  { label: "設定", divide: false },
];

let nowOption: Ref<string> = ref("");
let nowService: Ref<string> = ref("");

fetch("/api/consoleNotice")
  .then((res) => res.json())
  .then((json) => {
    consoleNotices.value = json;
  });

fetch("/api/consoleLocation")
  .then((res) => res.json())
  .then((json) => {
    consoleLocation.value = json;
  });

function onOptionClick(optionName: string) {
  nowOption.value = optionName;
}
function onServiceClick(serviceName: string) {
  nowService.value = serviceName;
}
function onClickServiceOutSide() {
  nowService.value = "";
}
function onClickAccountOptionOutSide() {
  nowOption.value = "";
}
function onServiceDropdownClose() {
  nowService.value = "";
}
</script>

<template>
  <div class="flex flex-row w-full bg-bgDark">
    <RouterLink to="/console" class="flex-grow-0">
      <div class="px-[16px] py-[9px] w-fit border border-transparent">
        <div class="consoleLogo h-[20px] w-[33px]"></div>
      </div>
    </RouterLink>

    <div class="divide" />

    <div
      class="flex-grow-0 flex flex-row justify-center items-center w-fit border border-transparent"
      v-click-outside-element="onClickServiceOutSide"
    >
      <ConsoleAccountOptionDropdownVue
        class="self-center h-5px mt-auto"
        :open="nowService == 'service'"
        :right="false"
        :closeIcon="true"
        @update:close="onServiceDropdownClose()"
      >
        <div class="w-[1000px] max-w-[80vw] bg-bgDark h-[90vh]">
          <NavConsoleViewVue> </NavConsoleViewVue>
        </div>
      </ConsoleAccountOptionDropdownVue>
      <div
        @click="onServiceClick('service')"
        class="flex flex-row gap-10px px-[16px] py-[9px] cursor-pointer"
      >
        <div class="menuIcon h-[16px] w-[16px] text-white"></div>
        <div class="text-[10px] text-white">服務</div>
      </div>
    </div>

    <div class="flex-auto">
      <GolbalSearchInputVue></GolbalSearchInputVue>
    </div>

    <div
      class="flex-grow-0 flex flex-row items-center"
      v-click-outside-element="onClickAccountOptionOutSide"
    >
      <div
        class="mx-15px h-full flex items-center cursor-pointer hover:text-themeColorActive"
        @click="onOptionClick('bell')"
      >
        <FAicon icon="fa-regular fa-bell" />
      </div>
      <ConsoleAccountOptionDropdownVue
        class="self-center h-5px mt-auto"
        :open="nowOption == 'bell'"
      >
        <div class="w-[200px] bg-bgDark">
          <LinkItemAndContentVue
            v-for="notice of consoleNotices"
            :key="notice.label"
            class="my-10px px-15px cursor-pointer"
            :title="notice.label"
            :content="notice.data"
          >
          </LinkItemAndContentVue>
          <div class="bg-[#414750] w-full h-[1px]" />
          <LinkTitleVue class="my-10px px-15px pt-5px" title="事件日誌">
          </LinkTitleVue>
        </div>
      </ConsoleAccountOptionDropdownVue>

      <div class="divide self-stretch" />
      <div
        class="mx-15px h-full flex items-center cursor-pointer hover:text-themeColorActive"
        @click="onOptionClick('question')"
      >
        <FAicon icon="fa-regular fa-circle-question" />
      </div>
      <ConsoleAccountOptionDropdownVue
        class="self-center h-5px mt-auto"
        :open="nowOption == 'question'"
      >
        <div class="w-[200px] bg-bgDark">
          <template v-for="support of consoleSupport" :key="support.title">
            <LinkTitleVue
              class="my-10px px-15px cursor-pointer"
              :title="support.title"
            >
              <FAicon
                v-if="support.icon"
                icon="fa-soild fa-arrow-up-right-from-square"
              />
            </LinkTitleVue>
            <div v-if="support.divide" class="bg-[#414750] w-full h-[1px]" />
          </template>
        </div>
      </ConsoleAccountOptionDropdownVue>

      <div class="divide self-stretch" />
      <div
        class="mx-15px h-full flex items-center cursor-pointer hover:text-themeColorActive"
        @click="onOptionClick('local')"
      >
        <span>地區</span>
        <FAicon icon="fa-solid fa-caret-down" class="px-5px" />
      </div>
      <ConsoleAccountOptionDropdownVue
        class="self-center h-5px mt-auto"
        :open="nowOption == 'local'"
      >
        <div class="w-[300px] bg-bgDark max-h-[80vh] overflow-auto">
          <LinkItemAndContentVue
            v-for="notice of consoleLocation"
            :key="notice.label"
            class="my-10px px-15px text-sm cursor-pointer"
            :title="notice.label"
            :content="notice.code"
          >
          </LinkItemAndContentVue>
          <LinkTitleVue
            class="my-10px px-15px text-sm cursor-pointer"
            title="管理區域"
          >
          </LinkTitleVue>
        </div>
      </ConsoleAccountOptionDropdownVue>

      <div class="divide self-stretch" />
      <div
        class="mx-15px h-full flex items-center cursor-pointer hover:text-themeColorActive"
        @click="onOptionClick('account')"
      >
        <span>Name</span>
        <FAicon icon="fa-solid fa-caret-down" class="px-5px" />
      </div>
      <ConsoleAccountOptionDropdownVue
        class="self-center h-5px mt-auto"
        :open="nowOption == 'account'"
      >
        <div class="w-[150px] bg-bgDark">
          <LinkItemAndContentVue
            v-for="notice of consoleAccount"
            :key="notice.label"
            class="my-10px px-15px cursor-pointer"
            :title="notice.label"
          >
          </LinkItemAndContentVue>
        </div>
      </ConsoleAccountOptionDropdownVue>
    </div>
  </div>
</template>

<style scoped lang="scss">
.consoleLogo {
  background: transparent url("../assets/image/Nav/aws_smile_logo.svg")
    no-repeat scroll 0 0;
}

.menuIcon {
  background: transparent url("../assets/image/Nav/menu_icon.svg") no-repeat
    scroll 0 0;
}

.divide {
  width: 2px;
  margin: 8px 0 8px 0;
  background-color: #414750;
}
</style>
