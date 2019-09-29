<template>
  <div class="productClass">
    <ul
      class="left"
      @touchmove="move"
      :style="`transform: translateY(${end+len}px)`"
      @touchstart="startTouch"
      @touchend="leave" 
      @click="changeClass"
    >
      <li data-i="0">123</li>
      <li data-i="1">123</li>
      <li data-i="2">123</li>
      <li data-i="3">123</li>
    </ul>
    <van-tabs v-model="active">
      <van-tab title="标签 1"><h1>第0个</h1></van-tab>
      <van-tab title="标签 2"><h1>第1个</h1></van-tab>
      <van-tab title="标签 3"><h1>第2个</h1></van-tab>
      <van-tab title="标签 4"><h1>第3个</h1></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0,
      start: 0,
      len: 0,
      add: 0,
      end: 0
    };
  },
  methods: {
    changeClass(e){
      if(e.target.nodeName=="LI"){
        var index=e.target.getAttribute('data-i');
        this.active=parseInt(index);
      }
      // console.log(this.active);
    },
    startTouch(e) {
      this.start = e.touches[0].pageY;
      // console.log(e.touches[0].pageY);
    },
    move(e) {
      this.end = this.add;
      this.len = e.touches[0].pageY - this.start;
      // console.log(e.touches[0].pageY);
      // console.log(1);
    },
    leave(e) {
      this.add += this.len;
    }
  }
};
</script>
<style scoped>
.left-item {
  text-align: center;
  padding: 1rem 0;
}
.product-class {
  display: flex;
}
.left {
  /* overflow: scroll; */
  position: fixed;
  left: 0;
  width: 20%;
  border-right: 1px solid #000;
  height: 900px;
  background: #f5f5f5;
  z-index:1;
}
.left li {
  padding: 15px;
  border-bottom: 1px solid #999;
}
.van-tabs--line >>> .van-tabs__wrap{
  display:none;
}
</style>