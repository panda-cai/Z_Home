<template>
  <div class="trial inner-border">
    <p class="title">精选体验家</p>
    <img src="images/index_trial/trial.png" alt class="trial-img" @click="toTrial" />
    <ul class="trial-list" 
		:style="`transform:translateX(${touchdata.end+touchdata.len}px)`" 
		@touchstart="touchstart" 
		@touchend="touchend"
		@touchmove="move" 
		ref="sw"
		>
      <li class="trial-item" v-for="(elem,i) of trial" :key="i">
        <router-link to="/">
          <img :src="elem.showimg" alt />
          <span v-text="elem.showtitle"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { 
			trial: [],
			touchdata:{
				start:0,
				len:0,
				end:0,
				add:0
			}
			 };
  },
  methods: {
		touchstart(e){
			this.touchdata.start=e.touches[0].pageX;
		},
		move(e){
			this.touchdata.end=this.touchdata.add;
			this.touchdata.len=e.touches[0].pageX-this.touchdata.start;
		},
		touchend(e){
			// console.log(-this.$refs.sw.offsetWidth);
			if(this.touchdata.end+this.touchdata.len>0){
				this.$refs.sw.style="transform:translateX(0px)";
				return;
			}
			if(this.touchdata.end+this.touchdata.len<-this.$refs.sw.offsetWidth*0.6){
				this.$refs.sw.style=`transform:translateX(${-this.$refs.sw.offsetWidth*0.6}px)`;
				return
			}
			this.touchdata.add+=this.touchdata.len;
		},
    gettrial() {
      this.axios.get("/index/index_trial").then(result => {
        this.trial = result.data;
      });
    }
  },
  props: ["toTrial"],
  created() {
    this.gettrial();
  }
};
</script>

<style scoped>
.trial-item {
  width: 19%;
}
.trial-item span {
  margin-top: 5px;
  font-weight: 600;
  display: block;
  color: #000;
  font-size: 0.75rem;
  text-align: left;
}
.trial-item img {
  width: 100%;
}
.trial-list {
  width: 250%;
  display: flex;
  justify-content: space-between;
}
.trial-img {
  width: 100%;
}
</style>