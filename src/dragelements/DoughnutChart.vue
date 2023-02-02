<template>
  <div class="h-[80%] flex items-center justify-center m-10px relative">
    <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts">
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  Colors,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  Colors
);

export default {
  name: "DoughnutChart",
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: ["1月", "2月", "3月"],
        datasets: [
          {
            label: "資料",
            data: [300, 50, 100],
            hoverOffset: 4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
