<template>
  <div class="cart inner-border">
    <div class="back" :class="fixed?'fixed':''">
      <div class="backicon" @click="back">
        <img src="images/icon_my_enter.png" alt />
      </div>
			<span>购物车</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.cart{
	border-bottom:1px solid #e8e8e8; 
}
.back{
  height: 3rem;
  background: #fff;
  box-sizing: border-box;
}
.back span{
	display: block;
	line-height: 3rem;
	width: 100%;
	text-align: center;
	font-size: 1.1rem;
}
.backicon{
	float: left;
	line-height: 3rem;
}
.backicon img{
	vertical-align: middle;	
  transform: rotate(180deg);
  width: 2rem;
	
}
</style>