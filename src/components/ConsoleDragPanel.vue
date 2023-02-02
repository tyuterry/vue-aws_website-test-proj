<script setup lang="ts">
import { computed } from "vue";
import draggable from "vuedraggable";
import ConsoleDragElementVue from "./ConsoleDragElementFrame.vue";

let drag = false;

let nowData = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: any) {
    emit("update:modelValue", newValue);
  },
});

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: Array<any>,
});
</script>

<template>
  <draggable
    v-model="nowData"
    @start="drag = true"
    @end="drag = false"
    handle=".handle"
    item-key="id"
    class="flex flex-row flex-wrap"
  >
    <template #item="{ element }">
      <ConsoleDragElementVue
        :id="element.id"
        :styleClass="element.styleClass"
        :data="element.data"
        :type="element.type"
      >
      </ConsoleDragElementVue>
    </template>
  </draggable>
</template>

<style></style>
