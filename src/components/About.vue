<template>
  <div>
    <Menu></Menu>
    <Navbar></Navbar>

    <div class="container body">
      <div class="card">
        <div class="card-header">
          <h2>About</h2>
        </div>
        <div class="card-body">
          <h5 class="card-title">Version 1.0</h5>
          <p class="card-text">This project is a Ecommerce Store</p>
          <p class="card-text"></p>
          <p class="card-text">About will be added Soon</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "./Navbar";
import Menu from "./ecommerce/Menu";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    Navbar,
    Menu
  }
};
</script>


<style>
</style>