<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>
      <a class="navbar-item">
        <router-link to="/">Home</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/calculator">Calculator</router-link>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>
