<script setup lang="ts">
const props = defineProps({
  title: String,
  text: String,
  link: String,
});
</script>
<template>
  <a :href="props.link" class="flex-[33.333%] flex-grow-0 px-10px mb-20px">
    <div class="border-solid border-bgWhite border h-full p-10px pb-30px">
      <div class="text-sm font-bold pb-5px text-white">{{ props.title }}</div>
      <div class="text-sm text-white">{{ props.text }}</div>
    </div>
  </a>
</template>

<style scoped lang="scss"></style>
