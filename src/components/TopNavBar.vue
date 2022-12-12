<script setup lang="ts">

</script>

<template>
  <div class="topnav">
    <div>
      <div class="logo">
        <div class="logo-img">LOGO</div>
      </div>
      <div class="account">Account option</div>
    </div>
    <div>ALL the Nav option</div>
  </div>
</template>

<style scoped>
  .topnav{
    position: relative;
    position: fixed;
    width:fit-content;
    top: 0;
  }
  .logo{
    margin: 18px 20px -12px 10px;
    
    display: inline-block;
  }

  .logo-img{
    width: 59px;
    height:35px;
  }

  .account{    
    float: right;    
    margin: 18px 10px 10px 10px;
  }

</style>