<template>
  <div class="h-full flex items-center m-10px">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
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
} from "chart.js";

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
  data() {
    return {
      chartData: {
        labels: ["1月", "2月", "3月"],
        datasets: [
          { label: "服務次數", data: [40, 60, 12] },
          { label: "服務人次", data: [10, 20, 12] },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
