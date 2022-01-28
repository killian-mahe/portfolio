<template>
  <Title class="my-12"/>

  <form class="mx-auto my-24 w-1/2" @click.prevent="onClick">
    <div class="flex space-x-4">
      <div class="w-1/3">
        <label for="name_field">Your name</label>
        <input id="name_field" class="w-full h-10" type="text" placeholder="Killian Mahé"/>
      </div>
      <div class="w-1/3">
        <label for="email_field">Your email</label>
        <input id="email_field" class="w-full h-10" type="email" placeholder="killianmahe.pro@gmail.com"/>
      </div>
      <div class="w-1/3">
        <label for="text_field">Subject</label>
        <input id="text_field" class="w-full h-10" type="text" placeholder="Subject"/>
      </div>
    </div>
    <textarea class="w-full mt-8" rows="5" placeholder="Your mail content"></textarea>
    <Button class="w-32 h-12 mx-auto mt-8">Send</Button>
  </form>
</template>

<script>
import Title from '../components/Contact/Title.vue'
import Button from '../components/Button.vue'

export default {
  name: "Contact.vue",
  components: {
    Title,
    Button
  },
  methods: {
    onClick() {

    }
  }
}
</script>

<style scoped>
input {
  @apply border-2 border-black outline-0;
  @apply focus:border-primary p-2;
}

textarea {
  @apply border-2 border-black outline-0;
  @apply focus:border-primary p-2;
}
</style>