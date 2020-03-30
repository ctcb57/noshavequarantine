<template>
  <div class="home">
    <div>
      <b-row>
        <b-col cols="2" sm="1"></b-col>
        <b-col cols="8" sm="10" class="text-center">
          <h3 class="text-center">No Shave Quarantine: Day 11</h3>
        </b-col>
        <b-col cols="2" sm="1"></b-col>
      </b-row>
      <br>
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="6" class="text-center">
          <b-carousel
            id="carousel"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="450"
            img-height="600"
            class="text-center"
          >
            <b-carousel-slide
              caption="Before"
              img-src="https://i.ibb.co/KhG3kwf/beforeshave.jpg"
              img-width="450"
              img-height="600"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="During"
              img-src="https://i.ibb.co/pQMwz4n/March29.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
#carousel {
  max-width: 100%;
  height: auto;
  position: relative;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>
