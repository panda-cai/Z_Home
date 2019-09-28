<template>
  <van-tree-select height="55vw" :items="items" :main-active-index.sync="activeIndex">
    <template slot="content">
      <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
    </template>
  </van-tree-select>
</template>
<script>
export default {
	data(){
		return
	}
}
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
  /* position: fixed; */
  /* left: 0; */
  width: 20%;
  border-right: 1px solid #000;
  /* height: 900px; */
  background: #fff;
}
</style>