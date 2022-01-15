<template>
<div class="relative">

  <div class="absolute -top-2 -left-2 w-full h-full border-[3px] border-black-blue bg-white flex flex-col items-center justify-between p-5">

    <h2 class="text-primary font-mono text-2xl font-bold">{{ project.name }}</h2>

    <img :src="project.img"
         class="h-auto w-1/2"
         alt="project_picture"/>

    <p class="text-center font-sans font-light">{{ project.description }}</p>

    <div class="flex justify-between w-2/3">
      <Tag v-for="tag in project.tags" :outline="true">{{ tag }}</Tag>
    </div>

    <Button class="w-3/4 mt-2">See more</Button>

  </div>

  <div class="w-full h-full border-[3px] border-primary"></div>
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