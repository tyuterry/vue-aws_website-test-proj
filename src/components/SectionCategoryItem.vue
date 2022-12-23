<script setup lang="ts">
const props = defineProps({
  isActive: Boolean,
  text: String,
  imgUrl: String,
});
</script>
<template>
  <div
    :class="{ 'bg-[#282c34]': props.isActive }"
    class="text-txtWhite w-[160px] h-[160px] bg-[#0F1B2A]"
  >
    <div
      :style="{
        background: 'no-repeat center/cover url(' + props.imgUrl + ')',
      }"
    ></div>
    <div>
      {{ props.text }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
