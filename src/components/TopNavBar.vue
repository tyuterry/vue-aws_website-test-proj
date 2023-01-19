<script setup lang="ts">
import { ref, type Component, type Ref } from "vue";
import AccountOption from "./AccountOption.vue";
import NavItem from "./NavItem.vue";

import NavReInventViewVue from "@/views/nav/NavReInventView.vue";
import NavProductViewVue from "@/views/nav/NavProductView.vue";

let navTitle: Ref<{ name: string }[]> = ref([]);

fetch("/api/navTitle")
  .then((res) => res.json())
  .then((json) => {
    navTitle.value = json;
  });

let isNavTitleNowHover: boolean = false;
let isNavTitleShow: Ref<boolean> = ref(false);
let isShadowShow: Ref<boolean> = ref(false);

let navItemTarget = ref(0);
const navItemViews: Component[] = [NavReInventViewVue, NavProductViewVue];

function onMouseEnter(index: number) {
  isNavTitleNowHover = true;
  setTimeout(() => {
    if (isNavTitleNowHover == true) {
      isNavTitleShow.value = true;
      let navItemsKey = Object.keys(navItemViews);
      if (navItemsKey.length > index) {
        navItemTarget.value = index;
      } else {
        navItemTarget.value = 0;
      }
    }
  }, 300);
}

function onMouseLeave() {
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
  <div class="box-border top-0 z-[200] flex flex-col fixed w-full">
    <div class="bg-bgDark py-0 px-8 z-20">
      <div>
        <div class="m-[18px_20px_-12px_10px] inline-block">
          <a href="/home">
            <span class="logoImg w-[59px] h-35px indent-[-9999px] block"
              >按一下這裡可返回 Amazon Web Services 首頁</span
            >
          </a>
        </div>
        <div class="float-right m-[18px_10px_10px_10px] noScrollPadding">
          <AccountOption />
        </div>
      </div>
      <div class="pt-20px">
        <template v-for="(title, index) of navTitle" :key="title">
          <span
            class="text-txtPaimary p-[0px_10px_22px_10px] hover:text-txtActive inline-block cursor-pointer"
            @mouseenter="onMouseEnter(index)"
            @mouseleave="onMouseLeave()"
          >
            {{ title?.name }}
          </span>
        </template>
      </div>
    </div>
    <div class="flex justify-center" :class="{ 'p-r-15px': isShadowShow }">
      <NavItem :hover="isNavTitleShow" @show-change="onShadowChange">
        <Transition mode="out-in">
          <component :is="navItemViews[navItemTarget]"></component>
        </Transition>
      </NavItem>
    </div>
  </div>
  <Transition>
    <div
      v-if="isShadowShow"
      class="w-full h-full top-0 left-0 z-50 bg-white/[.7] absolute"
    ></div>
  </Transition>
</template>

<style scoped lang="scss">
.noScroll .noScrollPadding {
  padding-right: 15px;
}

.p-r-15px {
  padding-right: 15px;
}

.logoImg {
  background: transparent url("../assets/image/Nav/aws_smile_logo.png")
    no-repeat scroll 0 0;
}
</style>
