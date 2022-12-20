<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import AccountOptionDropdown from './AccountOptionDropdown.vue'


class AccountOptData {
  name: string;
  link: string;
  childs: AccountOptData[];

  constructor(name?: string, link?: string, childs?: AccountOptData[]) {
    this.name = name != null ? name : "";
    this.link = link != null ? link : "";
    this.childs = childs != null ? childs : [];
  }
}

class AccountOption extends AccountOptData {
  id: string = "";
  hover: Ref<boolean> = ref(false);
  zindex: Ref<number> = ref(0);
  childs: AccountOption[] = [];

  constructor(accountData: AccountOptData, id: string) {
    super(accountData.name, accountData.link, accountData.childs);
    this.id = id;
    this.hover = false;
    this.zindex = 0;
    this.childs = accountData.childs.map((e, index) => {
      return new AccountOption(e, id + index);
    });
  }
}

let accountOptData: AccountOptData[] = [
  {
    name: "聯絡我們",
    link: "",
    childs: []
  },
  {
    name: "支援",
    link: "",
    childs: [
      {
        name: "支援中心",
        link: "",
        childs: []
      },
      {
        name: "知識中心",
        link: "",
        childs: []
      },
      {
        name: "AWS Support 概觀",
        link: "",
        childs: []
      },
      {
        name: "AWS re:Post",
        link: "",
        childs: []
      },
    ]
  },
  {
    name: "中文(繁體)",
    link: "",
    childs: [
      {
        name: "English",
        link: "",
        childs: []
      },
      {
        name: "中文(繁體)",
        link: "",
        childs: []
      },
      {
        name: "中文 (简体)",
        link: "",
        childs: []
      },
    ]
  },
  {
    name: "我的帳戶",
    link: "",
    childs: [
      {
        name: "AWS 主控台管理",
        link: "",
        childs: []
      },
      {
        name: "帳單帳戶",
        link: "",
        childs: []
      },
      {
        name: "帳單與成本管理",
        link: "",
        childs: []
      },
    ]
  },
].map((e, index) => {
  return new AccountOptData(e.name, e.link, e.childs);
});

let accountOpts: AccountOption[] = reactive([]);
accountOpts.push(...accountOptData.map((e, index) => {
  return new AccountOption(e, index + "");
}));

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
    <a :href="option.link" class="option pointer txt-no_" v-if="option.childs.length == 0">{{ option.name }}</a>
    <span class="option txt-no_" v-if="option.childs.length != 0" @mouseenter="onMouseEnter(option)"
      @mouseleave="onMouseLeave(option)">
      <span class="pointer">{{ option.name }}</span>
      <AccountOptionDropdown :hover="option.hover" :childs="option.childs" :zindex="option.zindex" />
    </span>
  </template>
  <span class="consoleBtn pointer">登入控制台</span>
</template>


<style scoped lang="scss">
.consoleBtn {
  color: var(--aws-text-white);
  font-weight: 800;
  background-color: var(--aws-theme-color);
  margin-left: 20px;
  padding: 5px 20px;
  border-radius: 40px;
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