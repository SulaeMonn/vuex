<template>
  <div class="d-flex align-item-stretch flex-wrap">
    <product-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCart from "./ProductCart.vue";
export default {
  components: { ProductCart },
  computed: {
    ...mapState({
      products: (state) => state.product.products,
    }),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style></style>
