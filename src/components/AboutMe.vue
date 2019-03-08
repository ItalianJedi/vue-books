<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <p>Tony is a Web Development Certificate student from Seattle University.</p>
    <br>
    <p>I like books so it makes sense to make an app for a book search.</p>
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