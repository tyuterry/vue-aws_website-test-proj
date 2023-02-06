<script setup lang="ts">
import BarChart from "@/charts/BarChart.vue";
const props = defineProps({
  content: Object,
  colspan: Number,
});

function chartOptions() {
  return {
    responsive: true,
    indexAxis: "y",
    aspectRatio: props.colspan,
  };
}
function chartData() {
  return {
    labels: ["1月", "2月", "3月"],
    datasets: [
      { label: "服務次數", data: [40, 60, 12] },
      { label: "服務人次", data: [10, 20, 12] },
    ],
  };
}
</script>

<template>
  <div class="h-full flex items-center justify-center m-10px">
    <BarChart :chartOptions="chartOptions()" :chartData="chartData()" />
  </div>
</template>

<style scoped lang="scss"></style>
