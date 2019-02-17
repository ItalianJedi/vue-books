<template>
  <div id="app">
    <h1 id="title">vue books.</h1>
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
  /*color: #2c3e50;*/
  color: white; 
  width: 75%;
  margin: 20px auto;
}

#title {
  /*text-shadow: 3px 3px #050505;*/
 text-shadow:0px 10px 50px #1e1e1d;
}

body {
  background-color: #c0bec2;
  background-image: url("https://www.transparenttextures.com/patterns/black-linen-2.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  /*background-color: #faecc3;
  background-image: url("https://www.transparenttextures.com/patterns/paper.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}

h1 {
  font-size: 7rem;
}
</style>
