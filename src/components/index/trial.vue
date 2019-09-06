<template>
	<div class="trial">
		<p class="title">精选体验家</p>
		<img src="images/index_trial/trial.png" alt="" class="trial-img">
		<ul class="trial-list">
			<li class="trial-item">
				<img src="images/index_trial/trial_p1.jpg" alt="">
				<span>成就别致空间</span>
			</li>
			<li class="trial-item">
				<img src="images/index_trial/trial_p1.jpg" alt="">
				<span>成就别致空间</span>
			</li>
			<li class="trial-item">
				<img src="images/index_trial/trial_p1.jpg" alt="">
				<span>成就别致空间</span>
			</li>
			<li class="trial-item">
				<img src="images/index_trial/trial_p1.jpg" alt="">
				<span>成就别致空间</span>
			</li>
			<li class="trial-item">
				<img src="images/index_trial/trial_p1.jpg" alt="">
				<span>成就别致空间</span>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.trial-item{
		width:19%;
	}
	.trial-item span{
		margin-top:5px;
		font-weight: 600;
		display: block;
		color: #000;
		font-size: 0.75rem;
		text-align: left;
	}
	.trial-item img{
		width:100%;
	}
	.trial-list{
		width: 200%;
		display: flex;
		justify-content: space-between;
	}
	.title{
		font-size: 1.4rem;
		font-weight: bold;
    text-align: left;
		display: inline-block;
	}
	.trial{
		padding: 0 8%;
	}
	.trial-img{
		width: 100%;
	}
</style>