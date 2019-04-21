<template>
  <div id="navbar" style="display: block">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="/">
        <img
          src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18"
          height="35"
          style="margin-right: 10px;"
        >
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
          <li class="nav-item">
            <router-link to="/" class="nav-link">Lapaktiv8</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/items" class="nav-link">Items</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>

        <div class="input-group col-sm-4">
          <router-link to="/myCart" @click.prevent="cartList">
          <button class="btn btn-dark" style="margin-right: 20px;">
          My Cart ({{carts.length}})
          </button>
          </router-link>
          <input
            type="text"
            placeholder="Search product here"
            aria-label="Search product here"
            aria-describedby="button-addon2"
            style="border-top-left-radius: 5px; border-bottom-left-radius: 5px;"
            class="form-control"
          >
          <div class="input-group-append">
            <button class="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
          </div>
        </div>
        <span class="navbar-text" style="margin-right: 10px;" v-if="isLoggedIn">{{userEmail}}</span>
        <button class="btn btn-dark" data-toggle="modal"
        data-target="#modalLogin" v-if="!isLoggedIn">Login</button>
        <button class="btn btn-dark" v-if="isLoggedIn" @click="logout">Logout</button>
      </div>
    </nav>
    <!-- Modal -->
    <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog"
    aria-labelledby="modalLoginLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" v-if="page == 'login'">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLoginLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="password"
                id="exampleInputPassword1" placeholder="Password">
              </div>
              <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click.prevent="page = 'register'">Register</button>
            <button type="button" class="btn btn-primary" @click.prevent="login">Login</button>
          </div>
        </div>
        <div class="modal-content" v-if="page == 'register'">
          <div class="modal-header">
            <h5 class="modal-title" id="modalregisterLabel"
            @click.prevent="page = 'register'">Register</h5>
            <button type="button" class="close" data-dismiss="modal"
            aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form method="post">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-model="email"
                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="password"
                id="exampleInputPassword1" placeholder="Password">
              </div>
              <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary"
            @click.prevent="register">Register</button>
            <button class="btn btn-secondary"
            v-on:click.prevent="page = 'login'">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const url = 'http://localhost:3000';

export default {
  name: 'navbar',
  props: [
    'carts',
    'isLoggedIn',
    'userEmail',
  ],
  data() {
    return {
      page: 'login',
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log({
        email: this.email,
        password: this.password,
        state: 'login',
      });
      axios.post(`${url}/login`, {
        email: this.email,
        password: this.password,
      })
        .then(({ data }) => {
          console.log(data);
          window.localStorage.token = data.access_token;
          window.localStorage.id = data.id;
          window.localStorage.name = data.name;
          window.localStorage.email = data.email;
          this.$emit('logged-in', {
            isLoggedIn: true,
            userEmail: this.email,
            userName: data.name,
          });
          this.email = '';
          this.password = '';
          $('#modalLogin').modal('hide');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout() {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('id');
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
      this.$emit('logged-out', {
        isLoggedIn: false,
        userEmail: '',
        userName: '',
      });
    },
    register() {
      console.log({
        email: this.email,
        password: this.password,
        state: 'register',
      });
      axios.post(`${url}/register`, {
        email: this.email,
        password: this.password,
      })
        .then(({data}) => {
          this.email = '';
          this.password = '';
          $('#modalLogin').modal('hide');
          this.$emit('registered', data);
        })
        .catch((err) => {
          console.log(err)
        })
    },
    cartList() {
      // console.log(1)
    },
  },
  created() {
  }
};
</script>

<style>
#navbar {
  background-color: aqua;
  height: 50px;
  margin-bottom: 10px;
}
</style>
