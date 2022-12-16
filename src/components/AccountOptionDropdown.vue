<script setup lang="ts">

import { ref, type Ref, watch, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const prop = defineProps(['hover', 'child', 'zindex'])
let selfnowhover: boolean = false;
let selfshow: Ref<boolean > = ref(false);

watch(prop, async ( newprop , oldprop ) => {
  if (prop.hover) {
    selfshow.value = true;
  } else if (!selfnowhover) {
    selfshow.value = false;
  }
})


function mouseenter() {
  selfnowhover = true;
  selfshow.value = true;
}

function mouseleave() {
  selfnowhover = false;
  setTimeout(() => {
    if (!selfnowhover && !prop.hover) {
      selfshow.value = false;
    }
  }, 1000);
}
function closeDropdown(){
    selfnowhover = false;
    selfshow.value = false;
  }
</script>

<template>
  <div class="inline">
    <FAicon icon="fa-solid fa-caret-down" />
    <div v-show="selfshow" :style="{zIndex:prop.zindex}" class="dropdown absolute" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <div class="up absolute "></div>
      <FAicon icon="fa-solid fa-xmark" class="xmark noHover pointer" @click="closeDropdown()"/>
      <div v-for="child of prop.child" class="dropdownitem pointer">
        <a :href="child.href">{{ child.name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  left: 0;
  background-color: var(--aws-background-white);
  border-radius: 5px;
  padding: 15px;
  transform: translate(-50%, 5px);
}

.dropdownitem,
.dropdownitem>a {
  padding: 5px;
  white-space: nowrap;
  color: var(--aws-text-dark);
  font-size: small;
  text-decoration: none;

  &:hover {
    color: var(--aws-text-active);
  }
}

.up {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent #fff transparent;
  transform: translate(11px, -20px);
  right: 50%;
}

.xmark{
  color: var(--aws-text-dark);
  position: absolute;
  top: 5px;
  right: 10px;
}
</style>