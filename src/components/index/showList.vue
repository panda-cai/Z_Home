<template>
<!-- 主页新品与现货推荐 -->
	<div class="new-product">
		<div class="showtitle">
			<p>{{title}}</p>
			<div class="showpage">
				<span>{{pon}}</span><span>/5</span>
			</div>
		</div>
		<ul class="show-list" @touchmove="move" @touchstart="touchStart" :style="`transform:translateX(${touchData.len}px)`" :class="ts">
			<!-- :style="'transform:translateX('+touchData.len+'px)'" -->
			<li class="show-item">
				<router-link to="/">
					<img src="images/new1.png" alt="" class="product-img">
					<div class="product-info">
						<div class="product-title"><span>北欧实木ins风边|安装大放松放松</span><span>￥48.80</span></div>
						<div class="product-subtitle">优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿</div>
					</div>
				</router-link>
			</li>
			<li class="show-item">
				<router-link to="/">
					<img src="images/new2.png" alt="" class="product-img">
					<div class="product-info">
						<div class="product-title"><span>北欧实木ins风边|安装大放松放松</span><span>￥48.80</span></div>
						<div class="product-subtitle">优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿</div>
					</div>
				</router-link>
			</li>
			<li class="show-item">
				<router-link to="/">
					<img src="images/new1.png" alt="" class="product-img">
					<div class="product-info">
						<div class="product-title"><span>北欧实木ins风边|安装大放松放松</span><span>￥48.80</span></div>
						<div class="product-subtitle">优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿</div>
					</div>
				</router-link>
			</li>
			<li class="show-item">
				<router-link to="/">
					<img src="images/new2.png" alt="" class="product-img">
					<div class="product-info">
						<div class="product-title"><span>北欧实木ins风边|安装大放松放松</span><span>￥48.80</span></div>
						<div class="product-subtitle">优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿</div>
					</div>
				</router-link>
			</li>
			<li class="show-item">
				<router-link to="/">
					<img src="images/new1.png" alt="" class="product-img">
					<div class="product-info">
						<div class="product-title"><span>北欧实木ins风边|安装大放松放松</span><span>￥48.80</span></div>
						<div class="product-subtitle">优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿优质楠竹腿</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>	
</template>

<script>
export default {
	data(){
		return {
			pon:1,
			touchData:{
				start:0,
				len:0
			},
			ts:{
				"transition-show":false
			}
		}
	},
	props:["title"],
	methods:{
		touchStart(e) {
			console.log("上一次开始的点是"+this.touchData.start)
			console.log("这一次开始的点是"+e.touches[0].pageX);
			this.touchData.start = e.touches[0].pageX;//获取触控点开始相对于屏幕左边的距离
		},
		move(e){
			// console.log(1);
			// console.log(e.touches[0].pageX);//获取触控点相对于屏幕左边的距离
			this.touchData.len = e.touches[0].pageX-this.touchData.start;//将坐标原点置于触控点
			// if(this.touchData.len<-110){
			// 	this.ts["transition-show"]=true;
			// 	this.touchData.len=-280;
			//  	setTimeout(() => {
			//  	this.ts["transition-show"]=false;
			// 	}, 500);
			//  }
			console.log(this.touchData.len);
			// console.log(e.target[0]);
		}
	}
}
</script>

<style scoped>
	.show-list{
		display: flex;
	}
	.product-img{
		width: 100%;
	}
	.product-subtitle{
		font-size: 0.75rem;
		color: #afb1b9;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.product-title{
		margin: 0.5rem 0;
		display: flex;
		justify-content: space-between;
		height: 1rem;
	}
	.product-title span{
		font-weight: bold;
		font-size: 1rem;
	}
	.product-title span:first-child{
		width: 70%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.show-item{
		width: 100%;
	}
	.transition-show{
		transition: all 0.5s linear;
	}
	.show-list li+li{
		margin-left:0.5rem;
	}
	.show-item a{
		text-decoration: none;
		color:#000;
	}
 	.new-product{
		padding: 0 8%;
	}
	.new-product>.showtitle{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.new-product>.showtitle>p{
		font-size: 1.4rem;
		font-weight: bold;
    text-align: left;
		display: inline-block;
	}
	.showpage span{
		color:#a2a4ab;
		font-size:0.75rem;
	}
	.showpage span:first-child{
		color:#000;
		font-size: 0.9rem;
	}
</style>