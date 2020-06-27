<template>
  <div class="lhs" :class="{show: Lhs}">
    <div class="logo">
      <img
        src="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
        alt="user"
      />
    </div>
    <ul>
      <router-link tag="li" class="menu-item" to="/">
        <h4 @click="ToggleMenu">All Products</h4>
      </router-link>
      <!-- <router-link tag="li" class="menu-item" to="/shoes">
        <h4 @click="ToggleMenu">Buy Shoes</h4>
      </router-link>
      <router-link tag="li" class="menu-item" to="/about">
        <h4 @click="ToggleMenu">About</h4>
      </router-link> -->
      <router-link tag="li" class="menu-item" to="/about">
        <h4 @click="ToggleMenu">About</h4>
      </router-link>
    </ul>
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
    ...mapMutations(["CloseCart", "ToggleMenu"])
  },
  computed: {
    ...mapGetters(["allProducts", "Rhs", "Lhs", "Purchased", "Total"])
  }
};
</script>


<style>
.body.showMenu {
  opacity: 0.5;
}
.lhs {
  background: burlywood;
  transform: translateX(-200px);
  transition: transform 2s;
  z-index: 100;
  top: 56px;
  border-right: 2px solid rgba(200, 200, 200, 0.1);
  color: #000;
  position: fixed;
  left: 0;
  width: 200px;
  height: 100%;
  z-index: 100;
}
.lhs.show {
  transform: translateX(0px);
}
.lhs .logo {
  padding: 30px 0;
  text-align: center;
}

.lhs .logo img {
  height: 75px;
  width: 75px;
  border-radius: 50%;
}

.lhs ul {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

.lhs ul li {
  border-bottom: 2px solid rgba(200, 200, 200, 0.1);
  padding: 10px 20px;
}

.lhs ul li:first-of-type {
  border-top: 2px solid rgba(200, 200, 200, 0.1);
}

.lhs ul li a {
  color: #fff;
  text-decoration: none;
}

.lhs ul li a:hover {
  text-decoration: underline;
}
</style>