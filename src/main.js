import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

import VueRouter from "vue-router";
import VueFetch from "vue-fetch";
//import VueResource from 'vue-resource';
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(VueFetch);
//Vue.use(VueResource);

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
