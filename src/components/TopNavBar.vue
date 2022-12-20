<script setup lang="ts">
import { getCurrentInstance, ref, type Ref } from "vue";
import AccountOption from "./AccountOption.vue";
import NavItem from "./NavItem.vue";

import NavReInventViewVue from "@/views/nav/NavReInventView.vue";
import NavProductViewVue from "@/views/nav/NavProductView.vue";

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
  "進一步探索",
];

let isNavTitleNowHover: boolean = false;
let isNavTitleShow: Ref<boolean> = ref(false);
let isShadowShow: Ref<boolean> = ref(false);

let navItemTarget = ref("ReInventViewVue");

const navItemViews = {
  NavReInventViewVue,
  NavProductViewVue,
};

function onMouseEnter(title: string, index: number) {
  isNavTitleNowHover = true;
  isNavTitleShow.value = true;

  let navItemsKey = Object.keys(navItemViews);
  if (navItemsKey.length > index) {
    navItemTarget.value = Object.keys(navItemViews)[index];
  } else {
    navItemTarget.value = "";
  }
}

function onMouseLeave(title: string) {
  isNavTitleNowHover = false;
  setTimeout(() => {
    if (isNavTitleNowHover != true) {
      isNavTitleShow.value = false;
    }
  }, 300);
}

function onShadowChange(value: boolean) {
  isShadowShow.value = value;
  document.body.classList.toggle("noScroll", value);
}
</script>

<template>
  <div class="topNav flex-column fixed full-width">
    <div class="topContent">
      <div>
        <div class="logo inline-block">
          <a href="/home">
            <span class="logoImg block"
              >按一下這裡可返回 Amazon Web Services 首頁</span
            >
          </a>
        </div>
        <div class="accountOption">
          <AccountOption />
        </div>
      </div>
      <div style="padding-top: 20px">
        <template v-for="(title, index) of navTitle">
          <span
            class="navTitle inline-block pointer"
            @mouseenter="onMouseEnter(title, index)"
            @mouseleave="onMouseLeave(title)"
          >
            {{ title }}
          </span>
        </template>
      </div>
    </div>
    <div class="navContainer" :class="{ scrollPadding: isShadowShow }">
      <NavItem :hover="isNavTitleShow" @show-change="onShadowChange">
        <Transition mode="out-in">
          <!-- <ProductViewVue></ProductViewVue> -->
          <component :is="navItemViews[navItemTarget]"></component>
        </Transition>
      </NavItem>
    </div>
  </div>
  <Transition>
    <div v-if="isShadowShow" class="fullShadow absolute"></div>
  </Transition>
</template>

<style scoped lang="scss">
.noScroll .topNav .top-block {
  padding: 0 calc(2rem + 15px) 0 2rem;
}
.topNav {
  box-sizing: border-box;
  top: 0;
  z-index: 200;

  .topContent {
    background-color: var(--aws-background-dark);
    padding: 0 2rem;
    z-index: 20;

    .accountOption {
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
  }
}

.navContainer {
  display: flex;
  justify-content: center;
}
.scrollPadding {
  padding-right: 15px;
}

.logo {
  margin: 18px 20px -12px 10px;
  .logoImg {
    width: 59px;
    height: 35px;
    background: transparent url("../assets/image/Nav/aws_smile_logo.png")
      no-repeat scroll 0 0;
    text-indent: -99999px;
  }
}

.fullShadow {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
