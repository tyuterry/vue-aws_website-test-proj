<script setup lang="ts">
import { getCurrentInstance, ref, type Ref } from 'vue';
import AccountOption from './AccountOption.vue'
import NavItem from './NavItem.vue'

let navTitle: string[] = [
  "re:Invent",
  "產品",
  "解決方案",
  "定價",
  "文件",
  "了解",
  "合作夥伴",
  "AWS Marketplace",
  "客戶支援",
  "事件",
  "進一步探索"
]

const instance = getCurrentInstance();

let navTitleNowHover: boolean = false;
let navTitleShow: Ref<boolean> = ref(false);
let shaodwShow: Ref<boolean> = ref(false);

function onmouseover(title: string) {
  navTitleNowHover = true;
  navTitleShow = ref(true);
  instance?.proxy?.$forceUpdate();
}

function onmouseout(title: string) {
  navTitleNowHover = false
  setTimeout(() => {
    if( navTitleNowHover != true ){
      navTitleShow = ref(false);
      instance?.proxy?.$forceUpdate();
    }
  }, 300);
}

function shadowShow(value:boolean){
  shaodwShow = ref(value);
  instance?.proxy?.$forceUpdate();
}

</script>

<template>
  <div class="topnav flex-column fixed full-width">
    <div class="top-block">
      <div>
        <div class="logo inline-block">
          <a href="/home">
            <span class="logoImg block">按一下這裡可返回 Amazon Web Services 首頁</span>
          </a>
        </div>
        <div class="account">
          <AccountOption />
        </div>
      </div>
      <div style="padding-top: 20px;">
        <template v-for="title of navTitle">
          <span class="navTitle inline-block pointer" @mouseenter="onmouseover(title)" @mouseleave="onmouseout(title)">
            {{ title }}
          </span>
        </template>
      </div>
    </div>
    <NavItem :hover="navTitleShow" @show-change="shadowShow"/>
  </div>
  <div v-if="shaodwShow" class="fullShadow absolute" ></div>
</template>

<style scoped lang="scss">
.topnav {
  box-sizing: border-box;
  top: 0;
  z-index: 200;

  .top-block{
    background-color: var(--aws-background-dark);
    padding: 0 2rem;
    z-index: 20;
  }
}


.logo {
  margin: 18px 20px -12px 10px;
}

.logoImg {
  width: 59px;
  height: 35px;
  background: transparent url('../assets/image/aws_smile_logo.png') no-repeat scroll 0 0;
  text-indent: -99999px;
}

.account {
  float: right;
  margin: 18px 10px 10px 10px;
}

.navTitle {
  color: var(--aws-text);
  padding: 0px 10px 22px 10px;

  &:hover {
    color: var(--aws-text-active);
  }
}


.fullShadow{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(255,255,255,0.7);
  }
</style>