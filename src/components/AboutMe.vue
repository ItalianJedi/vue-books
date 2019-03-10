<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <p>Hello, my name is Tony Graf (aka, the Italian Jedi). Welcome to my app, vue books. I am a Seattle University student and will receive my Web Development Certificate in mid March. I have learned many front-end technologies in this program such as HTMl, CSS, JavaScript, Bootstrap, and Vue.js. Other important aspects of web development I have learned about in this program are accessibility, responsiveness, command line, servers and hosting, GitHub and more. </p>
    <p>I hope I can use the skills I've learned from this program to get a job as a front-end web developer. </p>
    <p>I live in Seattle with my beautiful wife Ruby, my son Nathan, and our dog named Plants. Yes, we named our dog Plants.</p>
    <br>
    <p><a href="http://www.anthonygraf.com">My Portfolio</a></p>
    <p><a href="https://github.com/ItalianJedi">Github</a></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'About Tony.'
      }
    }
  }
</script>

<style scoped>
  .component {
    margin-top: 10%;
    text-align: center;
    font-weight: strong;
    min-height: 400px;
    text-shadow:0px 10px 50px #070707;
  }

</style>