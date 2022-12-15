<script setup lang="ts">
import { getCurrentInstance, ref, watch, type Ref } from 'vue';

  const instance = getCurrentInstance();
  
  const prop = defineProps(['hover'])
  const emit = defineEmits<{
    (e:'showChange',value:boolean) :void
  }>();

  let selfnowhover: boolean = false;
  let selfshow: Ref<boolean> = ref(false);

  watch(prop, async ( newprop , oldprop ) => {
    if (prop.hover) {
      selfshow = ref(true);
      emit('showChange',true);
    } else if (!selfnowhover) {
      selfshow = ref(false);
      emit('showChange',false);
      instance?.proxy?.$forceUpdate();
    }
  })


  function mouseover() {
    selfnowhover = true;
    selfshow = ref(true);
      emit('showChange',true);
  }

  function mouseout() {
    selfnowhover = false;
    setTimeout(() => {
      if (!selfnowhover && !prop.hover) {
        selfshow = ref(false);
        emit('showChange',false);
        instance?.proxy?.$forceUpdate();
      }
    }, 500);
  }

    
</script>


<template>
  <div v-show="selfshow" class="itemblock inline-block shadow bodertop" @mouseover="mouseover()"
      @mouseout="mouseout()">
    <slot>Seems Nothing Here :(</slot>
  </div>
</template>



<style scoped lang="scss">
  .itemblock{
    width: 90%;
    height: calc( 95vh - 108px);
    background-color: var(--aws-background-dark);
    align-self: center;
    overflow: auto;

    &.shadow{
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    }

    &.bodertop{
      border-top:1px solid #141a22
    }
  }

</style>