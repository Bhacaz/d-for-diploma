<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/"> D for Diploma </a>
      <a class="navbar-item">
        <router-link to="/calculator">Calculator</router-link>
      </a>
      <a class="navbar-item">
        <router-link to="/exams">Exams</router-link>
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
  color: rgb(122, 248, 218);
  text-decoration: underline;
}

.navbar-home-link {
  padding-right: 2em;
}
</style>
