<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
body {
  background-image: url("./assets/back (2).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-position: center;
}
</style>
