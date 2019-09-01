<template>
	<div class="header">
		<search :active="active"></search>
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
	.header{
		padding: 0 3%;
		border-bottom:1px solid #d2d2d2; 
	}
</style>