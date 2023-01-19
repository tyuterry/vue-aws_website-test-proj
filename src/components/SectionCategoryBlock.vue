<script setup lang="ts">
import type { ResourcesWithTitleLink } from "@/models/ResourcesWithTitleLink.model";
import { ref, type Ref } from "vue";
import SectionCategoryItemVue from "./SectionCategoryItem.vue";
import SectionContnetBlock from "./SectionContnetBlock.vue";

const props = defineProps({
  datas: {
    type: Array<ResourcesWithTitleLink>,
    default: [],
  },
});
const nav = ref<Element | null>(null);

let categoryIndex: Ref<number> = ref(0);
let categoryScrollHideBtn: Ref<string> = ref("left");

function onCategoryClick(index: number) {
  categoryIndex.value = index;
}

function onCatergoryScrollBtnClick(type: "left" | "right") {
  let scrollLeft = nav.value?.scrollLeft ?? 0;
  let clientWidth = nav.value?.clientWidth ?? 1;
  let scrollWidth = nav.value?.scrollWidth ?? 1;
  let moveTotal: number = 0;

  if (type == "left") {
    moveTotal = scrollLeft + clientWidth / -2.5;
  } else {
    moveTotal = scrollLeft + clientWidth / 2.5;
  }

  if (moveTotal < 0) {
    categoryScrollHideBtn.value = "left";
  } else if (moveTotal > scrollWidth - clientWidth) {
    categoryScrollHideBtn.value = "right";
  } else {
    categoryScrollHideBtn.value = "";
  }

  nav.value?.scrollTo({
    top: 0,
    left: moveTotal,
    behavior: "smooth",
  });
}
</script>

<template>
  <div>
    <div
      v-show="categoryScrollHideBtn != 'left'"
      class="absolute z-20 left-0 w-[65px] h-full flex items-center bg-gradient-to-r from-black to-transparent hover:opacity-80 cursor-pointer"
      @click="onCatergoryScrollBtnClick('left')"
    >
      <FAicon class="text-[#32C7FF]" icon="fa-solid fa-chevron-left" />
    </div>
    <div
      v-show="categoryScrollHideBtn != 'right'"
      class="absolute z-20 right-0 w-[65px] h-full flex items-center bg-gradient-to-l from-black to-transparent hover:opacity-80 cursor-pointer"
      @click="onCatergoryScrollBtnClick('right')"
    >
      <FAicon class="text-[#32C7FF]" icon="fa-solid fa-chevron-right" />
    </div>
    <div class="flex flex-row overflow-x-hidden" ref="nav">
      <div
        v-for="(item, index) in props.datas"
        :key="item.title"
        @click="onCategoryClick(index)"
      >
        <SectionCategoryItemVue
          :is-active="categoryIndex == index"
          :text="item.title"
          :img-url="item.imgUrl"
        />
      </div>
    </div>
  </div>
  <div>
    <SectionContnetBlock
      :childs="props.datas[categoryIndex]?.childs"
    ></SectionContnetBlock>
  </div>
</template>

<style scoped lang="scss"></style>
