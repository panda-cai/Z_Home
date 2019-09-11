<template>
  <!-- 主页新品与现货推荐 -->
  <div class="new-product inner-border">
    <div class="showtitle">
      <p class="title">{{title}}</p>
        <router-link to="/" class="more">更多</router-link>
    </div>
    <ul class="show-list" id="swipe">
      <!-- :style="'transform:translateX('+touchData.len+'px)'" -->
      <li class="show-item" v-for="(elem,i) of showlist" :key="i">
        <router-link to="/">
          <img :src="elem.showimg" alt class="product-img" />
          <div class="design-title">{{elem.title}}</div>
        </router-link>
				<btngroup></btngroup>
      </li>
    </ul>
  </div>
</template>

<script>
import btngroup from "./btngroup"
export default {
	data(){
		return {
			pon:1,
			touchData:{
				start:0,
				len:0,
				end:0,
				add:0
			},
			showlist:[],
		}
	},
	props:["title"],
	methods:{
		getDesignshow(){
			this.axios.get("/index/index_design").then(result=>{
				this.showlist=result.data;
				// console.log(result.data);
			})
		},
    swipeX(w){//创建一个函数swipeX传入一个参数w  是你这个列表长度的百分比  就比如500% 传入500
      var swipe=document.getElementById("swipe");//获取id为swipe的元素
      var start=0;//用来保存刚开始触摸时触摸点距离屏幕左边原点的X轴距离
      var end=0;//用来保存刚结束触摸时触摸点距离屏幕左边原点的X轴距离
      var add=0;//用来保存每次滑动的累加值
      var len=0//用来保存每次滑动的长度
      swipe.addEventListener("touchstart",function(e){
        start=e.touches[0].pageX;
      });//绑定触摸开始事件  获取X的值
      swipe.addEventListener("touchmove",function(e){
        len=e.touches[0].pageX-start;//滑动的长度等于此时的X值减去开始的X值
        end=add;//把之前滑动的累加值给到end
        swipe.style.transform=`translateX(${end+len}px)`;//最有滑动的值为之前的累加值end加上本次滑动的值len
      });//绑定在屏幕的滑动事件
      swipe.addEventListener("touchend",function(e) {
        var width=-swipe.offsetWidth/w*100;//计算一个屏幕的长度
        // console.log(width);
        if(end+len>0){//如果end+len此次滑动的值>0  就是向右滑最边  将值拉回为0
          swipe.style.transform=`translateX(0px)`;
          return;//拉回之后马上跳出函数  不做累加
        }else if(end+len+width<-swipe.offsetWidth){//如果end+len+width的值大于当前滑动元素的总长度  就是向左滑最边  
        //将值拉回为滑动元素宽度减去一个屏幕长度的值
          swipe.style.transform=`translateX(${-swipe.offsetWidth-width}px)`;
          return;
        }
        add+=len;
      });//绑定触控结束事件  手指离开屏幕时触发
    }		
	},
	created(){
    this.getDesignshow();
  },
  mounted(){
    this.swipeX(500);
  },
	components:{btngroup}
}
</script>

<style scoped>
.more{
	font-size: 0.8rem;
}
.show-list {
  display: flex;
  width: 500%;
}
.product-img {
  width: 100%;
}
.design-title {
  text-align: left;
  font-size: 0.8rem;
  color: #000;
	overflow: hidden;
	font-weight: bold;
  text-overflow: ellipsis;
	white-space: nowrap;
	margin:0.5rem 0; 
}

.show-item {
  width: 19.6%;
}
.transition-show {
  transition: all 0.5s linear;
}
.show-list li + li {
  margin-left: 0.5%;
}
.show-item a {
  text-decoration: none;
  color: #000;
}
.new-product > .showtitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.showpage span {
  color: #a2a4ab;
  font-size: 0.75rem;
}
.showpage span:first-child {
  color: #000;
  font-size: 0.9rem;
}
</style>