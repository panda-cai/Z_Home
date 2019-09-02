<template>
  <!-- 首页的轮播图组件 -->
  <div class="carousel">
    <ul class="carousel-list" :style="`width:${screen_width*3}px`">
      <li class="carousel-item" v-for="(elem,i) of car_list" :key="i" :style="`width:${screen_width}px`"><router-link to="/login"><img :src="elem.img" :alt="elem.title"></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
      return {
        car_i:0,
        car_list:[],
        screen_width:0
      }
  },
  methods:{
    getCarousel(){
      this.axios.get("/index/carousel").then(result=>{
        this.car_list=result.data;
      });
    }
  },
  created(){
    this.getCarousel();
    this.screen_width=document.body.clientWidth;
  },
}
</script>

<style scoped>
  .carousel-list{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .carousel-item{
    float: left;
  }
  .carousel-item img{
    width: 100%;
  }
</style>