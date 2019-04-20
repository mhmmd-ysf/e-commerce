<template>
  <div id="app">
    <navbar :carts="carts"/>
    <router-view @update-cart="updateCart" :carts="carts"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import navbar from './components/navbar.vue';
import cards from './components/cards.vue';

const url = 'http://localhost:3000';

export default {
  name: 'app',
  components: {
    navbar,
    cards,
  },
  data() {
    return {
      items: [],
      carts: [],
    };
  },
  methods: {
    updateCart(input) {
      this.carts = input
      console.log({input, dari: 'app'})
    }
  },
  created() {
    // console.log('created jalan')
    this.carts = []
    if(window.localStorage.id) {
      axios.get(`${url}/users/${window.localStorage.id}`)
        .then(({ data }) => {
          this.carts = data.carts;
          // console.log({cartList: data.carts});
        })
        .catch((err) => {console.log(err)});
    }
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
