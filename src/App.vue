<template>
  <div id="app">
    <!-- <img src="./assets/the_banquet.jpg" alt="" width="500" height="300"> -->
    <transition name="ernestIn" enter-active-class="animated fadeIn" appear delay-15s>
    <img src="./assets/ErnestHemingway.jpg" alt="Ernest Hemingway" width="225" height="300">
    </transition>
    <h1 id="title">vue books.</h1>
    <nav class="router">
      <router-link active-class="active" exact v-bind:to="{ name: 'BookSearch'}">Search</router-link>
      &emsp;
      <router-link active-class="active" v-bind:to="{ name: 'AboutVuebooks'}">About vue books.</router-link>
      &emsp;
      <router-link active-class="active" v-bind:to="{ name: 'AboutMe'}">About Tony</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

/*@media only screen and (min-width: 600px) {*/
img {
  float: left;
  max-width: 100%;
  margin-right: 175px;
  border: white solid;
  box-shadow:0px 10px 50px #1e1e1d;
  /*animation-duration: 1s;
  animation-delay: 1s;
  /*max-width: 100%;
  height: auto;*/
}


.active {
  color: white;
  font-family: 'Libre Baskerville', serif;
  text-shadow:0px 10px 50px #1e1e1d;
}

#app {
  /*font-family: 'Playfair Display', serif;*/
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white; 
  width: 75%;
  margin: 20px auto;
}

#title {
 text-shadow:0px 10px 50px #1e1e1d;
}

body {
  background-color: #c0bec2;
  background-image: url("https://www.transparenttextures.com/patterns/black-linen-2.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}

h1 {
  font-size: 7rem;
}

@media only screen and (max-width: 500px) {
  img {
    text-align: center;
    border: white solid;
    box-shadow:0px 10px 50px #1e1e1d;
  }

}
</style>
