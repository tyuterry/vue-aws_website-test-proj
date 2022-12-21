<script setup lang="ts">
import LinkTitleAndSummaryVue from "./LinkTitleAndSummary.vue";

let prop = defineProps(["text", "childs"]);
</script>

<template>
  <div class="mt-40px">
    <div class="text-base">{{ prop.text }}</div>
    <hr />
    <div v-for="child of prop.childs" :key="child">
      <LinkTitleAndSummaryVue
        :title="child.title"
        :text="child.text"
        :link="child.link"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
