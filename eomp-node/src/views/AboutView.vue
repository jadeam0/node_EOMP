<template>
  <div class="about">
    <div class="container">
      <div class="center-content">
        <h1>About Us</h1>
        <p>
          Welcome to KitchenBlend, your premier source for exquisite kitchen essentials. As a new 
          and thriving small enterprise, we take pride in offering a handpicked selection of 
          top-tier kitchen utilities, ranging from elegant pots and pans to impeccable cutlery, 
          all designed to enhance your culinary journey.

          At KitchenBlend, we understand that the heart of a delightful meal lies in the tools you 
          use. Our dedicated team is committed to delivering products that seamlessly blend 
          innovation and tradition, catering to the needs of both novice cooks and seasoned professionals.
          
          Our brand philosophy centers on the belief that a well-equipped kitchen is the canvas for 
          crafting extraordinary dishes. We're excited to be part of your cooking odyssey, providing 
          you with the means to transform ordinary ingredients into extraordinary creations.
          
          Quality is at the core of what we do. Every piece of kitchenware we offer is a testament to 
          our commitment to excellence. By combining premium materials and meticulous craftsmanship, 
          we ensure that each item surpasses industry standards, ensuring your satisfaction for years to come.
          
          As we embark on this culinary adventure, we invite you to explore our growing catalog of 
          kitchen essentials. Join us in reimagining what's possible in your kitchen, and experience 
          the joy of cooking like never before.
          
          Thank you for choosing KitchenBlend to be your culinary partner. Here's to many delectable 
          moments shared over a beautifully set table.
          
          Warm regards,
          The KitchenBlend Team
          
        </p>
        <div class="image-contain">
          <div class="image-1">
            <img src="https://i.postimg.cc/zvLRNh8n/C12-C2-Lyle-Kepky-1.jpg">
          </div>
          <div class="image-2">
            <img src="https://i.postimg.cc/15z2c0nf/C12-C1-Jadee-Paulse-1.jpg">
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

h1 {
  font-family: Italiana;
  font-size: 40px;
  font-weight: 400;
  text-decoration: underline;
}

p {
  font-size: 25px;
}
.about {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  display: flex;
  justify-content: center;
  text-align:center;
  padding: 20px;
}


.center-content {
  max-width: 900px;
  padding: 20px;
  text-align: center;
}


.image-contain {
  /* background-color: blue; */
  height: 350px;
  width: 900px; 
  display: flex;
  justify-content:center;
}

img {
  width: 200px;
  padding-top: 20px;
}

.image-1 {
}
.image-2 {
margin-left: 20px;
}
</style>
