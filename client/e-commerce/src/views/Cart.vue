<template>
  <div class="cartDiv">
    <div id="containerHome">
      <div id="sidebar">
        <div class="sidenav">
          <a href="#about" class>About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div id="itemDiv">
        <carts v-for="(item, index) in carts" :key="index" :item="item"></carts>
      </div>
    </div>
  </div>
</template>

<script>
import cards from '../components/cards.vue';
import carts from '../components/carts.vue';

export default {
  name: 'cart',
  components: {
    cards,
    carts,
  },
  props: [
    'carts',
  ],
  data() {
    return {
      sorted: {},
    };
  },
  created() {
    // let temp = []
    // this.carts.forEach((item) => {
    //   temp.push(item)
    // })
    // let tes = temp.reduce((acc, cur) => {
    //   acc[cur.name] = (acc[cur.name] || 0) + 1
    //   return acc
    // }, {})
  },
}
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
