<template>
  <div class="product-classitem">
    <img :src="list[0].main_img" alt="" class="main-img">
    <div class="card">
        <router-link :to="'/classlist/'+main_id+'/'+elem.minor_id" class="card-item" v-for="(elem,i) of list" :key="i">
          <img :src="elem.minor_img" alt="">
          <span v-text="elem.minor_title"></span>
        </router-link>
    </div>
  </div>
  <!-- <h1>1232145354656</h1> -->
</template>

<script>
export default {
  data(){
    return {
      list:[{
        main_img:''
      }]
    }
  },
  methods:{
    getlist(){
      // console.log("进入了函数");
      this.axios.get('/index/minorClass',{
        params:{
          main_id:this.main_id
        }
      }).then(res=>{
        // console.log("进入了函数2");
        this.list=res.data;
      })
    }
  },
  props:['main_id'],
  created(){
    this.getlist();
  }
}
</script>

<style scoped>
.product-classitem{
  padding-left: 26%;
}
.card{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 3%;
  box-sizing:border-box;

}
.main-img{
  width: 100%;
  padding: 0 3%;
  box-sizing:border-box;
}
.card .card-item:nth-child(2n){
  margin-left: 4%;
}
.card-item{
  width: 46%;
  margin-top:1rem;
}
.card-item img{
  width: 100%;
}
.card-item span{
  color: #000;
  font-size: 0.75rem;
}
</style>
