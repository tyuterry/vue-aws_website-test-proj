<script setup lang="ts">
let props = defineProps({
  title: String,
  link: String,
});
</script>

<template>
  <div>
    <a
      :href="props.link"
      class="text-txtPaimary decoration-0 hover:text-txtActive"
    >
      {{ props.title }}
      <slot></slot>
    </a>
  </div>
</template>

<style scoped lang="scss"></style>
