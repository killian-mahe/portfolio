<template>
  <!-- Background line -->
  <div class="absolute top-0 left-1/4 -z-10 max-h-screen overflow-hidden">
    <svg width="1034" height="1032" viewBox="0 0 1034 1032" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78.5 -22C45.3333 -12.8333 -15.3 27.7 7.5 116.5C36 227.5 216.5 317 314.5 302C412.5 287 703 229 648.5 480C594 731 441.5 785 343 790C244.5 795 57.5 854 35 1050.5C12.5 1247 221.5 1420.5 657.5 1226C1006.3 1070.4 1140.83 1336.17 1164.5 1488.5" stroke="#C49A3B" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"/>
    </svg>
  </div>

  <div class="flex flex-col relative w-full">
    <div class="w-full flex justify-center lg:justify-end">
      <Presentation class="mt-16"></Presentation>
    </div>
    <div class="w-full flex justify-start">
      <Profile></Profile>
    </div>

<!--    <router-link :to="{name: 'contact'}"><Button>Contact me</Button></router-link>-->
  </div>
</template>

<script>
import Presentation from '../components/About/Presentation.vue'
import Profile from '../components/About/Profile.vue'
import Button from '../components/Button.vue'

export default {
  name: "about.vue",
  components: {
    Presentation,
    Profile,
    Button
  }
}
</script>

<style scoped>

</style>