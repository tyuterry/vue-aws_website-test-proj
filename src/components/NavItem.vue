<script setup lang="ts">
import { getCurrentInstance, ref, watch, type Ref } from "vue";

const instance = getCurrentInstance();

const prop = defineProps(["hover"]);
const emit = defineEmits<{
  (e: "showChange", value: boolean): void;
}>();

let selfnowhover: boolean = false;
let selfshow: Ref<boolean> = ref(false);


watch(prop, async (newprop, oldprop) => {
  if (prop.hover) {
    selfshow.value = true;
    emit("showChange", true);
  } else if (!selfnowhover) {
    selfshow.value = false;
    emit("showChange", false);
  }
});

function onmouseenter() {
  selfnowhover = true;
  selfshow.value = true;
  emit("showChange", true);
}

function onmouseleave() {
  selfnowhover = false;
  setTimeout(() => {
    if (!selfnowhover && !prop.hover) {
      selfshow.value = false;
      emit("showChange", false);
    }
  }, 500);
}

function closeNavItem(){
  selfnowhover = false;
  selfshow.value = false;
  emit("showChange", false);
}
</script>

<template>
  <Transition name="down">
    <div
      v-show="selfshow"
      class="itemblock inline-block shadow bodertop"
      @mouseenter="onmouseenter()"
      @mouseleave="onmouseleave()"
    >
      <FAicon
        icon="fa-solid fa-xmark"
        class="xmark pointer"
        @click="closeNavItem()"
      />
      <slot>Seems Nothing Here :(</slot>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.itemblock {
  width: 90%;
  height: calc(95vh - 108px);
  background-color: var(--aws-background-dark);
  align-self: center;

  &.shadow {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &.bodertop {
    border-top: 1px solid #141a22;
  }

  .xmark {
    color: var(--aws-text);
    position: absolute;
    font-size: x-large;
    top: 20px;
    right: 20px;
  }
}
.down-enter-active,
.down-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.down-enter-from{
  opacity: 0;
  transform: translateY(-50px);
}
.down-enter-to
 {
  opacity: 1;
  transform: translateY(0);
}


</style>
