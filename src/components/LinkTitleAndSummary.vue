<script setup lang="ts">
let prop = defineProps(["title", "text", "link"]);
</script>

<template>
  <div class="pb-2px group cursor-pointer">
    <a
      :href="prop.link"
      class="text-sm text-txtWhite decoration-0 group-hover:text-txtActive"
    >
      {{ prop.title }}
    </a>
    <div class="text-sm text-txtWhite decoration-0">
      {{ prop.text }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
