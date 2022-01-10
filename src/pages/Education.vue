<template>

  <!-- Background line -->
  <div class="absolute top-0 left-1/4 -z-10 max-h-screen space-y-16">
    <svg width="1039" height="626" viewBox="0 0 1039 626" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M135 -65C85.5 -53.5 -10.1 -0.300003 3.49999 120.5C20.5 271.5 223 270.5 199.5 210.5C176 150.5 38 278.5 146 365.5C254 452.5 379.5 492 630 508C659 509.852 882.443 516.721 940.5 595C994.642 668 731 595 1053 456C1156 402.5 1262.5 444 1233 508C1203.5 572 1104 432.5 1233 365.5C1362 298.5 1393 306.5 1572 341" stroke="#C49A3B" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"/>
    </svg>
  </div>
  <div class="absolute left-0 -z-10 max-h-screen space-y-16 top-[700px]">
    <svg width="1136" height="366" viewBox="0 0 1136 366" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1077.73 376.408C1114.85 341.699 1171.04 247.826 1098.86 150.01C1008.64 27.7405 829.148 45.2885 879.5 85.5C929.852 125.712 974.833 -7.34395 836.5 2.5C703 12 587.489 16.2819 362.549 127.675C336.509 140.571 139.567 246.344 50.1485 207.581C-33.2395 171.432 209.844 35.6948 -36.6558 508.195" stroke="#C49A3B" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 20"/>
    </svg>
  </div>

<!-- Title -->
<Title class="my-12"></Title>

<div class="grid justify-items-stretch space-y-12 mt-12">
<!-- Master -->
<School class="w-1/2 justify-self-end" orientation="right">
  <template v-slot:title>
    <span class="text-important-dark">Master in Computer Science</span> and Project Management
  </template>

  <template v-slot:school>
  University of Québec at Chicoutimi, CA (from 2021 to 2023)
  </template>

</School>

<!-- ENIB -->
  <School class="w-1/2" orientation="left">
    <template v-slot:title>
      <span class="text-important-dark">Engineering degree</span> in computer science, electronics and mechatronics
    </template>

    <template v-slot:school>
      Ecole nationale d'ingénieurs de Brest, FR (from 2017 to 2023)
    </template>

    <template v-slot:options>
      Head of Communication for the Arts Office +<br/>
      General Secretary of BREI of Basse-Bretagne +<br/>
      C1 grade TOEIC certification +
    </template>
  </School>

<!-- High School -->
  <School class="w-1/2 justify-self-end" orientation="right">
    <template v-slot:title>
      <span class="text-important-dark">Scientific baccalaureate</span> with disctinction
    </template>

    <template v-slot:school>
      Saint-Joseph High School, FR (from 2014 to 2017)
    </template>

    <template v-slot:options>
      + Computer Science and Digitale Science Specialization <br/>
      + European class section <br/>
      + HSK 1 and 2 (Chinese language test) <br/>
      + Cambridge B2 level <br />
    </template>
  </School>
</div>
</template>

<script>
import Title from '../components/Education/Title.vue'
import School from '../components/Education/School.vue'

export default {
  name: "Education",
  components: {
    Title,
    School
  }
}
</script>

<style scoped>

</style>