<script setup lang="ts">
const props = defineProps({
  content: Object,
});

let costStrings = [
  { title: "本月成本", data: "0.01" },
  { title: "預測的月底成本", data: "0.24" },
  { title: "上月成本", data: "1.50" },
];
</script>

<template>
  <div class="flex flex-col items-start justify-start h-full">
    <div
      v-for="cost of costStrings"
      :key="cost.title"
      class="flex flex-col w-full my-10px px-20px"
    >
      <div
        class="text-sm my-5px underline underline-offset-2 decoration-dotted"
      >
        {{ cost.title }}
      </div>
      <div class="text-3xl">US${{ cost.data }}</div>
      <hr />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
