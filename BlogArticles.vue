<script>
  export default {
    created() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          this.data = data
          console.log(data)
        })
    },
    data() {
      return {
        data: null
      }
    }
  }
</script>

<template>
  <div id="articles">
    <h1>News Articles</h1>
    <div :key="data.body" v-for="data in data" class="news">
      <h2>{{ data.title }}</h2>
      <article>{{ data.body }}</article>
    </div>
  </div>
</template>
