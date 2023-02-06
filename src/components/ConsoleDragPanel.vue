<script setup lang="ts">
import { computed } from "vue";
import draggable from "vuedraggable";
import ConsoleDragElementFrameVue from "./ConsoleDragElementFrame.vue";

let drag = false;

let nowData = computed({
  get() {
    if (props.modelValue != undefined) {
      let arraySortTarget = props.modelValue;
      return arraySortTarget.sort((a: any, b: any) => {
        return a["sortNumber"] - b["sortNumber"];
      });
    } else {
      return [];
    }
  },
  set(newValue: any) {
    newValue.forEach((item: any, index: Number) => {
      item.sortNumber = index;
    });
    emit("update:modelValue", newValue);
  },
});

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: Array<any>,
  sortNumber: {
    type: String,
    required: true,
  },
});

function update_colSpan(newValue: number, target: any) {
  let data = nowData.value;
  let targetindex = data.findIndex((element: any) => {
    return element.id == target;
  });
  data[targetindex].colSpan = newValue;
  emit("update:modelValue", data);
}

function delete_byId(id: any) {
  let data = nowData.value;
  data = data.filter((item: any) => {
    return item.id != id;
  });
  emit("update:modelValue", data);
}
</script>

<template>
  <draggable
    v-model="nowData"
    @start="drag = true"
    @end="drag = false"
    handle=".handle"
    item-key="id"
    class="flex flex-row flex-wrap"
    animation="500"
    easing="cubic-bezier(1, 0, 0, 1)"
  >
    <template #item="{ element }">
      <ConsoleDragElementFrameVue
        :id="element.id"
        :title="element.title"
        :colSpan="element.colSpan"
        :data="element.data"
        :type="element.type"
        class="widthTransition"
        @update:col-span="update_colSpan($event, element.id)"
        @delete:id="delete_byId($event)"
      >
      </ConsoleDragElementFrameVue>
    </template>
  </draggable>
</template>

<style>
.widthTransition {
  transition: width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
</style>
