<template>
  <div class="back">
    <div class="middle">
      <div class="rect-1"></div>
      <div class="rect-2"></div>
      <div class="rect-3"></div>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
*{
 
}

.back {
  display: flex;
  justify-content: center;
  position: absolute;
  background-position: center;
  background: url(https://i.postimg.cc/kX3s0MGk/edgar-castrejon-CX8ooha2y-LA-unsplash.jpg) no-repeat center center/cover ; 
  height: 100vh;
  width: 100%;
}


.middle {
  gap: 20px;
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
</style>