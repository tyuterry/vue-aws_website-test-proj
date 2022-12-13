<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import AccountOptionDropdown from './AccountOptionDropdown.vue'


  class accountOptData{
    name: string = "";
    link: string = "";
    child: accountOptData[] = [];
  }

  class accountOption extends accountOptData{
    id: string = "";
    hover: Ref<boolean> = ref(false);
    child: accountOption[] = [];
  }

  let accountOpts : accountOption[] = reactive([]);
  accountOpts.push(...[
    {
    id:"1",
      name:"聯絡我們",
    link:"",
    hover: ref(false),
    child:[]
    },
    {
    id:"2",
      name:"支援",
    link:"",
    hover: ref(false),
    child:[
      { 
        id:"3",
        name:"支援中心",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"4",
        name:"知識中心",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"5",
        name:"AWS Support 概觀",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"6",
        name:"AWS re:Post",
        link:"",
        hover: ref(false),
        child:[]
      },
    ]
    },
    {
    id:"7",
      name:"中文(繁體)",
    link:"",
    hover: ref(false),
    child:[
      { 
        id:"8",
        name:"English",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"9",
        name:"中文(繁體)",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"10",
        name:"中文 (简体)",
        link:"",
        hover: ref(false),
        child:[]
      },
    ]
    },
    {
    id:"11",
      name:"我的帳戶",
    link:"",
    hover: ref(false),
    child:[
      { 
        id:"12",
        name:"AWS 主控台管理",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"13",
        name:"帳單帳戶",
        link:"",
        hover: ref(false),
        child:[]
      },
      { 
        id:"14",
        name:"帳單與成本管理",
        link:"",
        hover: ref(false),
        child:[]
      },
    ]
    },
  ]);

  function mouseover(opt:accountOption){
    opt.hover = ref(true);
  }

  function mouseout(opt:accountOption){
    setTimeout(() => {
      opt.hover = ref(false);
    }, 300);
  }
</script>


<template>
  <template  v-for="option in accountOpts" :key="option.id" class="optionList">
    <a :href="option.link" class="option" v-if="option.child.length == 0">{{option.name}}</a>
    <span class="option" v-if="option.child.length != 0" @mouseenter="mouseover(option)" @mouseleave="mouseout(option)" >
      {{option.name}}
      <AccountOptionDropdown :hover="option.hover" :child="option.child"/>
    </span>
  </template>
  <span class="consoleBtn">登入控制台</span>
</template>


<style>
  .consoleBtn{
    color: white;
    font-weight: 800;
    background-color: rgb(236, 114, 17);
    padding: 5px 20px;    
    border-radius: 40px;
  }
  .consoleBtn:hover{
    background-color: rgb(235, 95, 7)
  }

  .optionList{
    display: flex;
    flex-direction: row;
  }
  .option, a.option{
    color:rgb(221,221, 221);
    text-decoration: none;
    padding: 10px;
    cursor :pointer;    
  }
  .option:hover{
    color: #f8991d;
  }
</style>