<script setup lang="ts">
let props = defineProps({
  open: Boolean,
});
</script>

<template>
  <div
    v-show="props.open"
    class="z-[1000] fixed top-0 left-0 items-center w-full h-full justify-center flex bg-[#00000050]"
  >
    <div
      class="max-w-[80vw] max-h-[80vh] min-h-[200px] min-w-[30%] bg-bgWhite p-20px rounded-[5px]"
    >
      <div>標題</div>
      <div>123</div>
    </div>
  </div>
</template>

<style></style>
