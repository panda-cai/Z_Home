<template>
	<div class="cart">
    <router-link to="/cart" ><img src="images/homenew_cart.png" alt=""></router-link>
    <div class="count">1</div>
  </div>
</template>
<style  scoped>
.cart{
		margin-left:2%; 
		height: 32px;
		width: 15%;
		/* border:1px solid #e7eaec; */
    position: relative;
	}
	.cart img{
		margin-top:4px; 
		line-height: 30px;
		width: 24px;
		padding: 0 20%;
	}
  .count{
    position: absolute;
    border-radius:50%;
    background: #ffac03; 
    width: 1rem;
    height: 1rem;
    top:-5px;
    right: -5px;
    color: #fff;
    font-size: 0.75rem;
    line-height: 15px;
    text-align: center;
  }
</style>