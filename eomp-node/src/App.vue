<template>

  <Navbar/>
  <router-view/>
  <Footer />

 

</template>

<script>
import Navbar from './components/NavbarComp.vue'
import Footer from './components/FooterComp.vue'

export default{
  components: {
    Navbar,
    Footer

  }
};


</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #d3d3d3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
