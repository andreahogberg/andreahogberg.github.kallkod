<script>
  export default {}
</script>

<style>
  #app {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #585858;
  }
</style>

<template>
  <nav>
    <RouterLink class="nav-link" to="/">Home</RouterLink>
    <RouterLink class="nav-link" to="/signIn">Sign In</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
