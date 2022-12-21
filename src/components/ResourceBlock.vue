<script setup lang="ts">
let prop = defineProps(["title", "text"]);
</script>

<template>
  <div class="resourceContent flex-auto pointer">
    <div class="textPadding title">{{ prop.title }}</div>
    <hr style="margin: 0 10px" />
    <div class="textPadding text">{{ prop.text }}</div>
  </div>
</template>

<style scoped lang="scss">
.resourceContent {
  border: 1px solid;
  border-top: 5px solid #00a2ca;
  .textPadding {
    padding: 5px 15px;
  }

  .title {
    font-size: small;
  }

  .text {
    color: var(--aws-text-white);
    font-size: small;
    &:hover {
      color: var(--aws-text-active);
    }
  }
}
</style>
