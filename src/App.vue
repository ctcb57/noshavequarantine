<template>
  <div id="app">
    <b-container class="header-section">
      <b-row>
        <b-col></b-col>
        <b-col>
          <div id="logo-image">
            <img src='./static/noshavequarantine.png'>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col>
          <div id="nav-bar">
            <b-nav pills justified align="center">
              <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
              <b-nav-item to="/blog" exact exact-active-class="active">Blog</b-nav-item>
              <b-nav-item to="/gallery" exact exact-active-class="active">Gallery</b-nav-item>
              <b-nav-item to="/donate" exact exact-active-class="active">Donate</b-nav-item>
            </b-nav>
          </div>
        </b-col>
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
#logo-image {
  height: 150px;
}
#nav-bar {
  height: 100px;
}

</style>
