<template>
  <div class="card" style="margin: 10px;">
    <img :src="item.featuredImg" class="card-img-top" alt="Gambar Item">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p class="card-text">{{item.description}}</p>
      <router-link :to="{name: 'detailed', params: {id: item._id}}">
        <button class="btn btn-primary">Details</button></router-link>
      <button class="btn btn-danger" @click.prevent="removeFromCart(item._id)"
      >Remove from Cart</button>
      <button class="btn btn-danger" @click.prevent="removeAll(item._id)"
      >Remove all {{item.name}}</button>
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
import swal from 'sweetalert';

const url = 'http://localhost:3000';

export default {
  name: 'cards',
  props: [
    'item',
  ],
  methods: {
    viewItem(id) {
      console.log({ id });
    },
    removeFromCart(id) {
      // console.log({id, msg: 'removeFromCart', userId: window.localStorage.id});
      swal('Item Deleted')
        .then((click) => {
          axios.defaults.headers.common.id_token = window.localStorage.token;
          return axios.put(`${url}/removeFromCart`, {
            itemId: id,
          });
        })
        .then(({ data }) => {
          this.$emit('update-cart', data);
        })
        .catch((err) => { console.log(err); });
    },
    removeAll(id) {
      // console.log({id, msg: 'removeAll', userId: window.localStorage.id});
      swal('All selected items deleted')
        .then((click) => {
          axios.defaults.headers.common.id_token = window.localStorage.token;
          return axios.put(`${url}/removeAll`, {
            itemId: id,
          });
        })
        .then(({ data }) => {
          this.$emit('update-cart', data);
        })
        .catch((err) => { console.log(err); });
    },
  },
};
</script>

<style>
.card-body button {
  margin: 10px;
  display: flex;

}
</style>
