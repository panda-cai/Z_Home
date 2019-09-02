<template>
	<div>
		<zj-header :active="active"></zj-header>
		<mt-tab-container v-model="active" swipeable>
			<mt-tab-container-item id="tab1">
				<carousel></carousel>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab2">
				<h1>这是首页的第二个分页</h1>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab3">
				<h1>这是首页的第三个分页</h1>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab4">
				<h1>这是首页的第四个分页</h1>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab5">
				<h1>这是首页的第五个分页</h1>
			</mt-tab-container-item>
		</mt-tab-container>
		
		<mt-tabbar v-model="active">
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
	</div>
</template>
<script>
import carousel from "../components/index/carousel";
export default {
	data(){
		return {active:"tab1"}
	},
	components:{
		carousel
	}
}
</script>

<style scoped>
	.mint-tabbar{
		border-top:1px solid #b2b2b2; 
	}
	.mint-tabbar > .mint-tab-item.is-selected{
		background: #fff;
	}
</style>