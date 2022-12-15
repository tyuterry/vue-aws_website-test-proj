<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import AccountOptionDropdown from './AccountOptionDropdown.vue'


class AccountOptData {
  name: string;
  link: string;
  child: AccountOptData[];

  constructor(name?: string, link?: string, child?: AccountOptData[]) {
    this.name = name != null ? name : "";
    this.link = link != null ? link : "";
    this.child = child != null ? child : [];
  }
}

class AccountOption extends AccountOptData {
  id: string = "";
  hover: Ref<boolean> | boolean = ref(false);
  zindex: Ref<number> = ref(0);
  child: AccountOption[] = [];

  constructor(accountData: AccountOptData, id: string) {
    super(accountData.name, accountData.link, accountData.child);
    this.id = id;
    this.hover = ref(false);
    this.zindex = ref(0);
    this.child = accountData.child.map((e, index) => {
      return new AccountOption(e, id + index);
    });
  }
}

let accountOptData: AccountOptData[] = [
  {
    name: "聯絡我們",
    link: "",
    child: []
  },
  {
    name: "支援",
    link: "",
    child: [
      {
        name: "支援中心",
        link: "",
        child: []
      },
      {
        name: "知識中心",
        link: "",
        child: []
      },
      {
        name: "AWS Support 概觀",
        link: "",
        child: []
      },
      {
        name: "AWS re:Post",
        link: "",
        child: []
      },
    ]
  },
  {
    name: "中文(繁體)",
    link: "",
    child: [
      {
        name: "English",
        link: "",
        child: []
      },
      {
        name: "中文(繁體)",
        link: "",
        child: []
      },
      {
        name: "中文 (简体)",
        link: "",
        child: []
      },
    ]
  },
  {
    name: "我的帳戶",
    link: "",
    child: [
      {
        name: "AWS 主控台管理",
        link: "",
        child: []
      },
      {
        name: "帳單帳戶",
        link: "",
        child: []
      },
      {
        name: "帳單與成本管理",
        link: "",
        child: []
      },
    ]
  },
].map((e, index) => {
  return new AccountOptData(e.name, e.link, e.child);
});

let accountOpts: AccountOption[] = reactive([]);
accountOpts.push(...accountOptData.map((e, index) => {
  return new AccountOption(e, index + "");
}));

function onmouseover(opt: AccountOption) {
  opt.hover = ref(true);
  opt.zindex = ref(getaccountOptZIndex());
}

function onmouseout(opt: AccountOption) {
  opt.zindex = ref(getaccountOptZIndex());
  setTimeout(() => {
    opt.hover = ref(false);
  }, 300);
}

function getaccountOptZIndex() {
  let totalZindex = 0
  accountOpts.forEach((e) => {
    if (e.hover == true) {
      totalZindex += 1;
    }
  })
  return totalZindex + 10;
}
</script>


<template>
  <template v-for="option in accountOpts" :key="option.id" class="flex-row">
    <a :href="option.link" class="option pointer txt-no_" v-if="option.child.length == 0">{{ option.name }}</a>
    <span class="option pointer txt-no_" v-if="option.child.length != 0" @mouseenter="onmouseover(option)"
      @mouseleave="onmouseout(option)">
      {{ option.name }}
      <AccountOptionDropdown :hover="option.hover" :child="option.child" :zindex="option.zindex" />
    </span>
  </template>
  <span class="consoleBtn">登入控制台</span>
</template>


<style scoped lang="scss">
.consoleBtn {
  color: var(--aws-text-white);
  font-weight: 800;
  background-color: var(--aws-theme-color);
  margin-left: 20px;
  padding: 5px 20px;
  border-radius: 40px;
  cursor: pointer;

  &:hover{
    background-color: var(--aws-theme-color-active);
  }
  
}

.option, a.option {
  color: var(--aws-text);
  padding: 10px;

  &:hover {
    color: var(--aws-text-active);
  }
}


</style>