<template>
    <div class="add-products-div">
      <div class="add-products-inner">
        <slot />
  
        <div class="input-details-div">
          <div class="input-details-row">
            <label for="prodID">Product ID</label>
            <input type="text" class="info-input" v-model="model.product.prodID" />
          </div>
          <div class="input-details-row">
            <label for="prodName">Product Name</label>
            <input type="text" class="info-input" v-model="model.product.prodName" />
          </div>
          <div class="input-details-row">
            <label for="quantity">Quantity</label>
            <input type="text" class="info-input" v-model="model.product.quantity" />
          </div>
          <div class="input-details-row">
            <label for="amount">Price</label>
            <input type="text" class="info-input" v-model="model.product.amount" />
          </div>
          <div class="input-details-row">
            <label for="Category">Category</label>
            <input type="text" class="info-input" v-model="model.product.Category" />
          </div>
          <div class="input-details-row">
            <label for="prodUrl">Image URL</label>
            <input type="text" class="info-input" v-model="model.product.prodUrl" />
          </div>
        </div>
  
        <button @click="ToggleModal" class="close-btn">Close</button>
        <button @click="AddProduct" class="add-product-btn">Add Product</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AddProductsComp",
    props: ["ToggleModal"],
    data() {
      return {
        model: {
          product: {
            prodID: "",
            prodName: "",
            quantity: "",
            amount: "",
            Category: "",
            prodUrl: "",
          },
        },
      };
    },
    methods: {
      AddProduct() {
        axios
          .post("https://neomp.onrender.com/products", this.model.product)
          .then((res) => {
            console.log(res.data);
            alert("You have added a product");
  
            this.model.product = {
              prodID: "",
              prodName: "",
              quantity: "",
              amount: "",
              Category: "",
              prodUrl: "",
            };
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .add-products-div {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .add-products-inner {
    width: 50%;
    height: 52.5%;
    background: white;
    text-align: center center;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    padding-top: 10px;
  }
  
  .input-details-row {
    padding: 0 10px 15px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .input-details-div {
    display: flex;
    flex-direction: column;
  }
  
  .close-btn,
  .add-product-btn {
    cursor: pointer;
    justify-content: center;
    margin: 0;
    width: 100px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    height: 30px;
    margin-right: 10px;
  }
  
  .close-btn {
    background-color: orange;
  }
  
  .add-product-btn {
    background-color: rgba(4, 255, 0, 0.936);
  }
  
  .close-btn:hover {
    background-color: darkorange;
  }
  
  .add-product-btn:hover {
    background-color: rgb(76, 252, 0);
  }
  
  .close-btn:active {
    background-color: rgb(255, 106, 0);
  }
  
  .add-product-btn:active {
    background-color: rgb(0, 205, 0);
  }
  </style>
  