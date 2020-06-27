<template>
  <div class="rhs" :class="{show: Rhs}">
    <button type="button" class="close p-2" @click="CloseCart">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="p-3">
      <h3 class="text-center">Cart</h3>
    </div>

    <div class="inCart">
      <div class="product" v-for="(product,i) in Purchased" :key="i">
        <img :src="product.Poster" alt />
        <div class="p-2">
          <div class="product-title">{{ product.name}}</div>
          <div class="product-price">₹ {{ product.price}}</div>
        </div>
        <div class="remove">
          <button class="btn-danger btn" @click="remove(i)">Remove</button>
        </div>
      </div>
    </div>

    <div class="total text-center p-4 mb-5" v-if="Purchased.length != 0">
      <h4>Your Total : ₹ {{ Total }}</h4>
      <button class="btn btn-success" @click="clearCart">Clear Cart</button>
    </div>
    <div class="total text-center p-4 mb-5" v-else>
      <h4>Your Cart is Empty !!! Go Shop Now</h4>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapActions(["purchase", "remove", "clearCart"]),
    ...mapMutations(["CloseCart", "getTotal"])
  },
  computed: {
    ...mapGetters(["allProducts", "Rhs", "Purchased", "Total"])
  }
};
</script>


<style>
.product {
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
}
.product img {
  width: 100px;
}
.remove {
  margin-left: auto;
}
</style>