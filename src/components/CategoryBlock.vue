<script setup lang="ts">
import LinkTitleAndSummaryVue from "./LinkTitleAndSummary.vue";

let prop = defineProps(["text", "childs"]);
</script>

<template>
  <div class="category">
    <div class="categoryText">{{ prop.text }}</div>
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
.category {
  margin-top: 40px;
  .categoryText {
    font-size: medium;
  }
}
</style>
