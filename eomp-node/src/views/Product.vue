<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2 text-white">Welcome</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="product of products" :key="product">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top img-fluid" :alt="product.prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }} <br> R {{ product.prodPrice }}</h5>
                      <p class="card-text"><span>Category: {{ product.category }}</span></p>
                      <button @click="singleProduct(product.prodId)">Add</button>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        },
        methods: {
            singleProduct(product_id) {
                const chosenProd = this.products.find (
                    (product) => product.prodId === prodId
                );
                this.$store.commit("setSelectedProduct", chosenProd);
                this.$router.push({name:"SingleProduct", params: {prodId: prodId}})
            }
        }
    }
</script>
<style scoped>
.card-img-top{
    display: block;
    margin: 0 auto;
}
.card{
    margin-bottom:1rem ;
}
</style>









