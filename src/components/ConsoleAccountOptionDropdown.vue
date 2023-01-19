<script setup lang="ts">
import { ref, type Ref, watch } from "vue";

const prop = defineProps({
  open: Boolean,
});
let isShow: Ref<boolean> = ref(false);

watch(prop, async () => {
  console.log(prop.open);
  if (prop.open) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});
</script>

<template>
  <div class="inline">
    <div
      v-show="isShow"
      class="right-0 py-5px translate-y-5px absolute bg-bgDark"
    >
      <slot>Seems Nothing Here :(</slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
