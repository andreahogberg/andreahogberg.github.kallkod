<template>
  <div id="img">
    <img width="1000" height="400" v-for="img in image" :src="img" />
  </div>
  <p>{{ 'Photocred: Markus Winkler' }}</p>
</template>

<script>
  export default {
    data() {
      return {
        image: ['markus-winkler-aId-xYRTlEc-unsplash.jpg']
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: large;
    font-weight: lighter;
  }
</style>
