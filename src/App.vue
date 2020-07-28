<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
//import background from "./assets/backgrounds.jpg";

export default {
  name: "App",
  //  data: () => ({
  //    background
  // }),

  components: {
    Navbar,
  },

  // data: () => ({
  //   //
  // }),
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
    // height: 100vh;
    
  // position: relative;
  

  background-position: center;

  // background-position: center;
}
</style>
