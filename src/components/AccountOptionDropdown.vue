<script setup lang="ts">

  import { ref, type Ref , watch, getCurrentInstance} from 'vue';

  const instance = getCurrentInstance();

  const prop = defineProps(['hover','child'])
  let selfnowhover:boolean = false
  let selfhover:Ref<boolean> = ref(false);

  watch(prop, async (newQuestion, oldQuestion) => {
    if(prop.hover){
      selfhover = ref(true);
    } else if( !selfnowhover){
      selfhover = ref(false);      
      instance?.proxy?.$forceUpdate();
    }
  })


  function mouseover(){
    selfnowhover = true;
    selfhover = ref(true);
  }

  function mouseout(){
    selfnowhover = false;
    setTimeout(() => {
      if(!selfnowhover && !prop.hover ){
        selfhover = ref(false);
        instance?.proxy?.$forceUpdate();
      }
    }, 500);
    
  }
</script>

<template>
  <div class="inline" >
    <FAicon icon="fa-solid fa-caret-down" />
    <div v-show="selfhover" class="dropdown" @mouseover="mouseover()" @mouseout="mouseout()">
      <div class="up"></div>
      <div v-for="child of prop.child" class="dropdownitem">
        <a :href="child.href" >{{child.name}}</a>
      </div>
    </div>
  </div>  
</template>

<style>

.inline{
  display: inline;
}
.dropdown{
  position: absolute;
  left: 0;
  background-color: white;
  z-index: 5;
  border-radius: 5px;
  padding:15px;
  transform: translate(-50%,5px);
}
.dropdownitem, .dropdownitem>a{
  padding: 5px;
  white-space: nowrap;
  color: black;
  font-size: small;
  text-decoration: none;
}
.up{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent #fff transparent;
  position: absolute;
  transform: translate(11px,-20px);
  right: 50%;
}
.dropdownitem:hover {
  color: #f8991d;
}
</style>