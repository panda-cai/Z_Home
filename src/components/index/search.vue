<template>
	<div class="search">
		<input type="text" placeholder="请输入要搜索的内容">
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
		 width: 72%;
	}
	.search input{
		width: 100%;
		color: #9fa1a8;
		height: 26px;
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