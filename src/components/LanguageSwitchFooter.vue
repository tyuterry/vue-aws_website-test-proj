<script setup lang="ts">
import type { TitleLink } from "@/models/TitleLink.model";
import LinkTitle from "./LinkTitle.vue";

const props = defineProps({
  langs: Array<TitleLink>,
});

const beforeContent = "";
</script>

<template>
  <div class="flex flex-row items-center bg-[#242f3e]">
    <div class="pr-5px font-bold">語言</div>
    <div v-for="(lang, index) of langs" :key="lang.text" class="flex flex-row">
      <span v-if="index != 0" class="px-5px text-sm select-none">|</span>
      <LinkTitle
        :title="lang.text"
        :link="lang.link"
        class="text-sm"
      ></LinkTitle>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
