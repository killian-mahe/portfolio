<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <img class="image" v-for="image in imagesArray" :src="image" :key="image"/>
    </div>
  </div>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {
      imagesArray: this.images,
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
  width: 170px; /* ❶ */
  overflow: hidden; /* ❷ */
}

.inner {
  white-space: nowrap; /* ❸ */
  transition: transform 0.2s;
}

.image {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>