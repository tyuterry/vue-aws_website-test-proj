<script setup lang="ts">
let prop = defineProps(["title", "text"]);
</script>

<template>
  <div
    class="border border-solid border-t-[5px] border-t-[#00a2ca] flex-auto cursor-pointer"
  >
    <div class="py-5px px-15px text-sm text-txtWhite">{{ prop.title }}</div>
    <hr style="margin: 0 10px" />
    <div class="py-5px px-15px text-sm text-txtWhite hover:text-txtActive">{{ prop.text }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
