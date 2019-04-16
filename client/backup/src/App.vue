<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <navbar/>
    <sidebar/>

  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import sidebar from './components/sidebar.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    navbar,
    sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
