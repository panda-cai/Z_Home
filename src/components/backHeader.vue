<template>
  <div class="back inner-border" :class="fixed?'fixed':''">
    <div class="backicon" @click="back">
      <img src="images/icon_my_enter.png" alt="">
    </div>
    <cart-icon v-if="shopping"></cart-icon>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1);
      }
  },
  props:['shopping','fixed']
}
</script>

<style scoped>
.back{
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
}
.backicon img{
  transform: rotate(180deg);
  width: 2rem;
}
.fixed{
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>