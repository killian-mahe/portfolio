<template>
  <div>
  <!-- Mobile -->
    <div class="lg:hidden w-full flex flex-col items-center space-y-10">
      <div class="border-4 border-primary-dark p-5 w-fit flex justify-center items-center font-mono text-4xl font-medium tracking-wider">
        Lead Machine Learning Engineer
      </div>
      <div class="w-full bg-black-blue">
        <TextContainer theme="dark" class="text-white tracking-wide font-sans font-light text-justify m-4">
          Passionate about <span class="text-important-dark">AI</span> and <span class="text-important-dark">data science</span>, I'm also a web enthusiast and I love to get lost in more and more ambitious projects in my spare time.
        </TextContainer>
      </div>
    </div>


  <!-- Desktop -->
    <div class="hidden lg:block container">
      <div class="bordered-box">
        Lead Machine Learning <br />
        Engineer
      </div>
      <div class="bottom-box flex flex-col">
        <div class="main-box"></div>
        <TextContainer theme="dark" class="text-white tracking-wide font-sans font-light text-justify m-4">
          Passionate about <span class="text-important-dark">AI</span> and <span class="text-important-dark">data science</span>, I'm also a web enthusiast and I love to get lost in more and more ambitious projects in my spare time.
        </TextContainer>
        </div>
    </div>
  </div>
</template>

<script>
import TextContainer from '../TextContainer.vue'

export default {
  name: "Presentation.vue",
  components: {
    TextContainer
  }
}
</script>

<style type="text/css" scoped>
.container {
  @apply relative;
  width: 1000px;
  height: 270px;
}

.bordered-box {
  @apply border-4 border-primary-dark absolute;
  @apply pl-5 flex items-center;
  @apply font-mono text-4xl font-medium tracking-wider;
  top: 0;
  left: 0;
  width: 600px;
  height: 125px;
}

.main-box {
  @apply border-b-4 border-r-4 border-b-white border-r-white;
  width: 250px;
  height: 30px;
}

.bottom-box {
  @apply bg-black-blue absolute;
  bottom: 0;
  right: 0;
  width: 650px;
  height: 175px;
}
</style>