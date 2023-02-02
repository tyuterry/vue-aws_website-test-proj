<script setup lang="ts">
import { ref, type Ref, watch } from "vue";

const emit = defineEmits(["onClose"]);
const prop = defineProps({
  open: Boolean,
  right: {
    default: true,
    type: Boolean,
  },
  closeIcon: {
    default: false,
    type: Boolean,
  },
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

function closeDropdown() {
  isShow.value = false;
  emit("onClose");
}
</script>

<template>
  <div class="inline z-20">
    <div
      v-show="isShow"
      :class="{ 'right-0': prop.right, 'left-0': !prop.right }"
      class="py-5px translate-y-5px absolute bg-bgDark"
    >
      <FAicon
        v-if="prop.closeIcon"
        icon="fa-solid fa-xmark"
        class="top-5px right-10px absolute cursor-pointer z-50 text-txtWhite text-2xl"
        @click="closeDropdown()"
      />
      <slot>Seems Nothing Here :(</slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
