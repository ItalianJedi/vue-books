<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <p>vue books. is a capstone project for the <a href="https://ncs.seattleu.edu/programs-courses/web-development/" target="_blank">Seattle University Web Development Certificate.</a></p>
    <p>Due to crippling unoriginality, this capstone project is named vue Books due to the <a href="https://vuejs.org/" target="_blank">Vue.js</a> framework that is used and Google Books API. Vue.js is a popular JavaScript framework that is used for user interfaces and single page applications. It is lightweight and easy for beginners to pick up. Vue.js was created by the brilliant mind of Evan You.</p>
    <p>vue books uses the <a href="https://developers.google.com/books/" target="_blank">Google Books API</a> to call and return book searches. I have structured the search to return basic information about the book including title, author, thumbnail of the book, date it was published, publisher, and a brief description of the book.</p>
    <p>vue books is inspired by various literary journals such as <a href="https://www.theparisreview.org/" target="_blank">Paris Review</a>, <a href="https://www.nybooks.com/" target="_blank">New York Review of Books</a>, and <a href="https://www.berfrois.com/" target="_blank">Berfois</a>. I used the Libre Baskerville font from Google Fonts, which is the same font that Berfois uses on their website. I wanted to give the background some texture which would remind the user of a page of a book. The textured background comes from <a href="https://www.transparenttextures.com/" target="_blank">Transparent Textures</a>.</p>
    <p>I used <a href="https://wave.webaim.org/extension/" target="_blank">WAVE</a> Chrome extension to assess and fix accessibility issues and worked on meta tags for SEO. <a href="https://analytics.google.com" target="_blank">Google Analytics</a> has been added to track how many visitor information.</p>
    <p>To give the page a little more flavor, I have added <a href="https://daneden.github.io/animate.css/" target ="_blank">Animate.css</a> to give some animations to the search results. I am currently working to add <a href="https://wowjs.uk/" target="_blank">Wow.js</a> to animate as you scroll.</p>
    <p>Originally I planned on using <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a> to create a navagaion bar and make the page responsive. I have instead chosen to use Vue Router to navagate the different pages and meta tags to make the page responsive to different devices.</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'About vue books.'
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