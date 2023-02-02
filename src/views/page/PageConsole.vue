<script setup lang="ts">
import { RouterView } from "vue-router";
import ConsoleTopNavBarVue from "@/components/ConsoleTopNavBar.vue";
</script>

<template>
  <main class="bg-white h-[100vh] w-[100vw] overflow-auto">
    <ConsoleTopNavBarVue></ConsoleTopNavBarVue>
    <RouterView />
  </main>
</template>

<style scoped lang="scss"></style>
