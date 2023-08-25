import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    selectedProduct: null,
    error: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    setError(state, error) { 
      state.error = error;
    },
    clearError(state) { 
      state.error = null;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://neomp.onrender.com/products');
        const { results } = await response.json();
        commit('setProducts', results);
        commit('clearError'); 
      } catch (error) {
        console.error(error);
        commit('setError', 'An error occurred while fetching products.');
        alert('An error occurred while fetching products.');
      }
    },
    async fetchProductById({ commit }, productId) {
      try {
        const response = await fetch(`https://neomp.onrender.com/products/${productId}`);
        const product = await response.json();
        commit('setSelectedProduct', product);
        commit('clearError');
      } catch (error) {
        console.error(error);
        commit('setError', 'An error occurred while fetching the product.');
        alert('An error occurred while fetching the product.');
      }
    },
    async fetchUsers(context) {
      try{
        let users = await (await fetch(`https://neomp.onrender.com/register/${userID}`)).json()
        if (users) {
          context.commit ("setUsers", users)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(e)
      }
    },
  },
  getters: {
    getProductById: (state) => (productId) => {
      return state.products.find(product => product.id === productId);
    },
  },
});

