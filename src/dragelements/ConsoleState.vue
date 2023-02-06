<script setup lang="ts">
import GaugeChartVue from "@/charts/GaugeChart.vue";
const props = defineProps({
  content: Object,
  colspan: Number,
});

function chartOptions(title: string) {
  return {
    responsive: true,
    rotation: -90,
    circumference: 180,
    aspectRatio: props.colspan ?? 1,
    plugins: {
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
}

function chartData(value: number, total: number) {
  return {
    datasets: [
      {
        label: "資料",
        data: [value, total - value],
      },
    ],
  };
}

const datasets = [
  {
    title: "CPU",
    value: 32,
    total: 100,
  },
  {
    title: "Memory",
    value: 64,
    total: 100,
  },
  {
    title: "HDD",
    value: 23,
    total: 100,
  },
  {
    title: "Network",
    value: 5,
    total: 100,
  },
];
</script>

<template>
  <div class="flex flex-row flex-wrap h-full">
    <div
      v-for="data of datasets"
      :key="data.title"
      class="flex-[0_0_auto] w-[50%] flex flex-col justify-center items-center px-20px"
    >
      <GaugeChartVue
        :chartOptions="chartOptions(data.title)"
        :chartData="chartData(data.value, data.total)"
      ></GaugeChartVue>
      <div class="translate-y-[-50%]">{{ data.value }}%</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
