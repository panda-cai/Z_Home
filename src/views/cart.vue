<template>
  <div class="cart inner-border fixed">
    <div class="back">
      <div class="backicon" @click="back">
        <img src="images/icon_my_enter.png" alt />
      </div>
      <span>购物车</span>
    </div>
    <div class="product-list">
    <van-swipe-cell>
      <!-- <van-cell :border="false" title="单元格" /> -->
      <div class="cart-card">
        <div class="left">
          <van-checkbox v-model="checked" checked-color="#ff9704">
            <img src="images/sofa1.jpg" alt="">
          </van-checkbox>
        </div>
        <div class="right">
          <span class="title">主标题</span>
          <div class="my-small ms">
            <span>款式:粉色</span>
            <span>规格:57cm*61cm*76cm</span>
          </div>
          <div class="down">
            <span class="price">￥123</span>
            <div><van-stepper v-model="value" /></div>
          </div>
        </div>
      </div>
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
    </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked:true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.price{
  margin-right:0.5rem;
  color: #000;
  font-weight: bold;
}
.down{
  display: flex;
  align-items: center;
}
.title{
  color: #000;
  font-size: 1rem;
}
.right{
  padding:0.5rem 0 0 0.5rem;
}
.right .ms {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
}
.cart-card{
  display: flex;
}
.left img{
  width: 8rem;
  border:1px solid #f5f5f5; 
}
.van-button{
  height: 100%;
}
.teststyle{
  display: block;
  padding: 5rem 0;
}
.cart {
  box-sizing: border-box;
}
.back {
  /* border-bottom: 1px solid #e8e8e8; */
  height: 3rem;
  background: #fff;
  box-sizing: border-box;
}
.back span {
  display: block;
  line-height: 3rem;
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
}
.backicon {
  float: left;
  line-height: 3rem;
}
.backicon img {
  vertical-align: middle;
  transform: rotate(180deg);
  width: 2rem;
}
.fixed {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>