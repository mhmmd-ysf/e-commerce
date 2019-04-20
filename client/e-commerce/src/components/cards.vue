<template>
  <div class="card" style="margin: 10px;">
    <img :src="item.featuredImg" class="card-img-top" alt="Gambar Item">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p class="card-text">{{item.description}}</p>
      <!-- <a href="#" class="btn btn-primary">Details</a> -->
      <button class="btn btn-primary" data-toggle="modal" data-target="#modalDetails"
      @click="viewItem(item._id)">Details</button>
      <button class="btn btn-primary" @click.prevent="addToCart(item._id)">Add to Cart</button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="modalDetails" tabindex="-1"
    role="dialog" aria-labelledby="modalDetailsLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDetailsLabel">Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Product Name:</label>
                <input type="text" class="form-control">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Register</button>
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const url = 'http://localhost:3000'

export default {
  name: 'cards',
  props: [
    'item',
  ],
  methods: {
    viewItem(id) {
      console.log({ id });
    },
    addToCart(id) {
      // console.log({id, msg: 'addToCart', userId: window.localStorage.id});
      axios.defaults.headers.common['id_token'] = window.localStorage.token
      axios.put(`${url}/addToCart`, {
        itemId: id
      })
        .then(({ data }) => {
          // ! mestinya ada emit buat update jumlah cart
          // console.log({dataBalikan: data})
          this.$emit('update-cart', data)
        })
        .catch((err) => {console.log(err)})
    }
  },
};
</script>

<style>
</style>
