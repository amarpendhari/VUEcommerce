  const state = {
  products: [
    {
      name: "LeBron 17",
      price: 15297,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb8a75f-6d77-4080-966c-f09d980d34e2/lebron-17-basketball-shoe-JqmdXg.jpg",
      description:
        "The LeBron 17 harnesses LeBron's strength and speed with containment and support for all-court domination. It features a lightweight mix of knit and heat-moulded yarns that gives each one a durable look and feel. Combined cushioning provides LeBron with the impact support and responsive energy return he needs to power through the long season."
    },
    {
      name: "Nike Air Max 97",
      price: 15995,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89320c74-f354-4178-9cd1-bb27bc2b4a99/air-max-97-shoe-nQGPPc.jpg",
      description:
        "Remastered from the OG that shook up the running world, the Nike Air Max 97 elevates the classic design. Bold new colours draw inspiration from the Hanshin Tigers, one of Japan's oldest baseball teams."
    },
    {
      name: "Nike Epic React Flyknit 2",
      price: 7797,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e4omax9bncdtbz0qhrpw/epic-react-flyknit-2-running-shoe-ShRZnm.jpg",
      description:
        "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run."
    },
    {
      name: "Nike Air Zoom Pegasus 37",
      type: "shoes",
      price: 9995,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e13dabf-e6c6-4430-aa51-1443d9eda9f9/air-zoom-pegasus-37-running-shoe-mwrTCc.jpg",
      description:
        "Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness. The result is a durable, lightweight trainer designed for everyday running."
    },
    {
      name: "Nike Zoom Pegasus Turbo 2",
      price: 15995,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d695289-3178-427d-a82e-1372bbdf8909/zoom-pegasus-turbo-2-running-shoe-L9mVGn.jpg",
      description:
        "The Nike Zoom Pegasus Turbo 2 is updated with a feather-light upper, while innovative foam brings revolutionary responsiveness to your long-distance training."
    },
    {
      name: "Nike Zoom Fly Flyknit",
      price: 15995,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fgfmrrahxvqnnkaruzii/zoom-fly-flyknit-running-shoe-B3BBnm.jpg",
      description:
        "Nike Zoom Fly Flyknit Men's Running Shoe is built for record-breaking speed. The Flyknit upper delivers ultra-lightweight support that fits like a glove."
    },
    {
      name: "Nike Joyride Run Flyknit",
      price: 14995,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-115e27ef-a692-4061-9686-09bc0a2234aa/joyride-run-flyknit-running-shoe-sqfqGQ.jpg",
      description:
        "The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot contour to your foot for cushioning that stands up to your mileage."
    },
    {
      name: "Nike Air Max 2090 BETRUE",
      price: 12995,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c77ab6ec-a87e-4b4e-9b7f-9ed7a2adb818/air-max-2090-betrue-shoe-5HhRK7.jpg",
      description:
        "March into the future in your Nike Air Max 2090 BETRUE, a bold new look inspired by the iconic Air Max 90. Celebrating the LGBTQIA+ community, the airy upper features translucent fabric to reveal a vibrant array of Pride colours beneath. Its asymmetrical design, decorative stitching and see-through TPU heel clip add an edgy, modernised look while super-soft Nike Air cushions your journey."
    },
    {
      name: "Nike Air Max 270 React ENG",
      price: 8797,
      Poster:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2006254-29af-4238-9fbe-a698f0e371fa/air-max-270-react-eng-older-shoe-lSR69G.jpg",
      description:
        "Go big in the Nike Air Max 270 React ENG. It combines Nike's tallest Max Air unit yet with springy Nike React foam for cushioning that doesn't stop, plus space-inspired style inspires you to shoot for the stars."
    }
  ],
  purchasedproducts: [],
  rhs: false,
  lhs: false,
  total: 0,
  a: 0
};

const getters = {
  allProducts: state => state.products,
  Purchased: state => state.purchasedproducts,
  Rhs: state => state.rhs,
  Lhs: state => state.lhs,
  Total: state => state.total
};

const actions = {
  purchase({ commit }, product) {
    console.log(product);
    commit("Buy", product);
    commit("getTotal");
  },
  remove({ commit }, product) {
    commit("Delete", product);
    commit("getTotal");
  },
  clearCart({ commit }) {
    commit("EmptyCart");
    commit("getTotal");
  }
};

const mutations = {
  Buy: (state, product) => {
    state.rhs = true;
    state.purchasedproducts.push(product);
    localStorage.setItem("MyCart", JSON.stringify(state.purchasedproducts));
  },
  Delete: (state, product) => {
    //state.purchasedproducts.splice(product, 1);
    if (localStorage.getItem("MyCart")) {
      localStorage.removeItem(state.purchasedproducts.splice(product, 1));
      localStorage.setItem("MyCart", JSON.stringify(state.purchasedproducts));
    }
  },
  EmptyCart: state => {
    state.rhs = false;
    state.purchasedproducts = [];
    localStorage.removeItem("MyCart");
  },
  CloseCart: state => (state.rhs = !state.rhs),
  initialiseStore(state) {
    if (localStorage.getItem("MyCart")) {
      Object.assign(
        state.purchasedproducts,
        JSON.parse(localStorage.getItem("MyCart"))
      );
    }
  },
  ToggleMenu: state => {
    state.lhs = !state.lhs;
  },
  getTotal: state => {
    state.total = 0;
    state.purchasedproducts.forEach(element => {
      state.total = state.total + element.price;
      console.log(state.total, element.price);
    });
    console.log(state.total, "total");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
