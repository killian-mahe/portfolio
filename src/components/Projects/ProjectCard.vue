<template>
  <div class="relative group w-full h-fit cursor-pointer">
    <div class="relative overflow-hidden border-[3px] border-black-blue transition-all duration-300 ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-3">
      <div class="absolute flex flex-col justify-center items-center w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out z-30 text-white">
        <span class="text-3xl text-center">{{ project.name }}</span>

        <span class="text-md text-center">{{ project.title}}</span>

        <div class="text-sm font-light mt-6">
          <span>{{ project.start_date }}</span>
          <span v-if="project.end_date && project.start_date !== project.end_date"> - {{ project.end_date}}</span>
        </div>

        <div class="absolute bottom-6 space-x-4">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>

        <span v-if="!project.end_date">In progress</span>
      </div>
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 z-20"></div>
      <img class="object-cover object-center group-hover:blur group-hover:scale-110 transition-all duration-300 ease-in-out z-10" :src="project.images[0]" alt="project_image"/>
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