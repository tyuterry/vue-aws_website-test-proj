<script setup lang="ts">
import { ref, watch, type Ref } from "vue";

const prop = defineProps(["hover"]);
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
      class="itemContent inline-block shadow boderTop"
      @mouseenter="onMouseEnter()"
      @mouseleave="onMouseLeave()"
    >
      <FAicon
        icon="fa-solid fa-xmark"
        class="xMark pointer"
        @click="closeNavItem()"
      />
      <slot>Seems Nothing Here :(</slot>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.itemContent {
  width: 90%;
  height: calc(95vh - 108px);
  background-color: var(--aws-background-dark);
  align-self: center;

  &.shadow {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &.boderTop {
    border-top: 1px solid #141a22;
  }

  .xMark {
    color: var(--aws-text);
    position: absolute;
    font-size: x-large;
    top: 20px;
    right: 20px;
  }
}

/* Transition name:down Animation */

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
