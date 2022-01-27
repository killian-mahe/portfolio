<template>

  <div class="flex flex-col items-center mt-96" v-if="project">

      <!--   Header   -->
      <div class="w-full absolute top-0 inset-x-0">
        <div class="w-[1200px] relative mx-auto">
          <img class="h-[45rem] shadow-lg -z-10 mx-auto" :src="project.images[0]" alt="project_picture"/>
          <h1 :style="headerStyle" class="absolute font-bold bottom-[78px] left-[75px] text-6xl font-serif">{{ project.name }}</h1>
          <p :style="headerStyle" class="absolute bottom-[70px] left-[925px] text-left text-black font-light text-lg">{{ project.title }}</p>
        </div>
      </div>

      <!--   Description   -->
      <div :style="headerStyle" class="w-1/2 mt-[30rem] mx-auto flex">
        <div class="w-1/4">
          <h2 class="text-3xl mb-2">Tags</h2>
          <div class="font-medium text-gray-400 font-light font-mono" v-for="tag in project.tags">{{ tag }}</div>
          <h2 class="text-3xl mt-8 mb-2">Date</h2>
          <div class="font-medium text-gray-400 font-light font-mono">{{ project.start_date }}</div>
          <div class="mt-8 w-48 h-[1px] border-gray-300 border-b-[1px]"></div>
        </div>
        <div class="w-3/4 markdown-container px-10" v-html="projectDescription">
        </div>
      </div>

      <div class="h-screen">

      </div>

  </div>

</template>

<script>
import projects from '../projects.json';
import showndown from "showdown";

export default {
  name: "ProjectDetails",
  data() {
    return {
      project: null,
      headerStyle: {
        transform: 'translateY(0px)'
      },
      projectDescription: ""
    }
  },
  mounted() {
    this.project = projects.find(project => project.id === this.$route.params.project)
    this.getProjectDescription()

    if (this.project) {
      console.log("Project founded !")
    }

    window.onscroll = () => {
      this.headerStyle.transform = `translateY(-${window.scrollY/3}px)`
    };
  },
  methods: {
    getProjectDescription() {
      this.axios.get(`/files/projects/description/${this.project.description_file}`).then((response) => {
        if (response.status === 200) {
          const converter = new showndown.Converter();
          this.projectDescription = converter.makeHtml(response.data);
        } else {
          this.projectDescription = "";
        }
      })
    }
  }
}
</script>

<style>

.markdown-container {
  @apply font-light whitespace-pre-line;
}

.markdown-container h1 {
  @apply font-medium text-xl my-1;
}

.markdown-container h2 {
  @apply font-medium text-lg my-1;
}

.markdown-container p strong {
  @apply font-medium;
}

.markdown-container a {
  @apply text-primary font-normal;
}


</style>