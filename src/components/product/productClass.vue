<template>
  <div class="productClass">
    <div class="left">
      <ul
        @touchmove="move"
        :style="`transform: translateY(${end+len}px)`"
        @touchstart="startTouch"
        @touchend="leave"
        @click="changeClass"
        ref="left"
      >
        <li data-i="0" :style="active=='0'?'color:#000':''" class="my-small">沙发</li>
        <li data-i="1" :style="active=='1'?'color:#000':''" class="my-small">床</li>
        <li data-i="2" :style="active=='2'?'color:#000':''" class="my-small">床品配件</li>
        <li data-i="3" :style="active=='3'?'color:#000':''" class="my-small">椅凳</li>
        <li data-i="4" :style="active=='4'?'color:#000':''" class="my-small">柜架</li>
        <li data-i="5" :style="active=='5'?'color:#000':''" class="my-small">桌几</li>
        <li data-i="6" :style="active=='6'?'color:#000':''" class="my-small">装饰</li>
        <li data-i="7" :style="active=='7'?'color:#000':''" class="my-small">灯具</li>
      </ul>
    </div>
    <van-tabs v-model="active">
      <van-tab>第0个</van-tab>
      <van-tab>第1个</van-tab>
      <van-tab>第2个</van-tab>
      <van-tab>第3个</van-tab>
      <van-tab>第3个</van-tab>
      <van-tab>第3个</van-tab>
      <van-tab>第3个</van-tab>
      <van-tab>第3个</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      start: 0,
      len: 0,
      add: 0,
      end: 0
    };
  },
  methods: {
    changeClass(e) {
      if (e.target.nodeName == "LI") {
        var index = e.target.getAttribute("data-i");
        this.active = parseInt(index);
      }
      // console.log(this.active);
    },
    startTouch(e) {
      this.start = e.touches[0].pageY;
    },
    move(e) {
      this.end = this.add;
      this.len = e.touches[0].pageY - this.start;
    },
    leave(e) {
      var height=this.$refs.left.offsetHeight-window.innerHeight+104;
      // console.log(height);
      if (this.end + this.len > 0) {
        // console.log("c大于0了");
        this.$refs.left.style = "transform: translateY(0px)";
        return;
      }
      else if(this.end + this.len <-height){
        this.$refs.left.style = `transform: translateY(-${height}px)`;
        return;
      }
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
  width: 26%;
  border-right: 1px solid #efefef;
  height: 900px;
  background: #fff;
  z-index: 1;
}
.left li {
  padding: 1.3rem 0;
}
.van-tabs--line >>> .van-tabs__wrap {
  display: none;
}
</style>