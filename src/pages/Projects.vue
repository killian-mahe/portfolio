<template>
  <!-- Title -->
  <Title class="my-12"></Title>

  <!-- Background line -->
  <div class="absolute top-0 w-screen left-1/4 -z-10 max-h-screen">
    <svg width="901" height="1171" viewBox="0 0 901 1171" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60.6702 2C35.0674 9.08209 -11.738 40.3978 5.86228 109.004C27.8627 194.762 167.198 263.909 242.849 252.32C318.499 240.731 542.748 195.921 500.678 389.841C458.607 583.762 340.885 625.482 264.849 629.345C188.813 633.208 44.4594 678.79 27.0907 830.605C9.722 982.419 171.058 1116.46 507.625 966.195C776.879 845.979 880.731 1051.31 899 1169" stroke="#C49A3B" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"/>
    </svg>
  </div>

  <!-- Tag list -->
  <div class="my-10 w-1/2 mx-auto space-x-24 flex flex-wrap justify-center gap-y-4">
    <Tag v-for="tag in tags" :selected="selectedTags.has(tag)"
         :deletable="selectedTags.has(tag)"
         @delete="unselectTag(tag)"
         @select="selectTag(tag)">{{ tag }}</Tag>
  </div>


  <div class="lg:grid lg:grid-cols-6">
    <div></div>

    <div class="lg:col-span-4">
      <div class="grid grid-cols-3 gap-12">
        <ProjectCard v-for="project in selectedProjects" class="h-[450px]"
                     :project="project"></ProjectCard>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import Title from '../components/Projects/Title.vue'
import ProjectCard from "../components/Projects/ProjectCard.vue";
import Tag from '../components/Projects/Tag.vue';

export default {
  name: "Projects",
  components: {
    Tag,
    Title,
    ProjectCard
  },
  data() {
    return {
      tags: new Set([
          "Web", "ENIB", "Game", "AI", "UQAC", "Python", "Research", "PHP", "JavaScript", "Paper"
      ]),
      selectedTags: new Set([]),
      projects: [
        {
          name: "Share Your Project",
          img: "/img/projects/syp.png",
          description: "Project social network",
          tags: ["Web", "PHP", "JavaScript", "ENIB"]
        },
        {
          name: "Lumic",
          img: "/img/projects/lumic.svg",
          description: "Personal dashboard and url shortener",
          tags: ["Web", "PHP", "JavaScript"]
        },

        {
          name: "AI procedural generation review",
          img: "/img/projects/paper.png",
          description: "Literature review on the evolution of artificial intelligence in procedural generation",
          tags: ["UQAC", "Research", "Paper", "AI"]
        },
        {
          name: "Sudoku Reader",
          img: "/img/projects/sudoku.png",
          description: "Sudoku solver using AI",
          tags: ["AI", "UQAC", "Python"]
        },
        {
          name: "Colors clustering",
          img: "/img/projects/clustering.svg",
          description: "Pictures colors clustering app",
          tags: ["AI", "UQAC", "Python"]
        },
        {
          name: "Vacuum agent",
          img: "/img/projects/vacuum.png",
          description: "Intelligent vacuum agent",
          tags: ["AI", "UQAC", "Python"]
        },
        {
          name: "Fourier Drafter",
          img: "/img/projects/drawing.png",
          description: "Fourier transform drawing app",
          tags: ["Web", "JavaScript"]
        },
        {
          name: "The Eternal Kingdom",
          img: "/img/projects/game.png",
          description: "Tower defense console game",
          tags: ["Python", "ENIB", "Game"]
        }
      ]
    }
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
    unselectTag(tag) {
      this.selectedTags.delete(tag)
    },
    selectTag(tag) {
      this.selectedTags.add(tag)
    }
  }
}
</script>

<style scoped>

</style>