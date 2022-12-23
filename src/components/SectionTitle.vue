<script setup lang="ts">
const prop = defineProps({
  text: String,
});
</script>
<template>
  <div class="w-full font-bold text-4xl text-white pt-20px pb-40px">
    {{ prop.text }}
  </div>
</template>
<style scoped lang="scss"></style>
