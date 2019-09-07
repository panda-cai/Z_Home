<template>
<!-- 负责绘制商品列表的组件 -->
		<ul class="product-list">
			<li>
				 <!-- v-for="(elem,i) of list" :key="i" -->
				<div class="priduct-img"><img src="images/product/product1.png" alt=""></div>
				<span class="product-title">商品名字商品名字商品名字商品名字商品名字商品名字</span>
				<span class="product-price">商品价格</span>
			</li>
		</ul>
</template>

<script>
export default {
	data(){
		return {list:[]}
	},
	methods:{
		getList(){
			this.axios.get()
		}
	},
	created(){

	},
	props:[]
}
</script>
<style scoped>
	.product-list{
		display: flex;
		flex-wrap: wrap;
	}

	.product-list li{
		padding: 2%;
		width: 46%;
	}
	.priduct-img img{
		width: 100%;
	}
	.product-title{
		color: #000;
		font-size: 0.9rem;
		font-weight: bold;
		display: block;
		text-align: left;
		margin: 0.2rem 0;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.product-price{
		color: #000;
		font-size: 0.75rem;
		display: block;
		text-align: left;
	}
</style>