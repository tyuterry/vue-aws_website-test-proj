<script setup lang="ts">
import LinkTitleAndSummary from "@/components/LinkTitleAndSummary.vue";
import LinkTitleVue from "@/components/LinkTitle.vue";
import { ref, type Ref } from "vue";
import ResourceBlockVue from "@/components/ResourceBlock.vue";
import type { NavItem } from "@/models/NavItem.model";

let categoryIndex = ref(0);
let navItemData: Ref<NavItem[]> = ref([]);

fetch("/api/navItemData")
  .then((res) => res.json())
  .then((json) => {
    navItemData.value = json;
  });

function onMouseEnter(index: number) {
  categoryIndex.value = index;
}
</script>

<template>
  <div class="flex flex-row my-0 mx-50px h-full">
    <div class="basis-1/5 py-30px overflow-auto">
      <div
        v-for="(data, index) of navItemData"
        :key="data.text"
        class="text-txtPaimary py-3px hover:text-txtActive cursor-pointer"
        @mouseenter="onMouseEnter(index)"
      >
        {{ data.text }}
      </div>
    </div>
    <div class="py-30px px-20px overflow-auto category basis-2/5">
      <LinkTitleVue
        class="pb-20px"
        :title="navItemData[categoryIndex]?.text"
        :link="navItemData[categoryIndex]?.link"
      />
      <LinkTitleAndSummary
        class="pb-20px"
        v-for="child of navItemData[categoryIndex]?.childs"
        :key="child.text"
        :title="child.title"
        :text="child.text"
        :link="child.link"
      />
    </div>
    <div
      class="basis-2/5 py-30px px-20px text-txtWhite overflow-auto flex flex-col"
    >
      <div
        v-for="resource of navItemData[categoryIndex]?.resources"
        :key="resource.title"
      >
        {{ resource.title }}
        <div class="flex flex-wrap flex-row">
          <ResourceBlockVue
            class="m-5px flex-[1_0_47%]"
            v-for="child of resource.childs"
            :key="child.text"
            :title="child.title"
            :text="child.text"
            :link="child.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
