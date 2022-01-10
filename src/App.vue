<template>
  <Navbar></Navbar>
  <section id="main" class="section">
    <router-view />
  </section>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  component: [Navbar],
};
</script>

<style>
#main {
  text-align: center;
}
</style>
