<template>
  <div>
    <div class="back">
      <h1>Life</h1>
    </div>
    <div class="middle">
      <div class="rect-1">
        <img class="display-item-1" src="https://i.postimg.cc/NG8RgVBP/Iron-Round-Cocottes-removebg-preview.png">
      </div>
      <div class="rect-2">
        <img class="display-item-2" src="https://i.postimg.cc/pTf5Lhbn/Nordic-Kitchen-Kitchenware-Eva-Solo-4-removebg.png">
      </div>
      <div class="rect-3">
        <img class="display-item-3" src="https://i.postimg.cc/j2hfZWMr/BH-Blaumann-34cm-stainless-steel-8mm-grater-removebg-preview.png">
      </div>
    </div>
    
  </div>
</template>

<script>
export default{
  name: 'HomeView',
 
}
</script>

<style scoped>


.back {
  display: flex;
  justify-content: center;
  background-position: center;
  background: url(https://i.postimg.cc/kX3s0MGk/edgar-castrejon-CX8ooha2y-LA-unsplash.jpg) no-repeat center center/cover ; 
  height: 100vh;
  width: 100%;
}


.middle {
  padding-top: 50px;
  gap: 50px;
  display: flex;
}


.rect-1 {
  background: rgba(205, 205, 205, 0.70);
  width: 271px;
  height: 499px;
}
.rect-2 {
  background: rgba(205, 205, 205, 0.70);
  width: 271px;
  height: 499px;
}
.rect-3 {
  background: rgba(205, 205, 205, 0.70);
  width: 271px;
  height: 499px;
}

.display-item-1 {
  padding-top: 40px;
  width: 242px;
  aspect-ratio: 3/3;
}
.display-item-2 {
  padding-top: 75px;
  width: 242px;
}
.display-item-3 {
  padding-top: 25px;
  width: 242px;
}
</style>