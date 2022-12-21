<script setup lang="ts">
import { ref, type Ref, watch } from "vue";

const prop = defineProps(
  // {
  //   "hover": Boolean,
  //   "childs": AccountOption,
  //   "zindex" : Number,
  // }
  ["hover", "childs", "zindex"]
);
let isNowHover: boolean = false;
let isShow: Ref<boolean> = ref(false);

watch(prop, async () => {
  if (prop.hover) {
    isShow.value = true;
  } else if (!isNowHover) {
    isShow.value = false;
  }
});

function onMouseEnter() {
  isNowHover = true;
  isShow.value = true;
}

function onMouseLeave() {
  isNowHover = false;
  setTimeout(() => {
    if (!isNowHover && !prop.hover) {
      isShow.value = false;
    }
  }, 1000);
}
function closeDropdown() {
  isNowHover = false;
  isShow.value = false;
}
</script>

<template>
  <div class="inline">
    <FAicon icon="fa-solid fa-caret-down" />
    <div
      v-show="isShow"
      :style="{ zIndex: prop.zindex }"
      class="bg-bgWhite left-0 rounded-[5px] p-15px -translate-x-1/2 translate-y-5px absolute"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        class="right-1/2 w-0 h-0 absolute translate-x-[11px] -translate-y-[20px] border-t-0 border-b-[6px] border-x-[6px] border-[transparent_transparent_white_transparent]"
      ></div>
      <FAicon
        icon="fa-solid fa-xmark"
        class="top-5px right-10px text-txtDark absolute cursor-pointer"
        @click="closeDropdown()"
      />
      <div
        v-for="child of prop.childs"
        :key="child"
        class="p-5px whitespace-nowrap text-txtDark font-sm cursor-pointer decoration-0 hover:text-txtActive"
      >
        <a :href="child.href">{{ child.name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
