<template>
  <div class="cart inner-border fixed">
    <div class="back">
      <div class="backicon" @click="back">
        <img src="images/icon_my_enter.png" alt />
      </div>
      <span>购物车</span>
    </div>
    <div class="product-list">
      <van-swipe-cell v-for="(elem,i) of list" :key="i" class="product-item">
        <!-- <van-cell :border="false" title="单元格" /> -->
        <div class="cart-card">
          <div class="left">
            <van-checkbox v-model="elem.is_check" checked-color="#ff9704">
              <img src="images/sofa1.jpg" alt />
            </van-checkbox>
          </div>
          <div class="right">
            <span class="title">{{elem.title}}</span>
            <div class="my-small ms">
              <span>款式:{{elem.style}}</span>
              <span>规格:{{elem.spec}}</span>
            </div>
            <div class="down">
              <span class="price">￥{{elem.price}}</span>
              <div>
                <van-stepper v-model="elem.count" />
              </div>
            </div>
          </div>
        </div>
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      list: []
    };
  },
  methods: {
    getcart() {
      this.axios.get("/product/cart").then(res => {
        if (res.data.code < 0) {
          this.$router.push("/login");
        } else {
          this.list = res.data;
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getcart();
  },
  mounted(){
    var radio=document.querySelectorAll(".product-list");
    console.dir(radio);
  }
};
</script>

<style scoped>
.product-item {
  margin-bottom: 0.5rem;
}
.price {
  margin-right: 0.5rem;
  color: #000;
  font-weight: bold;
}
.down {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  color: #000;
  font-size: 1rem;
}
.right {
  padding: 0.5rem 0 0 0.5rem;
}
.right .ms {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
}
.cart-card {
  display: flex;
}
.left img {
  width: 6rem;
  border: 1px solid #f5f5f5;
}
.van-button {
  height: 100%;
}
.teststyle {
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