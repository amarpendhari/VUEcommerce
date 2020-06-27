import About from "./components/About.vue";
import Ecommerce from "./components/ecommerce/Ecommerce.vue";

export const routes = [
  { path: "/about", component: About },
  { path: "/", component: Ecommerce }
];
