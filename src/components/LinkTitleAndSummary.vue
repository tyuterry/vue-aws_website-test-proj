<script setup lang="ts">
let props = defineProps({
  title: String,
  text: String,
  link: String,
});
</script>

<template>
  <div class="pb-2px group cursor-pointer">
    <a
      :href="props.link"
      class="text-sm text-txtWhite decoration-0 group-hover:text-txtActive"
    >
      {{ props.title }}
    </a>
    <div class="text-sm text-txtGray decoration-0">
      {{ props.text }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
