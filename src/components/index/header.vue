<template>
	<div class="header">
		<search :active="active" v-show="active=='tab1'" class="search"></search>
		<search :active="active" v-show="active=='tab3'" class="search"></search>
		<div class="top-title" v-if="active=='tab2'"><h2>SHOW</h2></div>
		<div class="top-title" v-else-if="active=='tab4'">
			<h2>体验</h2>
		</div>
		<cart-icon></cart-icon>
	</div>
</template>
<script>
import search from "./search";
export default {
	props:["active"],
	components:{search}
}
</script>
<style scoped>
	.top-title{
		color:#000;
	}
	.header{
		display: flex;
		justify-content: space-between;
		background: #fff;
		align-items: center;
		height: 48px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		width: 100%;
		padding: 0 3%;
		/* border-bottom:1px solid #d2d2d2; */
		box-sizing: border-box; 
	}
</style>