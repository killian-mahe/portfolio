<template>
  <div class="relative">
    <div class="button back-button">
      <slot></slot>
    </div>
    <button class="button front-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
.front-button {
  @apply absolute bottom-0 left-0 hover:bottom-1 hover:-left-1 active:bottom-0 active:left-0;
  @apply transition-all transform duration-200 ease-in-out;
  @apply border-black-blue w-full h-full;
}

.back-button {
  @apply border-primary w-full h-full;
}

</style>