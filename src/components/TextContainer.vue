<template>
<div class="py-4 px-5 relative">
  <div class="absolute bottom-0 left-0 border-l-4 border-b-4 border-white w-8 h-8"></div>
  <slot></slot>
  <div class="absolute top-0 right-0 border-t-4 border-r-4 border-white w-8 h-8"></div>
</div>
</template>

<script>
export default {
  name: "TextContainer"
}
</script>

<style scoped>

</style>