<script setup lang="ts">
let prop = defineProps({
  title: String,
  link: String,
});
</script>

<template>
  <div>
    <a
      :href="prop.link"
      class="text-txtPaimary decoration-0 hover:text-txtActive"
      >{{ prop.title }}</a
    >
  </div>
</template>

<style scoped lang="scss"></style>
