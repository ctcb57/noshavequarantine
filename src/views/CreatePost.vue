<template>
    <div id="create-post">
        <h1 class="text-center" style="text-decoration: underline">Create Blog Post</h1>
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
                    <b-form-input id="title" type="text" placeholder="Enter a Title"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols="2"
                    label="Date:"
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
                        placeholder="Choose a date"
                        class="text-left"
                    ></b-form-datepicker>
                </b-form-group>
                <b-form-group
                    label-cols="2"
                    label="Post Content:"
                    label-size="lg"
                    label-align="left"
                    label-for="content"
                >
                    <b-form-textarea
                        id="content"
                        placeholder="Enter blog post content here"
                        rows="6"
                        max-rows="12"
                    ></b-form-textarea>
                </b-form-group>
                <b-row>
                    <b-col cols="3" sm="1" class="text-right"><b-button pill type="submit" variant="primary" v-b-modal.validation>Submit</b-button></b-col>
                    <b-col cols="3" sm="1" class="text-left"><b-button pill type="reset" variant="dark">Reset</b-button></b-col>
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
        post: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // Send to the API and ensure the modal pops up
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.date = null
      this.form.post = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    handleOk (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.$router.push('/blog')
    }
  }
}
</script>
