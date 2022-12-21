<script setup lang="ts">
import { ref } from "vue";

const prop = defineProps(["slots", "indexpath"]);

let carouselIndex = ref(0);
let intervalID = 0;
const intervalTime = 8000;

intervalID = window.setInterval(carouselStart, intervalTime);

function onNavBtnClick(index: number) {
  carouselIndex.value = index;
}

function onMouseEnter() {
  clearInterval(intervalID);
}

function onMouseLeave() {
  intervalID = window.setInterval(carouselStart, intervalTime);
}

function carouselStart() {
  carouselIndexCalc(1);
}

function onLeftClick() {
  carouselIndexCalc(-1);
}
function onRightClick() {
  carouselIndexCalc(1);
}

function carouselIndexCalc(addnum: number) {
  if (
    carouselIndex.value + addnum < prop.slots.length &&
    carouselIndex.value + addnum >= 0
  ) {
    carouselIndex.value = carouselIndex.value + addnum;
  } else if (carouselIndex.value + addnum >= prop.slots.length) {
    carouselIndex.value = 0;
  } else if (carouselIndex.value + addnum < 0) {
    carouselIndex.value = prop.slots.length - 1;
  }
}
</script>

<template>
  <div
    style="position: initial"
    @mouseenter="onMouseEnter()"
    @mouseleave="onMouseLeave()"
  >
    <div
      class="text-txtWhite h-full w-[60px] z-10 flex items-center justify-center my-0 mx-20px text-2xl left-0 cursor-pointer absolute"
      @click="onLeftClick()"
    >
      <FAicon icon="fa-solid fa-chevron-left" />
    </div>
    <div
      class="text-txtWhite h-full w-[60px] z-10 flex items-center justify-center my-0 mx-20px text-2xl right-0 cursor-pointer absolute"
      @click="onRightClick()"
    >
      <FAicon icon="fa-solid fa-chevron-right" />
    </div>
    <TransitionGroup name="list" mode="out-in">
      <div
        class="w-screen absolute"
        v-for="(slot, index) of prop.slots"
        :key="index"
        v-show="index == carouselIndex"
      >
        <slot :name="slot[prop.indexpath]"></slot>
      </div>
    </TransitionGroup>
    <div class="flex-row gap-10px bottom-0 width-full mb-20px justify-center absolute">
      <div v-for="(slot, index) of prop.slots" :key="slot">
        <FAicon
          class="cursor-pointer"
          v-show="index == carouselIndex"
          icon="fa-solid fa-circle"
        />
        <FAicon
          class="cursor-pointer"
          v-show="index != carouselIndex"
          @click="onNavBtnClick(index)"
          icon="fa-regular fa-circle"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">



.list-enter-active,
.list-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
