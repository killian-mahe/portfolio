<template>
<div>
  <div class="top-box" :class="{'left-top-box': left, 'right-top-box': !left}">
    <div class="central-content" :class="{'left-central-content': left, 'right-central-content': !left}">
      <span class="font-serif text-xl"><slot name="title"></slot></span>
      <span class="font-serif"><slot name="school"></slot></span>
    </div>
  </div>
  <div class="bottom-content" :class="{'left-bottom-content': left, 'right-bottom-content': !left}">
    <slot name="options"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "School",
  props: {
    orientation: {
      type: String,
      default: "left"
    }
  },
  computed: {
    left() {
      return this.orientation === "left";
    }
  }
}
</script>

<style scoped>
.top-box {
  @apply bg-black-blue;
  @apply pt-8;
}

.left-top-box {
  @apply pr-8;
}

.right-top-box {
  @apply pl-8;
}

.bottom-content {
  @apply border-b-primary border-b-4;
  @apply p-4;
}

.left-bottom-content {
  @apply border-r-primary border-r-4;
  @apply text-right;
  @apply mr-8;
}

.right-bottom-content {
  @apply border-l-primary border-l-4;
  @apply ml-8;
}

.central-content {
  @apply text-white;
  @apply border-t-4 border-t-white;
  @apply pl-6 pt-6 pr-6 pb-2;
  @apply flex flex-col;
}

.left-central-content {
  @apply border-r-4 border-r-white;
  @apply items-start;
}

.right-central-content {
  @apply border-l-4 border-l-white;
  @apply items-end;
}
</style>