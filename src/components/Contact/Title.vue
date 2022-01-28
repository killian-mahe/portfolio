<template>
  <div class="hidden lg:block container mx-auto">
    <div class="bordered-box">
      Contact me
    </div>
    <div class="bottom-box flex justify-center items-center">
      <div class="main-box"></div>
      <svg class="w-6 h-6 stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
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
  @apply border-4 border-primary absolute z-10;
  @apply flex justify-center items-center;
  @apply font-mono text-3xl font-medium tracking-wide;
  line-height: 0;
  top: 0;
  right: 0;
  width: 270px;
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