<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <p>vue books. is a capstone project for the Seattle University Web Development Certificate.</p>
    <p>Due to crippling unoriginality, this capstone project is named vue Books due to the Vue.js framework that is used and Google Books API. Vue.js is a popular JavaScript framework that is used for user interfaces and single page applications. It is lightweight and easy for beginners to pick up. Vue.js was created by the brilliant mind of Evan You.</p>
    <p>vue books uses the Google Books API to call and return book searches. I have structured the search to return basic information about the book including title, author, thumbnail of the book, date it was published, publisher, and a brief description of the book.</p>
    <p>vue books is inspired by various literary journals such as Paris Review, New York Review of Books, and Berfois. I used the Libre Baskerville font from Google Fonts, which is the same font that Berfois uses on their website. I wanted to give the background some texture which would remind the user of a page of a book. The textured background comes from Transparent Textures dot com.</p>
    <p>I used WAVE Chrome extension to assess and fix accessibility issues and worked on meta tags for SEO. Google Analytics has been added to track how many visitor information.</p>
    <p>To give the page a little more flavor, I have added Animate.css to give some animations to the search results. I am currently working to add Wow.js to animate as you scroll.</p>
    <p>Originally I planned on using Bootstrap 4 to create a navagaion bar and make the page responsive. I have instead chosen to use Vue Router to navagate the different pages and meta tags to make the page responsive to different devices.</p>
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