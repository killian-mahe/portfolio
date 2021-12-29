<template>
  <div class="w-full p-5 flex justify-between items-center">

    <!--  Logo  -->
    <div class="font-serif font-bold text-2xl flex flex-col">
      <span class="text-primary">Killian</span>
      <span>Mahé</span>
    </div>

    <!--  Links  -->
    <div class="w-2/3 xl:w-1/2 flex justify-between font-sans font-bold">
      <router-link class="navbar-link" active-class="active" :to="{ name: 'about' }">About me</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'education' }">Education</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'career' }">My career</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'projects' }">My projects</router-link>
      <router-link class="navbar-link" active-class="active" :to="{ name: 'skills' }">My Skills</router-link>
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