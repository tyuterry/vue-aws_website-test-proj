<script setup lang="ts">
let prop = defineProps(["title", "text", "link"]);
</script>

<template>
  <div class="linkTitleContent pointer">
    <a :href="prop.link" class="linkTitle">{{ prop.title }}</a>
    <div class="LinkTitleSummary">{{ prop.text }}</div>
  </div>
</template>

<style scoped lang="scss">
.linkTitleContent {
  padding-bottom: 2px;
  .linkTitle {
    font-size: small;
    color: var(--aws-text-white);
    text-decoration: none;
  }
  .LinkTitleSummary {
    font-size: small;
    color: var(--aws-text);
    text-decoration: none;
  }

  &:hover > .linkTitle {
    color: var(--aws-text-active);
  }
}
</style>
