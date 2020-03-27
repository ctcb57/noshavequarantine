<template>
  <div class="home">
    <HelloWorld msg="Content Coming Soon"/>
    <PhotoCarousel />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PhotoCarousel from '@/components/PhotoCarousel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PhotoCarousel
  }
}
</script>
