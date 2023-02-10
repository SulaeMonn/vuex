<template>
  <div
    class="dropdown-menu pd-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="dropdownMenu2"
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} * ${{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.product)"
            >remove</a
          >
        </div>
      </div>

      <hr />
    </div>
    <div class="px-2 d-flex justify-content-between">
      <span>Total: {{ cartTotalPrice }}</span>
      <a href="#" @click.prevent="clearCartItems()" :class="disabledClass(cart)"
        >Clear Cart</a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["cartTotalPrice"]),
  },
  mounted() {
    this.getCartItems();
  },
  methods: {
    ...mapActions("cart", [
      "removeProductFromCart",
      "clearCartItems",
      "getCartItems",
    ]),
    disabledClass: (cart) => {
      return cart.length === 0 ? "disabled" : "";
    },
  },
};
</script>

<style>
.disabled {
  color: gray;
  pointer-events: none;
}
</style>
