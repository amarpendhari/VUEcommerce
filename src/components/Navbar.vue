<template>
  <div class="header">
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" @click="ToggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h2 class="text-center text-white m-0">Ecommerce Store</h2>
      <button class="navbar-toggler" type="button" @click="CloseCart">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <span class="count">{{ Purchased.length }}</span>
      </button>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["purchase", "remove", "clearCart"]),
    ...mapMutations(["CloseCart", "ToggleMenu"])
  },
  computed: {
    ...mapGetters(["allProducts", "Rhs", "Lhs", "Purchased", "Total"])
  }
};
</script>

<style>
.header {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
</style>