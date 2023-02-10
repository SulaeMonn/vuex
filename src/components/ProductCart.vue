<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img :src="product.image" alt="" class="w-100" style="height: 300px" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            {{ product.title }}</router-link
          >
        </h4>
        <strong>$ {{ product.price }}</strong>
        <p class="card-text">{{ formatDes(product.description) }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  methods: {
    ...mapActions("cart", ["addProToCart"]),
    addToCart() {
      this.addProToCart({
        product: this.product,
        quantity: 1,
      });
    },
    formatDes(des) {
      return des.slice(0, 200) + "...";
    },
  },
};
</script>

<style>
.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #007bff;
}
</style>
