<template>
  <div class="w-full p-5 flex justify-between items-center">

    <!--  Logo  -->
    <div class="flex items-center z-20">
      <div class="font-serif font-bold text-2xl flex flex-col">
        <span class="text-primary">Killian</span>
        <span>Mahé</span>
      </div>
      <svg v-if="$route.name === 'project'" @click="$router.replace({ name: 'projects' })" class="ml-24 cursor-pointer h-8 w-auto hover:stroke-primary hover:-translate-x-1 transition-all ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </div>


    <!--  Links  -->
    <div class="w-2/3 xl:w-1/2 flex justify-between font-sans font-light" v-if="$route.name !== 'project'">
      <router-link class="navbar-link" active-class="active" :to="{ name: 'about' }">About me</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'education' }">Education</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'career' }">My career</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'projects' }">My projects</router-link>
<!--      <router-link class="navbar-link" active-class="active" :to="{ name: 'skills' }">My Skills</router-link>-->
      <router-link class="navbar-link" active-class="active" :to="{ name: 'contact' }">Contact me</router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import {computed} from "vue";

export default {
  name: "NavBar.vue",
  setup() {
    const currentRoute = computed(() => {
      return useRouter().currentRoute.value.name;
    })
    return {currentRoute}
  }
}
</script>

<style scoped>

</style>