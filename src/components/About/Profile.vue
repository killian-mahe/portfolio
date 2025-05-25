<template>
  <div class="container">
    <img src="/img/profile_picture.jpg" class="bordered-box" alt="profile-picture"/>
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
  width: 550px;
  height: 375px;
}

.bordered-box {
  @apply block;
  @apply border-4 border-primary-dark absolute z-10;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
}

.main-box {
  @apply absolute z-50;
  @apply border-b-4 border-l-4 border-b-white border-l-white;
  width: 200px;
  height: 125px;
  top: 0;
  right: 0;
}

.bottom-box {
  @apply bg-black-blue absolute;
  bottom: 0;
  left: 0;
  width: 450px;
  height: 200px;
}
</style>