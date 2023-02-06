<script setup lang="ts">
import DoughnutChart from "@/charts/DoughnutChart.vue";
const props = defineProps({
  content: Object,
  colspan: Number,
});
const chartOptions = { responsive: true };
const chartData = {
  labels: ["1月", "2月", "3月"],
  datasets: [
    {
      label: "資料",
      data: [300, 50, 100],
      hoverOffset: 4,
    },
  ],
};
</script>

<template>
  <div
    class="h-[80%] flex items-center justify-center m-10px relative flex-row"
  >
    <DoughnutChart :chartOptions="chartOptions" :chartData="chartData" />
  </div>
</template>

<style scoped lang="scss"></style>
