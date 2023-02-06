<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Colors, type ChartData } from "chart.js";

ChartJS.register(ArcElement, Colors);

export default {
  name: "GaugeChart",
  components: { Doughnut },
  props: {
    chartData: {
      type: Object as () => ChartData<"doughnut">,
      required: true,
      default() {
        return {
          datasets: [
            {
              label: "資料",
              data: [300, 50],
            },
          ],
        };
      },
    },
    chartOptions: {
      type: Object,
      default() {
        return {
          responsive: true,
          rotation: -90,
          circumference: 180,
          plugins: {
            tooltip: {
              enabled: false,
            },
            title: {
              display: true,
              text: "Title",
            },
          },
        };
      },
    },
  },
};
</script>
