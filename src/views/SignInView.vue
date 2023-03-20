<template>
  <h1>{{ message }}</h1>
  <form @submit="submitForm" v-if="!formSubmitted">
    <p>*Username: {{ userName }}</p>
    <input v-model="userName" />
    <p>*Password: {{ Password }}</p>
    <input v-model="Password" />
    <br /><input @click="onClick" type="button" value="Sign in" />
  </form>
  <div v-if="formSubmitted" />
  <p>{{ 'Log in to stay updated and receive news in real time.' }}</p>
</template>

<script>
  export default {
    props: {
      message: String
    },
    data() {
      return {
        userName: '',
        Password: '',
        formSubmitted: false
      }
    },
    methods: {
      onClick() {
        this.userName = this.userName
        this.Password = this.Password
        console.log(this.userName)
        console.log(this.Password)
      },
      submitForm: function () {
        this.formSubmitted = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: rgb(235, 221, 221);
  $font-stack: Helvetica, sans-serif;
  $p-color: rgb(70, 57, 57);
  $p-font-weight: 100;
  form {
    font: $font-stack;
    border: 5px dotted $border-color;
    max-width: 500px;
    height: 190px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    color: $p-color;
    font-weight: $p-font-weight;
  }
</style>
