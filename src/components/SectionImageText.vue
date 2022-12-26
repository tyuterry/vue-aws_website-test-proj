<script setup lang="ts">
import SectionLink from "./SectionLink.vue";

const props = defineProps({
  title: String,
  text: String,
  imgUrl: String,
  link: String,
});
</script>

<template>
  <div class="w-fit">
    <img :src="props.imgUrl" />
    <div class="text-lg font-bold">{{ props.title }}</div>
    <div class="h-[60px]">{{ props.text }}</div>
    <SectionLink text="隨需觀看 »" link=""></SectionLink>
  </div>
</template>

<style scoped lang="scss"></style>
