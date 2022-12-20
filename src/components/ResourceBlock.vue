<script setup lang="ts">
  let prop = defineProps(['title', 'text'])
</script>

<template>
<div class="resourceblock flex-auto pointer">
  <div class="text-padding title">{{ prop.title }}</div>
  <hr style="margin:0 10px" />
  <div class="text-padding text">{{ prop.text }}</div>
</div>
</template>


<style scoped lang="scss">
.resourceblock{
  border: 1px solid;
  border-top: 5px solid #00a2ca;
  .text-padding{
    padding: 5px 15px;
  }

  .title{
    font-size: small;
  }

  .text{
    color: var(--aws-text-white);
    font-size: small;
    &:hover{
      color: var(--aws-text-active);
    }
  }
}

</style>