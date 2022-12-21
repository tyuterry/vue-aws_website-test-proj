<script setup lang="ts">
let prop = defineProps(["title", "link"]);
</script>

<template>
  <div>
    <a :href="prop.link" class="titleLink txt-no_">{{ prop.title }}</a>
  </div>
</template>

<style scoped lang="scss">
.titleLink {
  color: var(--aws-text);
  text-decoration: none;

  &:hover {
    color: var(--aws-text-active);
  }
}
</style>
