<template>
	<div class="btngroup">
		<ul class="btn-list">
			<li class="btn-item">
				<router-link to="/">
					<img src="images/icon_feed_share.png" alt="" class="btn-img">
				</router-link>
			</li>
			<li class="btn-item">
				<router-link to="/">
					<img src="images/icon_feed_like.png" alt="" class="btn-img">
					<span>1</span>
				</router-link>
			</li>
			<li btn-item="btn-item">
				<router-link to="/">
					<img src="images/icon_feed_comment.png" alt="" class="btn-img">
					<span>1</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.btn-list{
		display: flex;
		padding-left:7%; 
	}
	.btn-item{
		width: 30%;
		text-align: left;
	}
	.btn-list span{
		color: #a5a7ad;
		font-size: 0.75rem;
	}
	.btn-img{
		width: 1.25rem;
		vertical-align: middle;
	}
</style>