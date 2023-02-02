<script setup lang="ts">
import { ref, type Ref } from "vue";

const props = defineProps({
  content: Object,
});

let bulletins: Ref<Array<any>> = ref([
  {
    month: "1月",
    day: "18",
    title: "Amazon SNS 現在支援 VPC 端點政策",
    link: "",
  },
  {
    month: "6月",
    day: "9",
    title:
      "Amazon EMR 現在支援以 AWS Key Management Service (KMS) 客戶受管 CMK 將日誌檔加密，享有彈性更大的安全",
    link: "",
  },
  {
    month: "7月",
    day: "15",
    title: "AWS DataSync 現在可以將資料傳入和傳出 AWS Snowcone",
    link: "",
  },
]);
</script>

<template>
  <div class="flex flex-col items-center justify-start h-full overflow-hidden">
    <div
      v-for="bulletin of bulletins"
      :key="bulletin.title"
      class="flex flex-row w-full px-15px gap-10px my-15px"
    >
      <div class="flex-shrink-0 flex flex-col items-center justify-center">
        <div class="text-sm">{{ bulletin.month }}</div>
        <div class="font-semibold text-xl">{{ bulletin.day }}</div>
      </div>

      <a :href="bulletin.link" class="text-blue-500 hover:underline"
        ><div class="line-clamp flex-auto items-center flex text-lg">
          {{ bulletin.title }}
        </div></a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.line-clamp {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
