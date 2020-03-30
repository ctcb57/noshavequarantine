<template>
  <div class="gallery">
    <h1 class="text-center" style="text-decoration: underline">The Evolution of a Beard</h1>
    <br>
    <b-container fluid class="p-4 bg-light">
      <b-row>
        <b-col cols="3">
          <b-img thumbnail fluid v-bind:src="march24" alt="March 24" v-b-modal.mar24-detail></b-img>
          <h5 class="text-center">March 24</h5>
          <b-modal id="mar24-detail" title="March 24" @ok="handleOk">
            <b-img fluid v-bind:src="march24"></b-img>
          </b-modal>
        </b-col>
        <b-col cols="3">
          <b-img thumbnail fluid v-bind:src="march25" alt="March 25" v-b-modal.mar25-detail></b-img>
          <h5 class="text-center">March 25</h5>
          <b-modal id="mar25-detail" title="March 25" @ok="handleOk">
            <b-img fluid v-bind:src="march25"></b-img>
          </b-modal>
        </b-col>
        <b-col cols="3">
          <b-img thumbnail fluid v-bind:src="march26" alt="March 26" v-b-modal.mar26-detail></b-img>
          <h5 class="text-center">March 26</h5>
          <b-modal id="mar26-detail" title="March 26" @ok="handleOk">
            <b-img fluid v-bind:src="march26"></b-img>
          </b-modal>
        </b-col>
        <b-col cols="3">
          <b-img thumbnail fluid v-bind:src="march27" alt="March 27" v-b-modal.mar27-detail></b-img>
          <h5 class="text-center">March 27</h5>
          <b-modal id="mar27-detail" title="March 27" @ok="handleOk">
            <b-img fluid v-bind:src="march27"></b-img>
          </b-modal>
        </b-col>
        <b-col cols="3">
          <b-img thumbnail fluid v-bind:src="march28" alt="March 28" v-b-modal.mar28-detail></b-img>
          <h5 class="text-center">March 28</h5>
          <b-modal id="mar28-detail" title="March 28" @ok="handleOk">
            <b-img fluid v-bind:src="march28"></b-img>
          </b-modal>
        </b-col>
        <b-col cols="3">
          <b-img thumbnail fluid v-bind:src="march29" alt="March 29" v-b-modal.mar29-detail></b-img>
          <h5 class="text-center">March 29</h5>
          <b-modal id="mar29-detail" title="March 29" @ok="handleOk">
            <b-img fluid v-bind:src="march29"></b-img>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      march24: 'https://i.ibb.co/bNqD4BS/March24.jpg',
      march25: 'https://i.ibb.co/Y2QXZ6n/March25.jpg',
      march26: 'https://i.ibb.co/pdBY4Cb/March-26.jpg',
      march27: 'https://i.ibb.co/XJPj0FR/March27.jpg',
      march28: 'https://i.ibb.co/Btkz8zD/March28.jpg',
      march29: 'https://i.ibb.co/pQMwz4n/March29.jpg'
    }
  }
}
</script>
