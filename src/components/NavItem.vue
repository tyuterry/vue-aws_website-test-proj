<script setup lang="ts">
import { ref, watch, type Ref } from "vue";

const prop = defineProps({
  hover: Boolean,
});
const emit = defineEmits<{
  (e: "showChange", value: boolean): void;
}>();

let isNowHover: boolean = false;
let isShow: Ref<boolean> = ref(false);

watch(prop, async () => {
  if (prop.hover) {
    isShow.value = true;
    emit("showChange", true);
  } else if (!isNowHover) {
    isShow.value = false;
    emit("showChange", false);
  }
});

function onMouseEnter() {
  isNowHover = true;
  setTimeout(() => {
    if (isNowHover == true) {
      isShow.value = true;
      emit("showChange", true);
    }
  }, 500);
}

function onMouseLeave() {
  isNowHover = false;
  setTimeout(() => {
    if (!isNowHover && !prop.hover) {
      isShow.value = false;
      emit("showChange", false);
    }
  }, 500);
}

function closeNavItem() {
  isNowHover = false;
  isShow.value = false;
  emit("showChange", false);
}
</script>

<template>
  <Transition name="down">
    <div
      v-show="isShow"
      class="w-[90%] h-[calc(95vh-108px)] bg-bgDark self-center inline-block shadow-[0px_2px_5px_0px_rgba(0,0,0,0.5)] border-t-[1px] border-solid border-[#141a22]"
      @mouseenter="onMouseEnter()"
      @mouseleave="onMouseLeave()"
    >
      <FAicon
        icon="fa-solid fa-xmark"
        class="text-txtPaimary absolute text-xl top-20px right-20px cursor-pointer"
        @click="closeNavItem()"
      />
      <slot>Seems Nothing Here :(</slot>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.down-enter-active,
.down-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.down-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
