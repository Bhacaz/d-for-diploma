<template>
  <Navbar></Navbar>
  <div id="nav"></div>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  component: [Navbar],
};
</script>

<style></style>
