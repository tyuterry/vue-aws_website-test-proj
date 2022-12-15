<script setup lang="ts">
  let prop = defineProps(['text', 'link'])
</script>

<template>
  <div class="titlelink-padding">
    <a :href="prop.link" class="titlelink">{{prop.text}}</a>
  </div>
</template>


<style scoped lang="scss">
  .titlelink-padding{
    padding: 5px;
  }
  .titlelink{
    color: var(--aws-text);
    text-decoration: none;

    &:hover{
      color: var(--aws-text-active);
    }
  }

</style>