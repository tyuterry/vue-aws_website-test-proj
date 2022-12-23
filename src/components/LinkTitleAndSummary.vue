<script setup lang="ts">
let prop = defineProps({
  title: String,
  text: String,
  link: String,
});
</script>

<template>
  <div class="pb-2px group cursor-pointer">
    <a
      :href="prop.link"
      class="text-sm text-txtWhite decoration-0 group-hover:text-txtActive"
    >
      {{ prop.title }}
    </a>
    <div class="text-sm text-txtGray decoration-0">
      {{ prop.text }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
