<template>
  <div class="row mt-5 mx-5" v-if="product">
    <div class="col-4">
      <img :src="product.image" alt="" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ product.title }}</h1>
      <h3>${{ product.price }}</h3>
      <input
        v-model.number="quantity"
        type="text"
        class="text-center col-1 mr-2 p-1"
        name=""
        id=""
      />
      <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
      <p class="mt-4">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["product"]),
  },
  mounted() {
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addProToCart"]),
    addToCart() {
      this.addProToCart({
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style></style>
