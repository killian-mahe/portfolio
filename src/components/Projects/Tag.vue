<template>
  <span class="font-sans text-sm w-fit flex items-center"
        :class="{'border-2 px-1 border-secondary': selected || outline, 'cursor-pointer': !selected && !outline}">
    <span @click="onSelect"><slot></slot></span>
    <svg v-if="deletable"
         @click="onDelete"
         class="bg-secondary rounded-full w-4 p-[1px] h-auto cursor-pointer ml-1 inline"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  </span>
</template>

<script>
export default {
  name: "Tag.vue",
  emits: ["delete", "select"],
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
  methods: {
    onSelect() {
      if (!this.selected) {
        this.$emit('select')
      }
    },
    onDelete() {
      if (this.selected) {
        this.$emit('delete')
      }
    }
  }
}
</script>

<style scoped>

</style>