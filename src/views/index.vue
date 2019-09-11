<template>
	<div>
		<zj-header :active="active"></zj-header>
		<div class="fill-top"></div>
		<mt-tab-container v-model="active">
			<mt-tab-container-item id="tab1">
				<carousel></carousel>
				<theme></theme>
				<showlist :title="'至家新品'" :position="'new'"></showlist>
				<showlist :title="'现货推荐'" :position="'recommend'"></showlist>
				<trial :toTrial="toTrial"></trial>
				<liveshow></liveshow>
				<!-- 理论上大分类应该由index传给list  详细分类由list传给item  这里所有分类都是由list传给item并不太完美往后改正 -->
				<selectedlist :top_title="'精选目录'" :class_list="chair" :classimg="'images/selected_list/chair.jpg'"></selectedlist>
				<div class="split"></div>
				<selectedlist :class_list="decorate" :classimg="'images/selected_list/decorate.jpg'"></selectedlist>
				<div class="split"></div>
				<selectedlist :class_list="sofa" :classimg="'images/selected_list/sofa.jpg'"></selectedlist>
				<div class="split"></div>
				<selectedlist :class_list="table" :classimg="'images/selected_list/table.jpg'"></selectedlist>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab2">
				<!-- 第二个面板########################################## -->
				<designshow :title="'热门设计'"></designshow>
				<inspiration-list></inspiration-list>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab3">
				<!-- <h1>这是首页的第三个分页</h1> -->
				<produce-class></produce-class>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab4">
				<h1>这是首页的第四个分页</h1>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab5">
				<h1>这是首页的第五个分页</h1>
			</mt-tab-container-item>
		</mt-tab-container>
		
		<mt-tabbar v-model="active" fixed>
			<mt-tab-item id="tab1">
				<img :src="active=='tab1'?'images/icon_home_main_select.png':'images/icon_home_main_unselect.png'" alt="" slot="icon">
				<span :style="active=='tab1'?'color:#ffac03':'color:#000'">首页</span>
			</mt-tab-item>
			<mt-tab-item id="tab2">
				<img :src="active=='tab2'?'images/icon_home_show_select.png':'images/icon_home_show_unselect.png'" alt="" slot="icon">
				<span :style="active=='tab2'?'color:#ffac03':'color:#000'">SHOW</span>
			</mt-tab-item>
			<mt-tab-item id="tab3">
				<img :src="active=='tab3'?'images/icon_home_sort_select.png':'images/icon_home_sort_unselect.png'" alt="" slot="icon">
				<span :style="active=='tab3'?'color:#ffac03':'color:#000'">商品</span>
			</mt-tab-item>
			<mt-tab-item id="tab4">
			<img :src="active=='tab4'?'images/icon_home_exp_select.png':'images/icon_home_exp_unselect.png'" alt="" slot="icon">
				<span :style="active=='tab4'?'color:#ffac03':'color:#000'">体验</span>
			</mt-tab-item>
			<mt-tab-item id="tab5">
				<img :src="active=='tab5'?'images/icon_home_mine_select.png':'images/icon_home_mine_unselect.png'" alt="" slot="icon">
				<span :style="active=='tab5'?'color:#ffac03':'color:#000'">我的</span>
			</mt-tab-item>
		</mt-tabbar>
		<div class="fill-buttom"></div>
	</div>
</template>
<script>
import carousel from "../components/index/carousel";
import theme from "../components/index/theme";
import showlist from "../components/index/showList";
import trial from "../components/index/trial";
import liveshow from "../components/index/liveShow";
import selectedlist from "../components/index/selectedList";
import designshow from "../components/show/designShow";
import inspirationList from "../components/show/inspirationList";
import produceClass from "../components/product/productClass";
export default {
	data(){
		return {
			active:"tab1",
			chair:["推荐","餐椅","休闲椅","坐凳坐墩"],
			decorate:["推荐","挂画","抱枕","摆件"],
			sofa:["推荐","单人沙发","双人沙发","多人沙发"],
			table:["推荐","餐桌","书桌","茶几"]
			}
	},
	methods:{
		toTrial(){
			this.active="tab4";
		}
	},
	components:{
		carousel,theme,showlist,trial,liveshow,selectedlist,designshow,inspirationList,produceClass
	}
}
</script>

<style scoped>
	.split{
		width: 90%;
		margin: 1.2rem auto;
		height: 1px;
		border-top: 1px solid #f5f5f5;
	}
	.mint-tabbar{
		border-top:1px solid #b2b2b2; 
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		background: #fff;
	}
	.fill-buttom{
		width: 100%;
		height: 56px;
	}
	.fill-top{
		width: 100%;
		height: 48px;
	}
</style>