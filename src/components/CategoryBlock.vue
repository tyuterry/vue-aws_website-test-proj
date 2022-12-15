<script setup lang="ts">
  import LinkTitleAndSummaryVue from './LinkTitleAndSummary.vue';

  let prop = defineProps(['text', 'datas'])
</script>


<template>
  <div class="category-margin">
    <div class="categorytxt">{{prop.text}}</div>
    <hr />
    <div v-for="data of prop.datas">
      <LinkTitleAndSummaryVue :title="data.title" :text="data.text" :link="data.link" />
    </div>
  </div>
</template>


<style scoped lang="scss">

.category-margin{
  margin-top:40px;
}
.categorytxt{
  font-size: medium;
}

</style>