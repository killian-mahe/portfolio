<template>
<div class="relative">

  <div class="absolute -top-2 -left-2 w-full h-full border-[3px] border-black-blue bg-white flex justify-between p-8">

    <div class="w-3/5">
      <h2 class="text-primary font-mono text-3xl font-bold">{{ project.name }}</h2>

      <div class="flex justify-between">
        <p class="font-sans font-light">{{ project.description }}</p>
        <span class="flex space-x-2"><Tag class="h-fit" v-for="tag in project.tags" :outline="true">{{ tag }}</Tag></span>
      </div>

      <p class="text-sm text-justify leading-loose font-light mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus sed metus aliquet, in auctor purus gravida.
        Proin neque leo, aliquam et eros ac, maximus pulvinar turpis. Donec elementum metus vitae velit hendrerit gravida.
        Quisque molestie venenatis libero, vel finibus ligula dictum vel. Etiam posuere massa posuere lectus vehicula scelerisque.
        Maecenas sit amet libero in massa egestas commodo nec et ex. Aliquam tristique maximus justo eget elementum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac hendrerit mi.
        Etiam ultrices blandit tortor, at hendrerit urna posuere quis.
      </p>
    </div>

    <div class="w-2/5 px-5 flex flex-col items-center justify-between">

      <img :src="project.img"
         class="h-52"
         alt="project_picture"/>
      <Button class="h-12 w-1/2 mt-2">See more</Button>
    </div>

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