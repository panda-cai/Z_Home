<template>
  <!-- 主页新品与现货推荐 -->
  <div class="new-product inner-border">
    <div class="showtitle">
      <p class="title">{{title}}</p>
      <div class="showpage">
        <span>{{pon}}</span>
        <span>/5</span>
      </div>
    </div>
    <ul
      class="show-list"
      @touchmove="move"
      @touchstart="touchStart"
      @touchend="leave"
      :style="`transform:translateX(${touchData.end+touchData.len}px)`"
      :class="ts" 
			ref="sw"
    >
      <!-- :style="'transform:translateX('+touchData.len+'px)'" -->
      <li class="show-item" v-for="(elem,i) of showlist" :key="i">
        <router-link to="/">
          <img :src="elem.img" alt class="product-img" />
          <div class="product-info">
            <div class="product-title">
              <span>{{elem.title}}</span>
              <span>￥{{elem.price.toFixed(2)}}</span>
            </div>
            <div class="product-subtitle">{{elem.subtitle}}</div>
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
				len:0,
				end:0,
				add:0
			},
			showlist:[],
			ts:{
				"transition-show":false
			}
		}
	},
	props:["title","position"],
	methods:{
		getShowlist(){
			this.axios.get("/index/show",{
				params:{
					position:this.position
				}
			}).then(result=>{
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
			}else if(this.touchData.end+this.touchData.len<-this.$refs.sw.offsetWidth*0.77){//当translateX>0 就在往左边溢出了  拽回0.77 100%-(19%+0.5%*4)=79;
        console.log( this.$refs.sw.offsetWidth);
        this.$refs.sw.style.transform=`translateX(-${this.$refs.sw.offsetWidth*0.77}px)`;
        return;//拽回之后不让add叠加值直接跳出函数
      }
			this.touchData.add +=	this.touchData.len;
		}
				
	},
	created(){
		this.getShowlist();
	}
}
</script>

<style scoped>
.show-list {
  display: flex;
  width: 500%;
}
.product-img {
  width: 100%;
}
.product-subtitle {
  text-align: left;
  font-size: 0.75rem;
  color: #afb1b9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-title {
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  height: 1rem;
}
.product-title span {
  font-weight: bold;
  font-size: 1rem;
}
.product-title span:first-child {
  text-align: left;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.show-item {
  width: 19%;
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