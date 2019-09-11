<template>
  <div class="inner-border">
    <div class="list-top">
      <p class="title">精选灵感</p>
      <router-link to="/" class="all">更多&gt;</router-link>
    </div>
    <ul class="inspiration-list">
      <li class="inspiration-item" v-for="(elem,i) of list" :key="i">
        <router-link to="/">
          <img :src="elem.imgurl">
          <span>{{elem.exp}}</span>
        </router-link>
        <btngroup></btngroup>
      </li>
    </ul>
  </div>
</template>
<script>
import btngroup from "./btngroup";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    getinspirationList() {
      this.axios.get("/index/show_inspiration").then(result => {
        this.list = result.data;
      });
    }
  },
  created() {
    this.getinspirationList();
  },
  components: { btngroup }
};
</script>
<style scoped>
.inspiration-item{
	margin-bottom: 1rem;
}
.inspiration-item img {
  width: 100%;
}
.inspiration-item span{
	display: block;
	text-align: left;
  font-size: 0.8rem;
  color: #000;
	overflow: hidden;
	font-weight: bold;
  text-overflow: ellipsis;
	white-space: nowrap;
	margin:0.5rem 0; 
} 
.list-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.all {
  font-size: 0.8rem;
}
</style>