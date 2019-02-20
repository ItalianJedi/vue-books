<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <p>Tony is a Web Development Certificate student from Seattle University.</p>
    <p>I will update this later.</p>
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
    font-weight: strong;
    min-height: 400px;
    text-shadow:0px 10px 50px #070707;
  }
</style>