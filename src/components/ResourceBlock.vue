<script setup lang="ts">
let props = defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <div
    class="border border-solid border-t-[5px] border-t-[#00a2ca] flex-auto cursor-pointer"
  >
    <div class="py-5px px-15px text-sm text-txtWhite">{{ props.title }}</div>
    <hr style="margin: 0 10px" />
    <div class="py-5px px-15px text-sm text-txtWhite hover:text-txtActive">
      {{ props.text }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
