<template>
  <div id="navbar" style="display: block">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">
        <img
          src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18"
          height="35"
          style="margin-right: 10px;"
        > Lapaktiv8
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Collapse
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
        </ul>
      <div class="input-group col-sm-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search product here"
          aria-label="Search product here"
          aria-describedby="button-addon2"
        >
        <div class="input-group-append">
          <button class="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
        </div>
      </div>
        <span class="navbar-text">Username</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style>
#navbar {
  background-color: aqua;
  height: 50px;
  margin-bottom: 10px;
}
</style>
