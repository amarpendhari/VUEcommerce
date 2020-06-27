<template>
  <div class="Store">
    <Menu></Menu>

    <Navbar></Navbar>

    <div class="body container" :class="{disable: Rhs , showMenu: Lhs}">
      <div class="text-center">
        <h2 class="p-3">2020 Collection</h2>
        <div class>
          <div class="figure show-image" v-for="(product,i) in allProducts" :key="i">
            <img
              :src="product.Poster"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <span class="addtocart" @click="purchase(product)">ADD to Cart</span>
            <span class="figure-caption">{{product.name }}</span>
            <span class="figure-caption">
              <b>₹ {{product.price }}</b>
            </span>
          </div>
        </div>
      </div>
    </div>

    <Cart></Cart>
  </div>
</template>


<script>
import Cart from "./Cart";
import Navbar from "../Navbar";
import Menu from "./Menu";
import { mapGetters, mapActions, mapMutations } from "vuex";
//import axios from "axios";
export default {
  name: "Ecommerce",
  data() {
    return {
      lhs: false,
      rhs: false,
      total: 0,
      products: []
    };
  },
  components: {
    Cart,
    Menu,
    Navbar
  },
  methods: {
    /*getTotal() {
      //console.log(this.$store.state.products.purchasedproducts[0].price);
      //console.log(this.$store);
      this.$store.state.products.purchasedproducts.forEach(element => {
        //console.log(element);
        this.total = this.total + element.price;
      });
      console.log(this.total);
    },*/ // Global function defined to get total and hooked on beforecreated , buy , clearcart , remove
    ...mapActions(["purchase", "remove", "clearCart"]),
    ...mapMutations(["CloseCart", "getTotal", "ToggleMenu"])
  },
  computed: {
    ...mapGetters(["allProducts", "Rhs", "Lhs", "Purchased", "Total"])
  },
  mounted() {
    //this.getTotal();   function
    //console.log("mounted");  3
  },
  created() {
    //this.getTotal;
    //this.$store.commit("getTotal");
    //console.log("created");   // 2
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
    this.$store.commit("getTotal");
    //console.log("before");   //  1
  }
};
</script>


<style>
.Store {
  font-family: "Playfair Display", serif;
}
.container {
  padding-top: 60px;
}
.body.disable,
.body.showMenu {
  opacity: 0.5;
}
.count {
  position: absolute;
  display: block;
  top: 5px;
  right: 9px;
  min-width: 20px;
  background: aliceblue;
  color: #343a40;
  padding: 1px;
  border-radius: 50%;
}
.rhs {
  transform: translateX(+100%);
  min-width: 400px;
  height: -webkit-fill-available;
  background: burlywood;
  position: fixed;
  transition: transform 2s;
  right: 0;
  top: 56px;
  z-index: 100;
}
.rhs.show {
  transform: translateX(0px);
  overflow: auto;
}
.rhs .ul {
  list-style: none;
}
.figure {
  position: relative;
  margin: 20px;
  padding: 10px;
}
.figure-caption {
  display: block;
}
.img-fluid {
  height: 250px;
  width: 250px;
}
.addtocart {
  position: absolute;
  z-index: 2;
  top: 44px;
  display: none;
  left: 59px;
  transition: transform 2s;
}
.figure {
  background: #d3d3d3;
}
.figure-caption {
  color: #000;
}
.figure:hover .addtocart {
  display: inline;
  background: coral;
  padding: 10px;
  top: 68%;
  left: 4%;
  cursor: pointer;
}
div.show-image:hover img {
  opacity: 0.6;
}
.disable div.show-image:hover img,
.showMenu div.show-image:hover img {
  opacity: 1;
}
.disable .figure:hover .addtocart,
.showMenu .figure:hover .addtocart {
  display: none;
}
.close {
  position: absolute;
  right: 5px;
}
</style>