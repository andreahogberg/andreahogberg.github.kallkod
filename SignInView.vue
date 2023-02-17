<template>
  <h1>Sign In</h1>
  <form @submit="submitForm" v-if="!formSubmitted">
    <p>*Username: {{ userName }}</p>
    <input v-model="userName" />
    <p>*Password: {{ Password }}</p>
    <input v-model="Password" />
    <br /><input @click="onClick" type="button" value="Sign in" />
  </form>
  <div v-if="formSubmitted" />
  <p>{{ 'Logga in för att hålla dig uppdaterad och få nyheter i realtid' }}</p>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        Password: '',
        formSubmitted: false,
        props: {
          message: String
        }
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
  form {
    border: 5px dotted rgb(235, 221, 221);
    max-width: 500px;
    height: 190px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    color: rgb(70, 57, 57);
    font-weight: 100;
  }
</style>
