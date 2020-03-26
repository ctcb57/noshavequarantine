<template>
  <div id="app">
    <b-container class="header-section">
      <b-row>
        <b-col></b-col>
        <b-col>
          <div class="logo-image">
            <img src='./static/noshavequarantine.png'>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <div class="nav">
            <b-nav pills align="center">
              <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
              <b-nav-item to="/blog" exact exact-active-class="active">Blog</b-nav-item>
            </b-nav>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
