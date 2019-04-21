<template>
  <div id="app">
    <navbar :carts="carts" :isLoggedIn="isLoggedIn" @logged-in="login"
    :userEmail="userEmail" @logged-out="logout"/>
    <router-view @update-cart="updateCart" :carts="carts"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import navbar from './components/navbar.vue';
// import cards from './components/cards.vue';

const url = 'http://localhost:3000';

export default {
  name: 'app',
  components: {
    navbar,
    // cards,
  },
  data() {
    return {
      items: [],
      carts: [],
      isLoggedIn: false,
      userEmail: '',
      userName: '',
    };
  },
  methods: {
    updateCart(input) {
      this.carts = input;
      console.log({ input, dari: 'app' });
    },
    login(input) {
      console.log({ input, dari: 'login app.vue' });
      this.isLoggedIn = true;
      this.userEmail = input.userEmail;
      this.userName = input.userName;
      swal('Logged In!', `Welcome ${this.userName}!`, 'success');
    },
    logout() {
      swal('Logged Out!', `Good Bye ${this.userName}!`, 'success')
        .then(click => {
          this.userEmail = '';
          this.userName = '';
          this.isLoggedIn = false;
        });
    },
  },
  created() {
    // console.log('created jalan')
    if (window.localStorage.token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    this.carts = [];
    if (window.localStorage.id) {
      axios.get(`${url}/users/${window.localStorage.id}`)
        .then(({ data }) => {
          this.carts = data.carts;
          // console.log({cartList: data.carts});
        })
        .catch((err) => { console.log(err); });
    }
  },
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
