<script setup lang="ts">
  import AccountOption from './AccountOption.vue'

</script>

<template>
  <div class="topnav flex-column fixed full-width">
    <div>
      <div class="logo inline-block">
        <a href="/home"  >
          <span class="logoImg block">按一下這裡可返回 Amazon Web Services 首頁</span>
        </a>
      </div>
      <div class="account">
        <AccountOption />
      </div>
    </div>
    <div style="padding-top: 20px;">ALL the Nav option</div>
  </div>
</template>

<style scoped lang="scss">
  .topnav{
    box-sizing: border-box;
    background-color: var(--aws-background-dark);
    top: 0;
    z-index: 200;
    padding: 0 2rem;
  }
  .logo{
    margin: 18px 20px -12px 10px;    
  }

  .logoImg{
    width: 59px;
    height:35px;
    background: transparent url('../assets/image/aws_smile_logo.png') no-repeat scroll 0 0;
    text-indent:  -99999px;
  }

  .account{    
    float: right;    
    margin: 18px 10px 10px 10px;
  }

</style>