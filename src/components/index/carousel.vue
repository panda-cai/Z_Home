<template>
  <!-- 首页的轮播图组件 -->
  <div class="carousel">
    <ul class="carousel-list" :style="`margin-left:-${car_i*100}%`" :class="car_style">
      <li class="carousel-item" v-for="(elem,i) of car_list" :key="i" :style="`width:25%`"><router-link to="/login"><img :src="elem.img" :alt="elem.title"></router-link></li>
    </ul>
    <ul class="carousel-disc">
      <li v-for="(elem,i) of car_list" :key="i" :class="i==car_i?'active':''"></li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data(){
      return {
        car_i:0,//轮播图标号i
        car_list:[],//轮播图列表
        // screen_width:0//屏幕宽度
        car_style:{
          "carousel-run":true
        }
      }
  },
  methods:{
    //获取轮播图图片的方法
    getCarousel(){
      this.axios.get("/index/carousel").then(result=>{
        this.car_list=result.data;
        this.car_list.push(result.data[0]);
        // console.log(this.car_list);
      });
    },
    carouselRun(){
      var carousel=setInterval(() => {//设置定时器隔着2s跳一次
       this.car_i++;
       if(this.car_i>this.car_list.length-2){//如果数组长度-2
         setTimeout(() => {
           this.car_style["carousel-run"]=false;//先将它的transition清除
           this.car_i=0;//把car_i重置为0
           setTimeout(() => {
             this.car_style["carousel-run"]=true;//先将它的transition再加上去
           }, 500);
         }, 1000);
         
       }
     }, 2000);
    }
  },
  created(){
    this.getCarousel();
    // this.screen_width=document.body.clientWidth;
    //定时器
    this.carouselRun();
  },
}
</script>

<style scoped>
  .carousel-run{
    transition: all 1s linear;
  }
  .carousel-list{
    list-style: none;
    margin: 0;
    padding: 0;
    width:400%;
  }
    
  .carousel-item{
    float: left;
  }
  .carousel-item img{
    width: 100%;
  }
  .carousel-disc{
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left:-20px; 
    list-style: none;
  }
  .carousel-disc li{
    float: left;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #000;
    opacity: 0.6;
  }
  .carousel-disc li+li{
    margin-left:5px; 
  }
  .carousel-disc li:last-child{
    display: none;
  }
  .carousel-disc .active{
    opacity: 1;
    background: #ffac03;
  }
</style>