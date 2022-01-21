<template>
  <span class="font-sans text-sm w-fit flex select-none items-center cursor-pointer"
        :class="{'border-2 px-1 border-secondary': selected || outline}">
    <span><slot></slot></span>
  </span>
</template>

<script>
export default {
  name: "Tag.vue",
  props: {
    outline: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    deletable: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>