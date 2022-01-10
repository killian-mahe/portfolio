<template>
  <div class="hidden lg:block container mx-auto">
    <div class="bordered-box">
      Education
    </div>
    <div class="bottom-box flex justify-center items-center">
      <div class="main-box"></div>
      <svg class="w-7 h-7 stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title.vue"
}
</script>

<style scoped>
.container {
  @apply relative;
  width: 250px;
  height: 100px;
}

.bordered-box {
  @apply border-4 border-primary absolute z-10;
  @apply flex justify-center items-center;
  @apply font-mono text-3xl font-medium tracking-wide;
  line-height: 0;
  top: 0;
  right: 0;
  width: 220px;
  height: 70px;
}

.main-box {
  @apply absolute z-50;
  @apply border-b-4 border-l-4 border-b-white border-l-white;
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
}

.bottom-box {
  @apply bg-black-blue absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
}
</style>