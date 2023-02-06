<script setup lang="ts">
let props = defineProps({
  title: String,
  content: String,
  link: String,
});
</script>

<template>
  <div>
    <a
      :href="props.link"
      class="text-txtPaimary decoration-0 hover:text-txtActive"
    >
      <div class="flex flex-row">
        <div class="flex-grow-0 mr-auto">
          {{ props.title }}<slot name="title"></slot>
        </div>
        <div class="flex-grow-0 ml-auto">
          {{ props.content }}<slot name="content"></slot>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss"></style>
