<script setup lang="ts">
const emit = defineEmits(["update:open"]);

let props = defineProps({
  open: Boolean,
  title: String,
  closeIcon: Boolean,
});

function closeModal() {
  emit("update:open", false);
}
</script>

<template>
  <div
    v-show="props.open"
    class="z-[1000] fixed top-0 left-0 items-center w-full h-full justify-center flex bg-[#00000050]"
  >
    <div
      class="z-[1000] fixed top-0 left-0 w-full h-full"
      @click="closeModal"
    ></div>
    <div
      class="z-[1200] max-w-[80vw] max-h-[80vh] min-h-[200px] min-w-[30%] bg-bgWhite p-20px rounded-[5px] flex flex-col"
    >
      <FAicon
        v-if="!props.closeIcon"
        icon="fa-solid fa-xmark"
        class="top-5px right-10px absolute cursor-pointer z-50 text-2xl"
        @click="closeModal()"
      />
      <div class="text-2xl font-bold">{{ props.title }}</div>
      <div class="flex-auto"><slot></slot></div>
    </div>
  </div>
</template>

<style></style>
