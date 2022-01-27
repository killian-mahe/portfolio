<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="lg:grid lg:grid-cols-8">
    <div></div>
    <div class="lg:col-span-6">
      <NavBar/>
    </div>
    <div></div>
  </div>

  <router-view/>

</template>
