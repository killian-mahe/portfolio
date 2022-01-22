<template>

<div class="border-[3px] border-black-blue bg-white p-6">


  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-primary font-mono text-3xl font-bold">
        {{ project.name }}
      </h2>

      <div class="flex space-x-2">
        <a v-if="project.links.github" target="_blank" :href="project.links.github">
          <svg class="project-links" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a @click.prevent="openFile(project)" v-if="project.links.download">
          <svg class="project-links" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </a>
        <a v-if="project.links.demo" :href="project.links.demo" target="_blank">
          <svg class="project-links" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </a>
      </div>
    </div>

    <div class="flex justify-between items-center mt-1">
      <p class="font-sans">{{ project.description }}</p>
      <div class="flex items-center font-light">
        <span v-if="project.end_date && project.start_date !== project.end_date">{{ project.start_date }} - {{ project.end_date }}</span>
        <span v-else-if="project.end_date === project.start_date">{{ project.start_date }}</span>
        <span v-else-if="!project.end_date" class="font-sans font-light">{{ project.start_date }} - (in progress)</span>
        <svg class="h-8 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <span class="flex space-x-2"><Tag class="h-fit" v-for="tag in project.tags" :outline="true">{{ tag }}</Tag></span>
      <div class="flex items-center font-light">
        <span>{{ project.duration }}</span>
        <svg class="h-8 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      </div>
    </div>


    <p class="text-sm text-justify leading-loose font-light mt-4">
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
import TextContainer from "../TextContainer.vue"
import Tag from "./Tag.vue";

export default {
  name: "LargeProjectCard.vue",
  components: {
    Carousel,
    Tag,
    TextContainer
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    openFile(project) {
      window.open(project.links.download)
    }
  }
}
</script>

<style scoped>
.project-links {
  @apply h-8 opacity-50 hover:opacity-100;
  @apply transition duration-100 ease-in-out;
}
</style>