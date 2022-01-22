<template>
  <!-- Title -->
  <Title class="my-12"></Title>

  <!-- Background line -->
  <div class="absolute top-0 w-screen left-1/4 -z-10 max-h-screen">
    <svg width="901" height="1171" viewBox="0 0 901 1171" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M60.6702 2C35.0674 9.08209 -11.738 40.3978 5.86228 109.004C27.8627 194.762 167.198 263.909 242.849 252.32C318.499 240.731 542.748 195.921 500.678 389.841C458.607 583.762 340.885 625.482 264.849 629.345C188.813 633.208 44.4594 678.79 27.0907 830.605C9.722 982.419 171.058 1116.46 507.625 966.195C776.879 845.979 880.731 1051.31 899 1169"
          stroke="#C49A3B" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          stroke-dasharray="20 20"/>
    </svg>
  </div>

  <!-- Tag list -->
  <div id="tag-list-top" class="h-[1px]"></div>
  <div id="stickyTagList" class="sticky top-0 my-10 w-full z-20 py-2 transition-all ease-in-out duration-100">
    <div class="w-1/3 flex flex-wrap justify-center gap-2 space-x-12 mx-auto">
      <Tag v-for="tag in tags"
           :selected="selectedTags.has(tag)"
           @click="toggleTag(tag)">{{ tag }}
      </Tag>
    </div>
  </div>


  <div class="lg:grid lg:grid-cols-6">
    <div></div>

    <div class="lg:col-span-4">
      <div class="grid grid-cols-1 gap-12 mx-auto">
<!--        <ProjectCard @details="open(project)" v-for="project in selectedProjects" class="h-[400px] snap-center"-->
<!--                     :project="project"></ProjectCard>-->
        <LargeProjectCard v-for="project in selectedProjects" class="h-fit hidden xl:block snap-center shadow-md"
                          :key="project.name"
                          :project="project"></LargeProjectCard>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import Title from '../components/Projects/Title.vue'
import LargeProjectCard from "../components/Projects/LargeProjectCard.vue";
import ProjectCard from "../components/Projects/ProjectCard.vue";
import Tag from '../components/Projects/Tag.vue';
import Modal from '../components/Modal.vue';
import Carousel from '../components/Carousel.vue';
import projects_store from '../projects.json';

export default {
  name: "Projects",
  components: {
    Tag,
    Title,
    ProjectCard,
    LargeProjectCard,
    Modal,
    Carousel
  },
  data() {
    return {
      tags: new Set([
        "Web", "ENIB", "Game", "AI", "UQAC", "Python", "Research", "PHP", "JavaScript", "Paper"
      ]),
      focusedProject: null,
      selectedTags: new Set([]),
      projects: projects_store
    }
  },
  mounted() {
    let observer = new IntersectionObserver(function(entries) {
      // no intersection with screen
      if(entries[0].intersectionRatio === 0) {
        document.querySelector("#stickyTagList").classList.add("tag-list-sticky");
      }
      // fully intersects with screen
      else if(entries[0].intersectionRatio === 1)
        document.querySelector("#stickyTagList").classList.remove("tag-list-sticky");
    }, { threshold: [0,1] });

    observer.observe(document.querySelector("#tag-list-top"));
  },
  computed: {
    selectedProjects() {
      if (this.selectedTags.size === 0) return this.projects;

      return this.projects.filter((project) => {
        for (const tag of project.tags) {
          if (this.selectedTags.has(tag)) return true;
        }
        return false;
      })
    }
  },
  methods: {
    toggleTag(tag) {
      if (this.selectedTags.has(tag)) {
        this.selectedTags.delete(tag)
      } else {
        this.selectedTags.add(tag)
      }
    },
    open(project) {
      this.focusedProject = project;
    },
    close() {
      this.focusedProject = null;
    }
  }
}
</script>

<style scoped>
.tag-list-sticky {
  @apply bg-white shadow-md;
}
</style>