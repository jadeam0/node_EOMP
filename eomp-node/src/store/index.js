import { createStore } from 'vuex'
const url = "https://neomp.onrender.com/products"
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
  },
  getters: {
  },
  mutations: {
    setProducts: (state, value) => {
      state.products = value
    },

  },
  actions: {
    async fetchProducts(context) {
      try{
        let products = await (await fetch(`https://neomp.onrender.com/products`)).json()
        if (products) {
          context.commit ("setProducts", products)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
    },
    
  },
  modules: {
  }
})
