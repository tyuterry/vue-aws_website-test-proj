<script setup lang="ts">
import { AccountOption } from "@/models/AccountOption.model";
import { AccountOptData } from "@/models/AccountOptionData.model";
import { reactive, ref, type Ref } from "vue";
import AccountOptionDropdown from "./AccountOptionDropdown.vue";

let accountOptData: Ref<AccountOptData[]> = ref([]);
let accountOpts: AccountOption[] = reactive([]);

// fetch("/api/accountOptData")
//   .then((res) => res.json())
//   .then((json) => {
//     accountOptData.value = json.map((e: any) => {
//       return new AccountOptData(e.name, e.link, e.childs);
//     });
//     accountOpts.push(
//       ...accountOptData.value.map((e, index) => {
//         return new AccountOption(e, index + "");
//       })
//     );
//   });

fetch("/data.json")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    accountOptData.value = json["accountOptData"].map((e: any) => {
      return new AccountOptData(e.name, e.link, e.childs);
    });
    accountOpts.push(
      ...accountOptData.value.map((e, index) => {
        return new AccountOption(e, index + "");
      })
    );
  });

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
  <router-link to="/console">
    <span
      class="text-txtWhite bg-themeColor font-extrabold py-5px px-20px ml-20px rounded-[40px] cursor-pointer hover:bg-themeColorActive"
      >登入控制台</span
    >
  </router-link>
</template>

<style scoped lang="scss"></style>
