<template>
	<div class="trial inner-border">
		<p class="title">精选体验家</p>
		<img src="images/index_trial/trial.png" alt="" class="trial-img" @click="toTrial">
		<ul class="trial-list">
			<li class="trial-item" v-for="(elem,i) of trial" :key="i">
				<img :src="elem.showimg" alt="">
				<span v-text="elem.showtitle"></span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return {trial:[]}
	},
	methods:{
		gettrial(){
			this.axios.get("/index/index_trial").then(result=>{
				this.trial=result.data;
			})
		},
	},
	props:["toTrial"],
	created(){
		this.gettrial();
	}
}
</script>

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
		width: 250%;
		display: flex;
		justify-content: space-between;
	}
	.trial-img{
		width: 100%;
	}
</style>