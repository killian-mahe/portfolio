<template>

<div class="border-[3px] border-black-blue bg-white p-6">


  <div>
    <h2 class="text-primary font-mono text-3xl font-bold">{{ project.name }}</h2>

    <div class="flex justify-between mb-10">
      <p class="font-sans font-light">{{ project.description }}</p>
      <span class="flex space-x-2"><Tag class="h-fit" v-for="tag in project.tags" :outline="true">{{ tag }}</Tag></span>
    </div>

    <p class="text-sm text-justify leading-loose font-light">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus risus sed metus aliquet, in auctor purus gravida.
      Proin neque leo, aliquam et eros ac, maximus pulvinar turpis. Donec elementum metus vitae velit hendrerit gravida.
      Quisque molestie venenatis libero, vel finibus ligula dictum vel. Etiam posuere massa posuere lectus vehicula scelerisque.
      Maecenas sit amet libero in massa egestas commodo nec et ex. Aliquam tristique maximus justo eget elementum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac hendrerit mi.
      Etiam ultrices blandit tortor, at hendrerit urna posuere quis.

    </p>

    <Carousel class="w-3/4 max-h-[24rem] mx-auto mt-8" :images="project.images"></Carousel>

  </div>

</div>

</template>

<script>
import Carousel from "../Carousel.vue"
import Tag from "./Tag.vue";

export default {
  name: "ProjectCard.vue",
  components: {
    Carousel,
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