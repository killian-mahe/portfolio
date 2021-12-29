<template>
  <div>
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
      <div class="w-full flex">
        <Profile class="-top-20"></Profile>
        <div class="grow flex justify-center space-x-24 items-center">
          <router-link :to="{name: 'contact'}"><Button>Contact me</Button></router-link>
          <router-link :to="{name: 'projects'}"><ButtonSecondary>My projects</ButtonSecondary></router-link>
        </div>
      </div>
      <div class="grid grid-cols-6">
        <div></div>
        <TextContainer class="col-span-4 tracking-wide font-sans text-justify">
          I started learning <span class="text-important-light">web development skills</span> early, when I was in high school.
          I spend a lot of time on web projects, mostly personal.
          When I entered engineering school, I started to get interested in <span class="text-important-light">AI technologies</span> and the world of Big Data.
          I am currently completing my 5 year <span class="text-important-light">engineering degree</span> with a <span class="text-important-lighty">master's degree in computer science</span> in Canada.
        </TextContainer>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Presentation from '../components/About/Presentation.vue'
import Profile from '../components/About/Profile.vue'
import Button from '../components/Button.vue'
import TextContainer from "../components/TextContainer.vue";
import ButtonSecondary from "../components/ButtonSecondary.vue";

export default {
  name: "about.vue",
  components: {
    Presentation,
    Profile,
    TextContainer,
    Button,
    ButtonSecondary
  }
}
</script>

<style scoped>

</style>