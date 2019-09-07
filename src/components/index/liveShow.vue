<template>
  <div class="live-show inner-border">
    <p class="title">居住SHOW</p>
    <div class="live-top">
      <router-link to="/">
        <img src="images/inspiration/product.jpg" alt />
      </router-link>
      <span class="font">月半茶几</span>
    </div>
    <ul class="live-bottom">
      <li class="bottom-item" v-for="(elem,i) of inspiration" :key="i">
        <router-link to="/">
          <img :src="elem.imgurl" alt />
        </router-link>
        <span class="font">{{elem.exp}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
	data(){
		return {
			inspiration:[]
		}
	},
	methods:{
		getinspiration(){
			this.axios.get("/index/index_inspiration").then(result=>{
				this.inspiration=result.data;
				// console.log(this.inspiration);
			})
		}
	},
	created(){
		this.getinspiration();
	}
}
</script>
<style scoped>
.live-top {
  border: 1px solid #ccc;
}
.live-top img {
  width: 100%;
} 
.font {
  color: #333;
  font-size: 0.75rem;
  display: block;
  text-align: left;
	margin: 0.5rem 0.5rem 1rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.live-bottom{
	display: flex;
	justify-content:space-between;
}
.bottom-item{
	border: 1px solid #ccc;
	width: 31.5%;
}
.bottom-item img{
	width: 100%;
	height: 67%;
}
</style>