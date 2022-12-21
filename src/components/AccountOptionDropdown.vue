<script setup lang="ts">
import { ref, type Ref, watch } from "vue";

const prop = defineProps(
  // {
  //   "hover": Boolean,
  //   "childs": AccountOption,
  //   "zindex" : Number,
  // }
  ["hover", "childs", "zindex"]
);
let isNowHover: boolean = false;
let isShow: Ref<boolean> = ref(false);

watch(prop, async () => {
  if (prop.hover) {
    isShow.value = true;
  } else if (!isNowHover) {
    isShow.value = false;
  }
});

function onMouseEnter() {
  isNowHover = true;
  isShow.value = true;
}

function onMouseLeave() {
  isNowHover = false;
  setTimeout(() => {
    if (!isNowHover && !prop.hover) {
      isShow.value = false;
    }
  }, 1000);
}
function closeDropdown() {
  isNowHover = false;
  isShow.value = false;
}
</script>

<template>
  <div class="inline">
    <FAicon icon="fa-solid fa-caret-down" />
    <div
      v-show="isShow"
      :style="{ zIndex: prop.zindex }"
      class="dropDownArea absolute"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div class="upArrow absolute"></div>
      <FAicon
        icon="fa-solid fa-xmark"
        class="xMark noHover pointer"
        @click="closeDropdown()"
      />
      <div
        v-for="child of prop.childs"
        :key="child"
        class="dropDownItem pointer no-txt_"
      >
        <a :href="child.href">{{ child.name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropDownArea {
  left: 0;
  background-color: var(--aws-background-white);
  border-radius: 5px;
  padding: 15px;
  transform: translate(-50%, 5px);
}

.dropDownItem,
.dropDownItem > a {
  padding: 5px;
  white-space: nowrap;
  color: var(--aws-text-dark);
  font-size: small;

  &:hover {
    color: var(--aws-text-active);
  }
}

.upArrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent #fff transparent;
  transform: translate(11px, -20px);
  right: 50%;
}

.xMark {
  color: var(--aws-text-dark);
  position: absolute;
  top: 5px;
  right: 10px;
}
</style>
