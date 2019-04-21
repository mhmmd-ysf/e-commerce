<template>
  <div>
    {{selected.name}}<br>
    {{selected.price}}<br>
    {{selected.stock}}<br>
    {{selected.description}} <br>
    <img :src="selected.featuredImg">
  </div>
</template>

<script>
export default {
  name: 'detailed',
  props: [
    'carts',
  ],
  data() {
    return {
      selected: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.selected = this.carts.filter(item => item._id === id);
    const [temp] = this.selected;
    this.selected = temp;
  },
};
</script>
