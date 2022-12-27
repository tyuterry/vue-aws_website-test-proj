<script setup lang="ts">
import type { FooterData } from "@/models/FooterData.model";
import LinkTitle from "./LinkTitle.vue";

const props = defineProps({
  footerWebsiteMap: Array<FooterData>,
});
</script>

<template>
  <div class="flex flex-row gap-10px bg-[#242f3e] py-20px px-30px">
    <div
      v-for="data of props.footerWebsiteMap"
      :key="data.text"
      class="basis-1/5"
    >
      <div class="font-bold text-lg mb-20px">{{ data.text }}</div>
      <div v-for="link of data.links" :key="link.text" class="text-sm">
        <LinkTitle :title="link.text" :link="link.link" />
      </div>
    </div>
    <div class="basis-1/5 flex flex-col">
      <span
        class="text-txtWhite text-center bg-themeColor font-bold py-5px px-20px rounded-[40px] cursor-pointer hover:bg-themeColorActive"
        >建立AWS帳戶</span
      >
      <div class="flex flex-row justify-center mt-15px">
        <FAicon class="text-2xl p-5px" icon="fa-brands fa-twitter"></FAicon>
        <FAicon class="text-2xl p-5px" icon="fa-brands fa-facebook-f"></FAicon>
        <FAicon class="text-2xl p-5px" icon="fa-brands fa-twitch"></FAicon>
        <FAicon class="text-2xl p-5px" icon="fa-brands fa-youtube"></FAicon>
        <FAicon class="text-2xl p-5px" icon="fa-soild fa-podcast"></FAicon>
        <FAicon class="text-2xl p-5px" icon="fa-soild fa-envelope"></FAicon>
      </div>
      <div class="text-sm mt-20px">
        Amazon 是支持平等就業機會的雇主：
        少數民族/女性/殘障人士/退伍軍人/性別認同/性取向/年齡。
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
