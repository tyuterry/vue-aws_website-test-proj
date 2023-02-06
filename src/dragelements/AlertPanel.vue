<script setup lang="ts">
const props = defineProps({
  content: Object,
  colspan: Number,
});

let costStrings = [
  { title: "未解決的問題", data: "0" },
  { title: "已排定的變更", data: "0" },
  { title: "其他通知", data: "0" },
];
</script>

<template>
  <div class="flex flex-col items-start justify-start h-full">
    <div
      v-for="cost of costStrings"
      :key="cost.title"
      class="flex flex-row w-full my-10px px-20px justify-between"
    >
      <div
        class="text-sm my-5px underline underline-offset-2 decoration-dotted justify-self-end"
      >
        {{ cost.title }}
      </div>
      <div class="text-5xl">{{ cost.data }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
