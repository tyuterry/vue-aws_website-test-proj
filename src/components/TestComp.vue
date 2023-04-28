<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: Object,
});

let model = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    console.log(newValue);
  },
});
</script>

<template>
  1
  <!-- <input v-model="model.a" />
  <input v-model="model.b" /> -->
</template>
