<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <p>vue books. is a capstone project for the Seattle University Web Development Certificate.</p>
    <p>I will update this later.</p>
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
    font-weight: strong;
    min-height: 400px;
    text-shadow:0px 10px 50px #070707;
  }
</style>