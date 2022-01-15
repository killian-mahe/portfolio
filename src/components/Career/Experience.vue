<template>
  <div class="flex flex-col items-center">
    <span class="text-primary-dark font-medium text-3xl font-serif"><slot name="name"/></span>
    <span class="font-serif font-medium">
      <slot name="title"/> at <span class="text-important-light"><slot name="company"/></span>, <slot name="country"/>
    </span>
    <span class="font-serif text-sm"><slot name="dates"/></span>

    <span class="border-b border-1 border-black-blue w-8 my-2"></span>

    <span class="font-sans text-center">
      <slot name="description"/>
    </span>
  </div>
</template>

<script>
export default {
  name: "Experience.vue"
}
</script>

<style scoped>

</style>