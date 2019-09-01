<template>
	<div class="search">
		<input type="text" placeholder="请输入要搜索的内容">
		<cart></cart>
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
		justify-content: center;
		/* width: 80%; */
	}
	.search input{
		width: 70%;
		color: #9fa1a8;
		height: 30px;
		border:1px solid #e7eaec;
		font-size: 12px;
		padding-left:36px; 
		background: url('../../../public/images/search_gray.png') no-repeat 4px center;
		background-size:22px; 
	}
	.search input:focus{
		box-shadow: none;
		outline:0;
		border:1px solid #e7eaec;
	}
</style>