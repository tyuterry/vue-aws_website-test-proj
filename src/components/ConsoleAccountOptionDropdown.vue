<script setup lang="ts">
import { ref, type Ref, watch } from "vue";

const emit = defineEmits(["update:close"]);
const props = defineProps({
  open: Boolean,
  right: {
    default: true,
    type: Boolean,
  },
  closeIcon: {
    default: false,
    type: Boolean,
  },
  darkTheme: {
    type: Boolean,
    default: true,
  },
});

function closeDropdown() {
  emit("update:close", false);
}
</script>

<template>
  <div class="inline z-20">
    <div
      v-show="props.open"
      :class="{
        'right-0': props.right,
        'left-0': !props.right,
        'bg-bgDark': props.darkTheme,
        'bg-bgWhite': !props.darkTheme,
      }"
      class="translate-y-5px absolute"
    >
      <FAicon
        v-if="props.closeIcon"
        icon="fa-solid fa-xmark"
        :class="{
          'text-txtWhite': props.darkTheme,
          'text-txtDark': !props.darkTheme,
        }"
        class="top-5px right-10px absolute cursor-pointer z-50 text-2xl"
        @click="closeDropdown()"
      />
      <slot>Seems Nothing Here :(</slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
