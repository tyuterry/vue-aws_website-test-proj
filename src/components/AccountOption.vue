<script setup lang="ts">
import { AccountOption } from "@/models/AccountOption.model";
import { AccountOptData } from "@/models/AccountOptionData.model";
import { reactive } from "vue";
import AccountOptionDropdown from "./AccountOptionDropdown.vue";

let accountOptData: AccountOptData[] = [
  {
    name: "聯絡我們",
    link: "",
    childs: [],
  },
  {
    name: "支援",
    link: "",
    childs: [
      {
        name: "支援中心",
        link: "",
        childs: [],
      },
      {
        name: "知識中心",
        link: "",
        childs: [],
      },
      {
        name: "AWS Support 概觀",
        link: "",
        childs: [],
      },
      {
        name: "AWS re:Post",
        link: "",
        childs: [],
      },
    ],
  },
  {
    name: "中文(繁體)",
    link: "",
    childs: [
      {
        name: "English",
        link: "",
        childs: [],
      },
      {
        name: "中文(繁體)",
        link: "",
        childs: [],
      },
      {
        name: "中文 (简体)",
        link: "",
        childs: [],
      },
    ],
  },
  {
    name: "我的帳戶",
    link: "",
    childs: [
      {
        name: "AWS 主控台管理",
        link: "",
        childs: [],
      },
      {
        name: "帳單帳戶",
        link: "",
        childs: [],
      },
      {
        name: "帳單與成本管理",
        link: "",
        childs: [],
      },
    ],
  },
].map((e) => {
  return new AccountOptData(e.name, e.link, e.childs);
});

let accountOpts: AccountOption[] = reactive([]);
accountOpts.push(
  ...accountOptData.map((e, index) => {
    return new AccountOption(e, index + "");
  })
);

function onMouseEnter(opt: AccountOption) {
  opt.hover = true;
  opt.zindex = getAccountOptZIndex();
}

function onMouseLeave(opt: AccountOption) {
  opt.zindex = getAccountOptZIndex();
  setTimeout(() => {
    opt.hover = false;
  }, 300);
}

function getAccountOptZIndex() {
  let totalZindex = 0;
  accountOpts.forEach((e) => {
    if (e.hover == true) {
      totalZindex += 1;
    }
  });
  return totalZindex + 10;
}
</script>

<template>
  <template v-for="option in accountOpts" :key="option.id">
    <a
      :href="option.link"
      class="text-txtPaimary p-10px cursor-pointer decoration-0 hover:text-txtActive"
      v-if="option.childs.length == 0"
      >{{ option.name }}</a
    >
    <span
      class="text-txtPaimary p-10px cursor-pointer decoration-0 hover:text-txtActive"
      v-if="option.childs.length != 0"
      @mouseenter="onMouseEnter(option)"
      @mouseleave="onMouseLeave(option)"
    >
      <span class="cursor-pointer">{{ option.name }}</span>
      <AccountOptionDropdown
        :hover="option.hover"
        :childs="option.childs"
        :zindex="option.zindex"
      />
    </span>
  </template>
  <span
    class="text-txtWhite bg-themeColor font-extrabold py-5px px-20px ml-20px rounded-40px cursor-pointer hover:bg-themeColorActive"
    >登入控制台</span
  >
</template>

<style scoped lang="scss"></style>
