<template>
  <div>
    <div class="bullshit__headline">{{ message }}</div>
    <div class="bullshit__info">
      Please check that the URL you entered is correct, or click the button below to return to the homepage.
    </div>
  </div>
</template>

<script>
  export default {
    name: "page404",
    computed: {
      message() {
        return 'The webmaster said that you can not enter this page...'
      }
    }
  }
</script>

<style scoped>

</style>
