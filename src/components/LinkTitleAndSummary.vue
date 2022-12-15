<script setup lang="ts">
let prop = defineProps(["title", "text", "link"]);
</script>

<template>
  <div class="LinkTitleblock pointer">
    <a :href="prop.link" class="LinkTitle">{{ prop.title }}</a>
    <div class="LinkTitleSummary">{{ prop.text }}</div>
  </div>
</template>

<style scoped lang="scss">
.LinkTitleblock {
  padding-bottom: 2px;
  .LinkTitle {
    font-size: small;
    color: var(--aws-text-white);
    text-decoration: none;
  }
  .LinkTitleSummary {
    font-size: small;
    color: var(--aws-text);
    text-decoration: none;
  }

  &:hover > .LinkTitle {
    color: var(--aws-text-active);
  }
}
</style>
