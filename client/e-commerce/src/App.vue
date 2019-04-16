<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <navbar/>
    <div>
      <div id="sidebar">
        <div class="sidenav">
          <a href="#about" class>About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <div style="background-color: aqua;">tes</div>
      <br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
// import sidebar from "./components/sidebar.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    navbar
    // sidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sidenav {
  width: 130px;
  position: fixed;
  z-index: 1;
  margin-top: 10px;
  left: 10px;
  background: #eee;
  overflow-x: hidden;
  padding: 8px;
  border-radius: 5px;
}

.sidenav a {
  padding: 8px;
  text-decoration: none;
  font-size: 25px;
  color: #2196f3;
  display: block;
}

.sidenav a:hover {
  color: #064579;
}

.main {
  margin-left: 140px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
