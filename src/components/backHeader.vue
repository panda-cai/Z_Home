<template>
  <div class="back inner-border">
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
  props:['shopping']
}
</script>

<style scoped>
.back{
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.backicon img{
  transform: rotate(180deg);
  width: 2rem;
}

</style>