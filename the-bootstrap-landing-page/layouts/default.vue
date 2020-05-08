<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
</style>