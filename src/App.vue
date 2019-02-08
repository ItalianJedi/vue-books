<template>
  <div id="app">
    <h1>vue books.</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  /*font-family: 'Playfair Display', serif;*/
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 75%;
  margin: 20px auto;
}

body {
  background-color: #fcf1ed;
background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}

h1 {
  font-size: 7rem;
}
</style>
