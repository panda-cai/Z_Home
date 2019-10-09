<template>
  <div class="class-list">
    <back-header :shopping="true"></back-header>
    <van-tabs v-model="activeName">
      <van-radio-group v-model="radio" class="radio" checked-color="#ffac03">
        <van-radio name="1">综合排序</van-radio>
        <van-radio name="2">价格升序</van-radio>
        <van-radio name="3">价格降序</van-radio>
      </van-radio-group>
      <!-- <van-tab :title="'全部'"></van-tab> -->
      <van-tab v-for="(elem,i) of list" :title="elem.minor_title" :key="i" :name="`${elem.minor_id}`">
        <product-list :main_id="elem.mainclass" :minor_id="elem.minor_id" :radio="radio" class="inner-border"></product-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import productList from "../components/index/selectItem";
export default {
  data() {
    return {
      list: [],
      radio: "1"
      // activeName:'13'
    };
  },
  components:{
    productList
  },
  props:['main_id','activeName'],
  methods: {
    getlist() {
      console.log("进入了函数");
      this.axios
        .get("/index/minorClass", {
          params: {
            main_id: this.main_id
          }
        })
        .then(res => {
          // console.log("进入了函数2");
          console.log(res.data);
          this.list = res.data;
        });
    }
  },
  created() {
    this.getlist();
  }
};
</script>

<style scoped>
.van-nav-bar .van-icon {
  color: #000;
}
.radio{
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #000;
  font-size: 0.75rem;
}
</style>