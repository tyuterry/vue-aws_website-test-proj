<script setup lang="ts">
import type { SummaryWithTitleLink } from "@/models/SummaryWithTitleLink.model";
import SectionContentItemVue from "./SectionContentItem.vue";

const props = defineProps({
  childs: Array<SummaryWithTitleLink>,
});
</script>
<template>
  <div class="flex flex-row flex-wrap mt-30px">
    <SectionContentItemVue
      v-for="child in props.childs"
      :key="child.title"
      :title="child.title"
      :text="child.text"
      :link="child.link"
    />
  </div>
</template>

<style scoped lang="scss"></style>
