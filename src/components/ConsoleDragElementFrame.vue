<script setup lang="ts">
import QuickAccessVue from "@/dragelements/QuickAccess.vue";
import BulletinsVue from "@/dragelements/Bulletins.vue";
import BarChartVue from "@/dragelements/BarChart.vue";
import DoughnutChartVue from "@/dragelements/DoughnutChart.vue";
import QuickInformationVue from "@/dragelements/QuickInformation.vue";

const dragComponents: { [key: string]: any } = {
  quickaccess: QuickAccessVue,
  bulletins: BulletinsVue,
  barchart: BarChartVue,
  doughnutchart: DoughnutChartVue,
  quickinformation: QuickInformationVue,
};

const props = defineProps({
  id: String,
  styleClass: String,
  data: Object({
    content: Object,
    option: Object,
  }),
  type: String,
});
</script>

<template>
  <div class="p-10px" :class="[styleClass, { 'w-[33%]': styleClass == '' }]">
    <div class="flex h-[350px] border flex-col bg-bgWhite">
      <div class="handle border-b-[1px] cursor-grab h-40px text-lg">
        {{ props.id }}
      </div>
      <component
        v-if="props.type != undefined"
        :is="dragComponents[props.type as string]"
      ></component>
    </div>
  </div>
</template>

<style></style>
