<script setup lang="ts">
const props = defineProps({
  isActive: Boolean,
  text: String,
  imgUrl: String,
});
</script>
<template>
  <div
    class="text-txtWhite w-[160px] h-[160px] p-30px mr-10px cursor-pointer"
    :class="{ 'bg-[#9d22c3]': props.isActive, 'bg-[#0F1B2A]': !props.isActive }"
  >
    <div
      :style="{
        background: 'no-repeat center/cover url(' + props.imgUrl + ')',
      }"
      class="w-[60px] h-[60px]"
    ></div>
    <div>
      {{ props.text }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
