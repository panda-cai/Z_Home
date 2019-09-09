<template>
  <!-- 首页的轮播图组件 -->
  <div>
    <div class="carousel">
      <ul class="carousel-list" :style="`margin-left:-${car_i*100}%`" :class="car_style" @touchstart="stop" @touchend="play" @touchmove="move">
        <li class="carousel-item" v-for="(elem,i) of car_list" :key="i" :style="`width:25%`">
          <router-link to="/login">
            <img :src="elem.img" :alt="elem.title" />
          </router-link>
        </li>
      </ul>
      <ul class="carousel-disc">
        <li v-for="(elem,i) of car_list" :key="i" :class="i==car_i?'active':''"></li>
      </ul>
    </div>
    <ul class="server">
      <li><img src="images/server_03.jpg" alt /><span>设计服务</span></li>
      <li><img src="images/server_05.jpg" alt /><span>免费送装</span></li>
      <li><img src="images/server_07.jpg" alt /><span>质量保证</span></li>
      <li><img src="images/server_09.jpg" alt /><span>安全环保</span></li>
    </ul>
  </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
  data() {
    return {
      car_i: 0, //轮播图标号i
      car_list: [], //轮播图列表
      // screen_width:0//屏幕宽度
      car_style: {
        "carousel-run": true
      },
      carousel:{},
      touchData:{
        strat:0,
        len:0
      }
    };
  },
  methods: {
    //获取轮播图图片的方法
    getCarousel() {
      this.axios.get("/index/carousel").then(result => {
        this.car_list = result.data;
        this.car_list.push(result.data[0]);
        // console.log(this.car_list);
      });
    },
    carouselRun() {
      this.carousel = setInterval(() => {
        //设置定时器隔着2s跳一次
        this.car_i++;
        if (this.car_i > this.car_list.length - 2) {
          //如果数组长度-2
          setTimeout(() => {
            this.car_style["carousel-run"] = false; //先将它的transition清除
            this.car_i = 0; //把car_i重置为0
            setTimeout(() => {
              this.car_style["carousel-run"] = true; //先将它的transition再加上去
            }, 500);
          }, 1000);
        }
      }, 3000);
    },
    stop(e){//触摸时停止播放
      // console.log(123);
      window.clearInterval(this.carousel);
      this.touchData.strat=e.touches[0].pageX;
    },
    play(){//离开触摸时继续播放
      this.carouselRun();
    },
    move(e){
      this.touchData.len=e.touches[0].pageX-this.touchData.strat;
    }
  },
  created() {
    this.getCarousel();
    // this.screen_width=document.body.clientWidth;
    //定时器
    this.carouselRun();
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
}
.carousel-list::after {
  display: block;
  content: "";
  clear: both;
}
.carousel-run {
  transition: all 1s linear;
}
.carousel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 400%;
}

.carousel-item {
  float: left;
}
.carousel-item img {
  width: 100%;
}
.carousel-disc {
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -20px;
  list-style: none;
}
/* .carousel-disc::after{
  display: block;
  content: "";
  clear: both;
} */
.carousel-disc li {
  float: left;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #000;
  opacity: 0.6;
}
.carousel-disc li + li {
  margin-left: 5px;
}
.carousel-disc li:last-child {
  display: none;
}
.carousel-disc .active {
  opacity: 1;
  background: #ffac03;
}
.server{
  border-bottom:1px solid #f2f2f2;
  margin:0;
  padding: 0;
  padding-bottom: 1rem;
  list-style: none;
  display: flex;
}
.server li{
  width: 25%;
}
.server li img{
  width: 55%;
}
.server li span{
  display: block;
  font-size: 0.75rem;
  text-align: center;
  font-weight: bold;
}
</style>