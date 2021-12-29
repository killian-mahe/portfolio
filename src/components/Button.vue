<template>
  <div>
    <div class="relative px-5 py-3 border-2 max-w-fit border-primary font-mono font-bold text-lg tracking-wide">
      <slot></slot>
    </div>
    <button class="absolute bottom-0 left-0 hover:bottom-1 hover:-left-1 active:bottom-0 active:left-0 transition-all transform duration-200 ease-in-out px-5 py-3 border-2 border-black-blue font-mono font-bold text-lg tracking-wide bg-white">
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

</style>