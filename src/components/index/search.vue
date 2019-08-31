<template>
	<div class="search">
		<input type="text" placeholder="请输入要搜索的内容">
		<router-link to="/cart" class="cart"><img src="images/homenew_cart.png" alt=""></router-link>
	</div>
</template>
<script>
export default {
	data(){
		return {search:""}
	},
	props:["active"]
}
</script>
<style scoped>
	.search{
		background: #fff;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 80%;
	}
	.search input{
		width: 80%;
		color: #9fa1a8;
		height: 30px;
		border:1px solid #e7eaec;
		font-size: 12px;
		padding-left:36px; 
		background: url('../../../public/images/search_gray.png') no-repeat 4px 3px;
		background-size:28px; 
	}
	.cart{
		width: 20%;
		border:1px solid #e7eaec;
		
	}
	.cart>img{
		width: 28px;
		padding: 0 20%;
	}
</style>