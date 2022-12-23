<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";
import type { Carousel } from "@/models/Carousel.model";

const prop = defineProps({
  slots: {
    type: Array<Carousel>,
    default: [],
  },
  indexpath: {
    type: String,
    default: "",
  },
});

let isCarouselReverse = false;
let carouselIndex = ref(0);
let intervalID = 0;
let duration = 0.2;
let clickCount = 0;

const intervalTime = 8000;

intervalID = window.setInterval(carouselStart, intervalTime);

function onNavBtnClick(index: number) {
  carouselIndexCalc(index - carouselIndex.value);
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
  if (clickCount == 0) {
    clickCount += 1;
    onClick2Carousel(-1);
  } else {
    clickCount += 1;
  }
}
function onRightClick() {
  if (clickCount == 0) {
    clickCount += 1;
    onClick2Carousel(1);
  } else {
    clickCount += 1;
  }
}

function onClick2Carousel(num: number) {
  carouselIndexCalc(num);
  setTimeout(() => {
    clickCount -= 1;
    if (clickCount != 0) {
      onClick2Carousel(num);
    }
  }, duration * 1000);
}

function onEnter(el: HTMLElement, done: gsap.Callback) {
  if (!isCarouselReverse) {
    gsap.fromTo(
      el,
      { transform: "translate(100%)" },
      { transform: "translate(0)", duration: duration, onComplete: done }
    );
  } else {
    gsap.fromTo(
      el,
      { transform: "translate(-100%)" },
      { transform: "translate(0)", duration: duration, onComplete: done }
    );
  }
}
function onLeave(el: HTMLElement, done: gsap.Callback) {
  if (!isCarouselReverse) {
    gsap.fromTo(
      el,
      { transform: "translate(0%)" },
      { transform: "translate(-100%)", duration: duration, onComplete: done }
    );
  } else {
    gsap.fromTo(
      el,
      { transform: "translate(0%)" },
      { transform: "translate(100%)", duration: duration, onComplete: done }
    );
  }
}

function carouselIndexCalc(addnum: number) {
  if (addnum < 0) {
    isCarouselReverse = true;
  } else {
    isCarouselReverse = false;
  }
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
    <div
      class="w-screen absolute"
      v-for="(slot, index) of prop.slots"
      :key="index"
    >
      <Transition :css="false" @enter="onEnter" @leave="onLeave">
        <div v-show="index == carouselIndex">
          <slot :name="slot[prop.indexpath]"></slot>
        </div>
      </Transition>
    </div>
    <div
      class="text-txtWhite flex flex-row gap-10px bottom-0 w-full mb-20px justify-center absolute"
    >
      <div v-for="(slot, index) of prop.slots" :key="slot.id">
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

<style scoped lang="scss"></style>
