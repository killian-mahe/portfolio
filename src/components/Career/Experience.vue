<template>
  <div class="flex flex-col items-center">
    <span class="text-primary-dark font-medium text-3xl font-serif">
      <slot name="name" />
    </span>
    <span class="font-serif font-medium">
      <slot name="title" /> at <span class="text-important-light">
        <slot name="company" />
      </span>,
      <slot name="country" />
    </span>
    <span class="font-serif text-sm">
      <slot name="dates" />
    </span>

    <span class="border-b border-1 border-black-blue w-8 my-2"></span>

    <div class="font-sans font-light text-center mt-2">
      <span v-if="$slots.description">
        <slot name="description" />
      </span>
      <span v-else-if="!expanded">
        <slot name="shortDescription"/>
        <button class="text-primary-dark font-medium underline ml-1" @click="toggleExpand">Read more</button>
      </span>
      <span v-else>
        <slot name="longDescription"/>
        <button class="text-primary-dark font-medium underline ml-1" @click="toggleExpand">Show less</button>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Experience.vue",
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    truncatedLongDescription() {
      if (!this.longDescription) return ''
      if (this.longDescription.length <= this.truncateLength) return this.longDescription
      return this.longDescription.slice(0, this.truncateLength) + '...'
    }
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    }
  },
}
</script>

<style scoped></style>