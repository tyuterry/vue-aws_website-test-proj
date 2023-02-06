<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
  type ChartData,
} from "chart.js";
import type { PropType } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartData: {
      type: Object as () => ChartData<"bar">,
      required: true,
      default() {
        return {
          labels: ["1月", "2月", "3月"],
          datasets: [
            { label: "服務次數", data: [40, 60, 12] },
            { label: "服務人次", data: [10, 20, 12] },
          ],
        };
      },
    },
    chartOptions: {
      type: Object,
      default() {
        return { responsive: true };
      },
    },
  },
};
</script>
