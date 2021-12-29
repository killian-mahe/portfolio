<template>
  <div class="container">
    <div class="bordered-box"></div>
    <div class="bottom-box flex flex-col">
      <div class="main-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
.container {
  @apply relative;
  width: 900px;
  height: 275px;
}

.bordered-box {
  @apply border-4 border-primary-dark absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 125px;
}

.main-box {
  @apply border-b-4 border-r-4 border-b-white border-r-white;
  width: 100px;
  height: 40px;
}

.bottom-box {
  @apply bg-black-blue absolute;
  bottom: 0;
  right: 0;
  width: 650px;
  height: 190px;
}
</style>