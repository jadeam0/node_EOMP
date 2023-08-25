<template>
    <div> 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add to Product table
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="w-75 mx-auto shadow-lg p-5 m-3 bg-info rounded-3">
    <h1>Add Products</h1>

    <label for="" class="mt-3">Product Name:</label>
    <input type="text" oninput="validatProduct();" class="form-control mt-2" id="ProductName">


    <label for="" class="mt-3">Product Category:</label>
    <input type="text" class="form-control mt-2" id="ProductCategory">


    <label for="" class="mt-3">Product Price:</label>
    <input type="text" class="form-control mt-2" id="ProductPrice">


    <label for="" class="mt-3">Product Description:</label>
    <textarea type="text" class="form-control mt-2" id="ProductDescription"></textarea>


    <button id="addbtn" onclick="createProduct();" class="btn btn-danger mt-4">Add Product</button>
    <button onclick="createProduct(); addBtnBack();" id="updatebtn" class="btn btn-danger d-none mt-4">Update</button>
    <button onclick="clearForm();" class="btn btn-dark mt-4">Clear</button>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <!-- Modal End -->


    <input type="text" class="form-control w-50 mx-auto m-5 shadow-sm" placeholder="Search..." id="searchinput" onkeyup="searchProduct()">


    <table class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3 ">
    <thead>
        <tr>
        <th>index</th>
        <th>name</th>
        <th>category</th>
        <th>price</th>
        <th>description</th>
        <th>delete</th>
        <th>update</th>
        </tr>
    </thead>
    <tbody class="bg-light text-dark" id="tbody">
        
        <tr v-if="products">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.prodPrice }}</td>
                <td>{{ product.category }}</td>
                <td><img class="admin-img" :src=product.prodUrl></td>
                <td><updateProduct :product="product"/>
                    <button class="btn" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
            </tr>

    </tbody>
    </table>
    </div>

</template>

<script>
import Adduser from '@/components/AddUser.vue';

export default {
  components: {
     Adduser
  }, 

  computed: {
    users() {
      return this.$store.state.users
    }
  }

}



methods: {

}


</script>


<style scoped>

</style>