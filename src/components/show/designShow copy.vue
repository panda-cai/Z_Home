<template>
  <!-- 主页新品与现货推荐 -->
  <div class="new-product inner-border">
    <div class="showtitle">
      <p class="title">{{title}}</p>
        <router-link to="/" class="more">更多</router-link>
    </div>
    <ul
      class="show-list"
      @touchmove="move"
      @touchstart="touchStart"
      @touchend="leave"
      :style="`transform:translateX(${touchData.end+touchData.len}px)`"
			ref="sw"
    >
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
		touchStart(e) {
			this.touchData.start = e.touches[0].pageX;//获取触控点开始相对于屏幕左边的距离
			
		},
		move(e){
			this.touchData.end = this.touchData.add;
      this.touchData.len = e.touches[0].pageX-this.touchData.start;//获取拖动的距离
		},
		leave(e){
			// console.log(this.touchData.end+this.touchData.len);
			if(this.touchData.end+this.touchData.len>0){//当translateX>0 就在往左边溢出了  拽回0
        this.$refs.sw.style.transform="translateX(0px)";
				return;//拽回之后不让add叠加值直接跳出函数
			}else if(this.touchData.end+this.touchData.len<-this.$refs.sw.offsetWidth*0.8){//当translateX>0 就在往左边溢出了  拽回0.77 100%-(19%+0.5%*4)=79;
        // console.log( this.$refs.sw.offsetWidth);
        this.$refs.sw.style.transform=`translateX(-${this.$refs.sw.offsetWidth*0.8}px)`;
        return;//拽回之后不让add叠加值直接跳出函数
      }
			this.touchData.add +=	this.touchData.len;
		}
				
	},
	created(){
		this.getDesignshow();
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