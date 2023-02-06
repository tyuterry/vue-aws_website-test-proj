<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
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
  type ChartData,
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
  props: {
    chartData: {
      type: Object as () => ChartData<"doughnut">,
      required: true,
      default() {
        return {
          labels: ["1月", "2月", "3月"],
          datasets: [
            {
              label: "資料",
              data: [300, 50, 100],
              hoverOffset: 4,
            },
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
