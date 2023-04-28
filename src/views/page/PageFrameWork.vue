<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNavBar from "@/components/TopNavBar.vue";
import PageFooterVue from "@/components/PageFooter.vue";
import type { FooterData } from "../../models/FooterData.model";
import LanguageSwitchFooterVue from "../../components/LanguageSwitchFooter.vue";
import type { TitleLink } from "../../models/TitleLink.model";
import { ref, type Ref } from "vue";

let footerData: Ref<FooterData[]> = ref([]);

let langs: Ref<TitleLink[]> = ref([]);

fetch("/data.json")
  .then((res) => res.json())
  .then((json) => {
    langs.value = json["langs"];
  });

fetch("/data.json")
  .then((res) => res.json())
  .then((json) => {
    footerData.value = json["footerdata"];
  });
// fetch("/api/langs")
//   .then((res) => res.json())
//   .then((json) => {
//     langs.value = json;
//   });

// fetch("/api/footerdata")
//   .then((res) => res.json())
//   .then((json) => {
//     footerData.value = json;
//   });
</script>

<template>
  <TopNavBar />
  <RouterView style="margin-top: 108px" />
  <PageFooterVue :footerWebsiteMap="footerData" />
  <LanguageSwitchFooterVue :langs="langs"></LanguageSwitchFooterVue>
</template>

<style scoped lang="scss"></style>
