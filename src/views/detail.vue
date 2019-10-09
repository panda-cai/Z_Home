<template>
  <div class="detail" ref="detail" id="detail">
    <!-- <back-header :shopping="true" :fixed="true"></back-header> -->
    <div class="back inner-border fixed">
      <div class="backicon" @click="back">
        <img src="images/icon_my_enter.png" alt />
      </div>
			<ul class="top-list" ref="top_list" @click="scroll_to">
				<li class="product-target" :style="scrollTop>0&&scrollTop<400?'border-color:black':''" data-scroll="0">商品</li>
				<li class="comment-target" :style="scrollTop>=400&&scrollTop<1000?'border-color:black':''" data-scroll="350">评论</li>
				<li class="detail-target" :style="scrollTop>=1000?'border-color:black':''" data-scroll="1000">详情</li>
			</ul>
      <cart-icon></cart-icon>
    </div>
    <van-swipe indicator-color="black" show-indicators>
      <van-swipe-item>
        <img src="images/sofa1.jpg" alt class="product-img" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="images/sofa2.jpg" alt class="product-img" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="images/sofa1.jpg" alt class="product-img" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="images/sofa2.jpg" alt class="product-img" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="images/sofa1.jpg" alt class="product-img" />
      </van-swipe-item>
    </van-swipe>
    <div class="product-info inner-border">
      <div class="top">
        <span class="price">￥1234.00</span>
        <span class="sub-price my-small">市场价:￥2056.00</span>
        <span class="product-title">汉哲北欧单人沙发椅简约现代阳台休闲单椅小户型客厅布艺实木椅子</span>
      </div>
      <div class="down">
        <span class="font-style">服务</span>
        <span class="describe">包邮|包安装|发货时间</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="space"></div>
    <div class="comment inner-border">
      <div class="down">
        <span class="font-style">评论晒图</span>
        <div>
          <span>好评度</span>
          <span>100.00%</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="comment-item">
        <div class="user-info">
          <div class="left">
            <img src="https://s2.ax1x.com/2019/10/08/ufmkXd.th.jpg" alt="ufmkXd.jpg" border="0" />
            <span>青皮桔</span>
          </div>
          <div class="start">
            <van-icon name="star" />
            <van-icon name="star" />
            <van-icon name="star" />
            <van-icon name="star" />
            <van-icon name="star" />
          </div>
        </div>
        <span class="product-info my-small">款式:单人位 规格:85.4cm*87cm*71.2cm</span>
        <span
          class="user-comment"
        >小威跟小丽是从小玩到大的青梅竹马,他们感情一直很好,渐渐的大家都长大成人了,有一天小丽做了双眼皮变成了美女,很多男的追求她,其中有一个会唱会跳会rap的男人尤其的出众,他看中小丽之后进行了疯狂的追求,小丽刚开始对他行为无动于衷，预知后事如何，请听下回分解</span>
      </div>
      <div class="comment-item">
        <div class="user-info">
          <div class="left">
            <img src="https://s2.ax1x.com/2019/10/08/ufmkXd.th.jpg" alt="ufmkXd.jpg" border="0" />
            <span>青皮桔</span>
          </div>
          <div class="start">
            <van-icon name="star" />
            <van-icon name="star" />
            <van-icon name="star" />
            <van-icon name="star" />
            <van-icon name="star" />
          </div>
        </div>
        <span class="product-info my-small">款式:单人位 规格:85.4cm*87cm*71.2cm</span>
        <span
          class="user-comment"
        >小威跟小丽是从小玩到大的青梅竹马,他们感情一直很好,渐渐的大家都长大成人了,有一天小丽做了双眼皮变成了美女,很多男的追求她,其中有一个会唱会跳会rap的男人尤其的出众,他看中小丽之后进行了疯狂的追求,小丽刚开始对他行为无动于衷，预知后事如何，请听下回分解</span>
      </div>
    </div>
    <div class="detail-img">
      <img src="images/detail_img/detail_01.jpg" alt />
      <img src="images/detail_img/detail_02.jpg" alt />
      <img src="images/detail_img/detail_03.jpg" alt />
      <img src="images/detail_img/detail_04.jpg" alt />
      <img src="images/detail_img/detail_05.jpg" alt />
      <img src="images/detail_img/detail_06.jpg" alt />
      <img src="images/detail_img/detail_07.jpg" alt />
      <img src="images/detail_img/detail_08.jpg" alt />
      <img src="images/detail_img/detail_09.jpg" alt />
      <img src="images/detail_img/detail_10.jpg" alt />
      <img src="images/detail_img/detail_11.jpg" alt />
      <img src="images/detail_img/detail_12.jpg" alt />
      <img src="images/detail_img/detail_13.jpg" alt />
      <img src="images/detail_img/detail_14.jpg" alt />
      <img src="images/detail_img/detail_15.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			scrollTop:0
		}
	},
	methods:{
		scroll_to(e){
			if(e.target.nodeName=="LI"){
				var y=parseInt(e.target.getAttribute("data-scroll"));
				console.log(y);
				window.scrollTo(0,y);
			}
		},
		scroll_handle(){
			this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(this.scrollTop>50){
				this.$refs.top_list.style.opacity=1;
			}else{
				this.$refs.top_list.style.opacity=0;
			}
		},
		back(){
      this.$router.go(-1);
			}
	},
	mounted(){
		window.addEventListener('scroll',this.scroll_handle);
		// console.dir(detail);
	},
	destroyed(){
		window.removeEventListener('scroll', this.scroll_handle);
	}
};
</script>

<style scoped>
.top-list{
	display: flex;
	opacity: 0;
	transition: all 0.5s;
	align-items: flex-end;
}
.top-list li{
	color: #000;
	margin-left:0.5rem; 
	font-size: 0.8rem;
	border-bottom: 2px solid transparent;
	padding-bottom: 0.6rem;
}
.back{
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
}
.backicon img{
  transform: rotate(180deg);
  width: 2rem;
}
.fixed{
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.product-img {
  width: 100%;
}
.product-info .top span {
  display: block;
  text-align: left;
}
.product-info .top .price {
  color: #000;
  font-size: 1.6rem;
}
.product-info .top .sub-price {
  margin: 0.4rem auto;
}
.product-title {
  color: #000;
  font-size: 1.2rem;
}
.product-info .top {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eef3f7;
}
.down {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-size: 0.8rem;
}
.font-style {
  color: #000;
  font-size: 1rem;
}
.space {
  width: 100%;
  height: 0.5rem;
  background: #eef3f3;
}
.user-info {
  display: flex;
  justify-content: space-between;
}
.user-info .left {
  display: flex;
  align-items: center;
  color: #000;
}
.user-info img {
  border-radius: 50%;
  width: 1.8rem;
}
.start {
  color: #fddb00;
  display: flex;
  align-items: center;
}
.product-info {
  text-align: left;
  display: block;
  margin: 0.5rem 0;
}
.user-comment {
  color: #000;
  text-align: left;
  display: block;
  width: 100%;
  line-height: 1.3;
}
.comment-item {
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #eef3f3;
}
.detail-img img {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>