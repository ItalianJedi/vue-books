<template>
  <div id="app">
    <!-- <img src="./assets/the_banquet.jpg" alt="" width="500" height="300"> -->
    <img src="./assets/ErnestHemingway.jpg" alt="Ernest Hemingway" width="225" height="300">
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
@media only screen and (min-width: 600px) {
img {
  float: right;
  margin-right: 250px;
  border: white solid;
  box-shadow:0px 10px 50px #1e1e1d;
  /*max-width: 100%;
  height: auto;*/
}
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
</style>
