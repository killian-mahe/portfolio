<template>
  <div class="hidden lg:block container mx-auto">
    <div class="bordered-box">
      My Projects
    </div>
    <div class="bottom-box flex justify-center items-center">
      <div class="main-box"></div>
      <svg class="w-6 h-6 stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
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
  width: 300px;
  height: 100px;
}

.bordered-box {
  @apply border-4 border-primary absolute;
  @apply flex justify-center items-center;
  @apply font-mono text-3xl font-medium tracking-wide;
  line-height: 0;
  top: 0;
  right: 0;
  width: 270px;
  height: 70px;
}

.main-box {
  @apply absolute;
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