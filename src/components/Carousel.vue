<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <img class="image object-cover" v-for="image in imagesArray" :src="image" alt="carousel_image" :key="image"/>
    </div>

    <svg class="carousel-button absolute top-1/2 left-2" @click="prev" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    <svg class="carousel-button absolute top-1/2 right-2" @click="next" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {
      imagesArray: JSON.parse(JSON.stringify(this.images)), // Clone props
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.setStep()
    this.resetTranslate()
    const image = this.imagesArray.pop()
    this.imagesArray.unshift(image)
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalImages = this.imagesArray.length;
      this.step = `${innerWidth / totalImages}px`
    },
    next() {
      if (this.transitioning) return
      this.transitioning = true

      this.moveLeft();

      this.afterTransition(() => {
        const image = this.imagesArray.shift()
        this.imagesArray.push(image)

        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev() {
      if (this.transitioning) return
      this.transitioning = true
      this.afterTransition(() =>{
        const image = this.imagesArray.pop()
        this.imagesArray.unshift(image)

        this.resetTranslate()
        this.transitioning = false
      })
      this.moveRight();
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition(callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener);
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  @apply max-w-full overflow-hidden;
  @apply relative;
  @apply select-none;
}

.inner {
  white-space: nowrap; /* ❸ */
  transition: transform 0.2s;
}

.image {
  width: 100%;
  margin-right: 10px;
  display: inline-flex;
}

.carousel-button {
  @apply bg-black stroke-white rounded-full p-1 h-8 w-8 opacity-50;
  @apply hover:opacity-75;
  @apply transition ease-in-out duration-100;
}
</style>