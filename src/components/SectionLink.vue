<script setup lang="ts">
const props = defineProps({
  text: String,
  link: String,
  marginTop: {
    type: String,
  },
});
</script>

<template>
  <div :style="{ marginTop: props.marginTop ?? '10px' }" class="w-fit">
    <a
      :href="props.link"
      class="font-bold text-white text-lg border-b-[2px] border-sky-600"
      >{{ props.text }}</a
    >
  </div>
</template>

<style scoped lang="scss"></style>
