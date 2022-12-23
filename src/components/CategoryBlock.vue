<script setup lang="ts">
import type { SummaryWithTitleLink } from "@/models/SummaryWithTitleLink.model";
import LinkTitleAndSummaryVue from "./LinkTitleAndSummary.vue";

let prop = defineProps({
  text: String,
  childs: Array<SummaryWithTitleLink>,
});
</script>

<template>
  <div class="mt-40px">
    <div class="text-base text-txtWhite">{{ prop.text }}</div>
    <hr />
    <div v-for="child of prop.childs" :key="child.title">
      <LinkTitleAndSummaryVue
        :title="child.title"
        :text="child.text"
        :link="child.link"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
