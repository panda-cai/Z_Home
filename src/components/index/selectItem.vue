<template>
<!-- 负责绘制商品列表的组件 -->
		<ul class="product-list">
			<li v-for="(elem,i) of list" :key="i">
				<router-link to="/">
				<div class="priduct-img"><img :src="elem.showimg" alt=""></div>
				<span class="product-title">{{elem.title}}</span>
				<span class="product-price">￥{{elem.price}}</span>
				</router-link>
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
			this.axios.get("/index/index_product",{
				params:{
					p_class:this.p_class,
					detail_class:this.detail_class
				}
			}).then(result=>{
				this.list=result.data;
				console.log(this.list);
				});
		}
	},
	created(){
		this.getList();
	},
	props:['p_class','detail_class']
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