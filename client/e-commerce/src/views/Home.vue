<template>
  <div class="home">
    <div id="containerHome">
      <div id="sidebar">
        <div class="sidenav">
          <a href="#" @click.prevent="unavailable">About</a>
          <a href="#" @click.prevent="unavailable">Services</a>
          <a href="#" @click.prevent="unavailable">Clients</a>
          <a href="#" @click.prevent="unavailable">Contact</a>
        </div>
      </div>
      <div id="itemDiv">
        <cards v-for="(item, index) in items" :key="index"
        :item="item" @update-cart="updateCart"></cards>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import swal from 'sweetalert';
import cards from '../components/cards.vue';

const url = 'http://localhost:3000';

export default {
  name: 'home',
  components: {
    cards,
  },
  data() {
    return {
      items: [],
      carts: [],
    };
  },
  methods: {
    updateCart(data) {
      this.$emit('update-cart', data);
    },
    unavailable() {
      swal('Item unavailable 😿');
    },
  },
  created() {
    axios.get(`${url}/items`)
      .then(({ data }) => {
        this.items = data;
        // this.$emit('send-item', this.items)
      })
      .catch(err => console.log(err));
  },
};
</script>

<style>
#itemDiv {
  /* background-color: aqua; */
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.sidenav {
  width: 130px;
  /* position: fixed; */
  z-index: 1;
  margin-top: 10px;
  margin-left: 10px;
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

#containerHome {
  display: flex;
  flex-direction: row;
}

</style>
