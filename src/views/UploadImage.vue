<template>
    <div id="upload-image">
        <h1 class="text-center" style="text-decoration: underline">Upload Beard Image</h1>
        <br>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-card bg-variant="light">
                <b-form-group
                    label-cols="2"
                    label="Title:"
                    label-size="lg"
                    label-align="left"
                    label-for="title"
                >
                    <b-form-input id="title" type="text" placeholder="Enter a Title" size="lg"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols="2"
                    label="Caption:"
                    label-size="lg"
                    label-align="left"
                    label-for="caption"
                >
                    <b-form-input id="caption" type="text" placeholder="Enter a Caption" size="lg"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols="2"
                    label="Beard Date:"
                    label-size="lg"
                    label-align="left"
                    label-for="date"
                >
                    <b-form-datepicker
                        id="date"
                        today-button
                        reset-button
                        close-button
                        locale="en"
                        placeholder="Choose a Date"
                        class="text-left"
                        size="lg"
                    ></b-form-datepicker>
                </b-form-group>
                <b-form-group
                    label-cols="2"
                    label="Beard Photo:"
                    label-size="lg"
                    label-align="left"
                    label-for="image"
                >
                    <b-form-file
                        id="image"
                        size="lg"
                        class="text-left"
                        :state="Boolean(form.image)"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        v-model="form.image"
                    ></b-form-file>
                    <div class="mt-3 text-left">Selected file: {{ form.image ? form.image.name : '' }}</div>
                </b-form-group>
                <b-row>
                    <b-col cols="3" sm="1" class="text-right"><b-button pill type="submit" variant="primary" v-b-modal.validation>Submit</b-button></b-col>
                    <b-col cols="3" sm="1" class="text-left"><b-button pill type="reset" validation="dark">Reset</b-button></b-col>
                    <b-modal id="validation" title="Submission Status" @ok="handleOk">
                        <p class="my-4">Post Submitted!</p>
                    </b-modal>
                </b-row>
            </b-card>
        </b-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: '',
        date: null,
        caption: '',
        image: null
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // send to the API
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.date = null
      this.form.caption = ''
      this.form.image = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    handleOk (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.$router.push('/gallery')
    }
  }
}
</script>
