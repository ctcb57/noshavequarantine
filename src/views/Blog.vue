<template>
  <div class="blog">
    <b-container>
      <b-row>
        <b-col cols="8">
          <div>
            <h1>The Birth of a Beard and Website</h1>
          </div>
        </b-col>
        <b-col cols="4">
          <b-button variant="primary" size="lg" to="blog/create-post">Create Post</b-button>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col cols="2" sm="1"></b-col>
        <b-col cols="8" sm="10">
          <div>
            <b-list-group>
              <b-list-group-item to="/blog/1" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">No Shave Quarantine Begins</h5>
                  <medium>March 24, 2020</medium>
                </div>
              </b-list-group-item>
              <b-list-group-item to="/blog/2" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Let's Get Ready to Rumble</h5>
                  <medium>March 25, 2020</medium>
                </div>
              </b-list-group-item>
              <b-list-group-item to="/blog/3" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Rome Wasn't Built in a Day</h5>
                  <medium>March 26, 2020</medium>
                </div>
              </b-list-group-item>
              <b-list-group-item to="/blog/4" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Kansas City Here I Come</h5>
                  <medium>March 28, 2020</medium>
                </div>
              </b-list-group-item>
              <b-list-group-item to="/blog/5" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Let's Get It Started</h5>
                  <medium>March 29, 2020</medium>
                </div>
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
        <b-col cols="2" sm="1"></b-col>
      </b-row>
    </b-container>
  </div>
</template>
