<script setup lang="ts">
import type { ResourcesWithTitleLink } from "@/models/ResourcesWithTitleLink.model";
import SectionCategoryItemVue from "./SectionCategoryItem.vue";

const props = defineProps({
  datas: Array<ResourcesWithTitleLink>,
});

</script>

<template>
  <div>
    <div v-for="item in props.datas" :key="item.title">
      <SectionCategoryItemVue
        :is-active="false"
        :text="item.title"
        :img-url="item.imgUrl"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
