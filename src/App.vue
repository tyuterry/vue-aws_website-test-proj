<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNavBar from "@/components/TopNavBar.vue";
import PageFooterVue from "@/components/PageFooter.vue";
import type { FooterData } from "./models/FooterData.model";
import LanguageSwitchFooterVue from "./components/LanguageSwitchFooter.vue";
import type { TitleLink } from "./models/TitleLink.model";

const footerData: FooterData[] = [
  {
    text: "了解 AWS",
    links: [
      {
        text: "什麼是 AWS？",
        link: "",
      },
      {
        text: "什麼是雲端運算？",
        link: "",
      },
      {
        text: "AWS 多樣性、公平性與包容性",
        link: "",
      },
      {
        text: "什麼是 DevOps？",
        link: "",
      },
      {
        text: "什麼是容器？",
        link: "",
      },
      {
        text: "什麼是資料湖？",
        link: "",
      },
      {
        text: "AWS 雲端安全",
        link: "",
      },
      {
        text: "最新消息",
        link: "",
      },
      {
        text: "部落格",
        link: "",
      },
      {
        text: "新聞稿",
        link: "",
      },
    ],
  },
  {
    text: "AWS 資源",
    links: [
      {
        text: "入門",
        link: "",
      },
      {
        text: "培訓與認證",
        link: "",
      },
      {
        text: "AWS 解決方案組合",
        link: "",
      },
      {
        text: "架構中心",
        link: "",
      },
      {
        text: "產品和技術常見問答集",
        link: "",
      },
      {
        text: "分析師報告",
        link: "",
      },
      {
        text: "AWS 合作夥伴",
        link: "",
      },
    ],
  },
  {
    text: "AWS 開發人員",
    links: [
      {
        text: "開發人員中心",
        link: "",
      },
      {
        text: "軟體開發套件與工具",
        link: "",
      },
      {
        text: ".NET on AWS",
        link: "",
      },
      {
        text: "在 AWS 上執行的 Python",
        link: "",
      },
      {
        text: "在 AWS 上執行的 Java",
        link: "",
      },
      {
        text: "在 AWS 上執行的 PHP",
        link: "",
      },
      {
        text: "在 AWS 上執行的 JavaScript",
        link: "",
      },
    ],
  },
  {
    text: "說明",
    links: [
      {
        text: "聯絡我們",
        link: "",
      },
      {
        text: "提交支援票證",
        link: "",
      },
      {
        text: "知識中心",
        link: "",
      },
      {
        text: "AWS re:Post",
        link: "",
      },
      {
        text: "AWS Support 概觀",
        link: "",
      },
      {
        text: "法律",
        link: "",
      },
      {
        text: "AWS 徵才",
        link: "",
      },
    ],
  },
];

const langs: TitleLink[] = [
  { text: "عربي", link: "" },
  { text: "Bahasa", link: "" },
  { text: "Indonesia", link: "" },
  { text: "Deutsch", link: "" },
  { text: "English", link: "" },
  { text: "Español", link: "" },
  { text: "Français", link: "" },
  { text: "Italiano", link: "" },
  { text: "Português", link: "" },
  { text: "Tiếng", link: "" },
  { text: "Việt", link: "" },
  { text: "Türkçe", link: "" },
  { text: "Ρусский", link: "" },
  { text: "ไทย", link: "" },
  { text: "日本語", link: "" },
  { text: "한국어", link: "" },
  { text: "中文 (简体)", link: "" },
  { text: "中文 (繁體)", link: "" },
];
</script>

<template>
  <TopNavBar />
  <RouterView style="margin-top: 108px" />
  <PageFooterVue :footerWebsiteMap="footerData" />
  <LanguageSwitchFooterVue :langs="langs"></LanguageSwitchFooterVue>
</template>

<style scoped lang="scss"></style>
