<template>
  <div id="sidebar">
    <div id="sidebarId" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data: function () {
    return {
      page: ''
    }
  },
  methods: {
    openNav() {
      document.getElementById("sidebarId").style.width = "250px";
      // document.getElementById("sidebarId").style.display = "block";
    },
    closeNav() {
      document.getElementById("sidebarId").style.width = "0";
      // document.getElementById("sidebarId").style.display = "none";
    }
  }
};
// /* Set the width of the side navigation to 250px */
// function openNav() {
//   document.getElementById("sidebarId").style.width = "250px";
//   document.getElementById("sidebarId").style.display = "block";
// }

// // /* Set the width of the side navigation to 0 */
// function closeNav() {
//   document.getElementById("sidebarId").style.width = "0";
//   document.getElementById("sidebarId").style.display = "none";
// }
</script>

<style>
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  /* position: fixed; Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  right: 0;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>