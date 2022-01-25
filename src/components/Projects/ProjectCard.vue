<template>
  <div class="relative group w-full h-fit cursor-pointer">
    <div class="relative overflow-hidden border-[3px] border-black-blue transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2">
      <div class="absolute flex justify-center items-center w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-30">
        <slot></slot>
      </div>
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 z-20"></div>
      <img class="object-cover group-hover:blur group-hover:scale-110 delay-75 transition-all duration-300 ease-in-out z-10" :src="project.images[0]" alt="project_image"/>
    </div>
    <div class="absolute -z-10 inset-0 border-[3px] border-primary"></div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import Tag from "./Tag.vue";

export default {
  name: "ProjectCard.vue",
  components: {
    Button,
    Tag
  },
  emits: ["details"],
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>