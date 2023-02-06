<script setup lang="ts">
import type { SummaryWithTitleLink } from "@/models/SummaryWithTitleLink.model";
import LinkTitleAndSummaryVue from "./LinkTitleAndSummary.vue";

let props = defineProps({
  text: String,
  childs: Array<SummaryWithTitleLink>,
});
</script>

<template>
  <div class="mt-40px">
    <div class="text-base text-txtWhite">{{ props.text }}</div>
    <hr />
    <div v-for="child of props.childs" :key="child.title">
      <LinkTitleAndSummaryVue
        :title="child.title"
        :text="child.text"
        :link="child.link"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
