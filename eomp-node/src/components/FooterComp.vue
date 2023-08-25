<template>
  <div class="container">
  <footer class="text-center text-lg-start text-white" style="background-color: #cdcdcd">
    <div class="container p-4">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <img class="logo" src="https://i.postimg.cc/k5wLD4DK/1692782513021-thumbnail-removebg-preview.png" />
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <router-link to="/Products" class="text-white">Product link</router-link>
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <router-link to="/Modal" class="text-white">Your Account</router-link>
            </p>
            <p>
              <router-link to="#" class="text-white">Shipping Rates</router-link>
            </p>
            <p>
              <a class="text-white">Help</a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> <img class="whatsapp" src="https://i.postimg.cc/SsrhQqGX/whatsapp.png"/> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> <img class="whatsapp" src="https://i.postimg.cc/SsrhQqGX/whatsapp.png"/> + 01 234 567 89</p>
          </div>
        </div>
      </section>

      <hr class="my-3">
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2020 Copyright:
              <a class="text-white"
                 >KitchenBlend</a>
            </div>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"><i class="fab fa-linkedin"><img class="icon" src="https://i.postimg.cc/yN8qf0T5/linkedin.png"/></i>
            </a>
            <a class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"><i class="fab fa-twitter"><img class="icon" src="https://i.postimg.cc/fbz17Yvz/twitter-1.png"/></i>
            </a>
            <a class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"><i class="fab fa-facebook"><img class="icon" src="https://i.postimg.cc/wBnPCnpv/facebook.png"/></i>
            </a>
            <a class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"><i class="fab fa-instagram"> <img class="icon" src="https://i.postimg.cc/X7wCd5JD/instagram.png"/> </i>
            </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>

</template>




<script>

</script>

<style scoped>
.logo {
  width: 190px;
}

.icon {
  width: 25px;
}

.whatsapp{
  width:20px;
}

</style>
