<template>
    <div id="create-post">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-container fluid>
                <b-row class="my-2">
                    <b-col cols="3" md="2">
                        <label for="blog-title" id="title-label" class="text-left">Title: </label>
                    </b-col>
                    <b-col cols="9" md="10">
                        <b-form-input id="blog-title" type="text" placeholder="Enter a Title"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-2">
                    <b-col cols="3" md="2">
                        <label for="date" class="text-left">Date: </label>
                    </b-col>
                    <b-col cols="9" md="10">
                        <b-form-datepicker
                            id="date"
                            today-button
                            reset-button
                            close-button
                            locale="en"
                            placeholder="Choose a date"
                            class="text-left"
                        ></b-form-datepicker>
                    </b-col>
                </b-row>
                <b-row class="my-2">
                    <b-col cols="3" md="2">
                        <label for="post-content" class="text-left">Blog Post:</label>
                    </b-col>
                    <b-col cols="9" md="10">
                        <b-form-textarea
                        id="post-content"
                        placeholder="Enter blog post content here"
                        rows="6"
                        max-rows="12"
                        ></b-form-textarea>
                    </b-col>
                </b-row>
            </b-container>
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
  }
}
</script>
