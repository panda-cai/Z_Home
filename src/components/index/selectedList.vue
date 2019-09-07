<template>
  <div class="selected-list inner-border">
    <p class="title">精选目录</p>
    <div class="title-img">
      <router-link to="/">
        <img src="images/selected_list/chair.jpg" alt />
      </router-link>
    </div>
    <div class="product-list">
      <ul @click="changeid">
        <li data-id="group1" :class="group=='group1'?'active':''">推荐</li>
        <li data-id="group2" :class="group=='group2'?'active':''">餐椅</li>
        <li data-id="group3" :class="group=='group3'?'active':''">休闲椅</li>
        <li data-id="group4" :class="group=='group4'?'active':''">坐凳坐墩</li>
      </ul>
      <mt-tab-container v-model="group" swipeable>
        <mt-tab-container-item id="group1">
          <selectitem></selectitem>
        </mt-tab-container-item>
        <mt-tab-container-item id="group2">
          <h1 style="width:200px;height:200px;background:red">2</h1>
        </mt-tab-container-item>
        <mt-tab-container-item id="group3">
          <h1 style="width:200px;height:200px;background:red">3</h1>
        </mt-tab-container-item>
        <mt-tab-container-item id="group4">
          <h1 style="width:200px;height:200px;background:red">4</h1>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import selectitem from "./selectItem";
export default {
  data() {
    return {
      group: "group1"
    };
  },
  methods: {
    changeid(e) {
      if (e.target.nodeName == "LI") {
        this.group = e.target.getAttribute("data-id");
      }
    }
	},
	components:{
		selectitem
	}
};
</script>
<style scoped>
.active {
  color: #000 !important;
  border-bottom: 2px solid #000;
}
.title-img img {
  width: 100%;
}
.product-list ul {
	margin:0.5rem 0;
  display: flex;
  justify-content: center;
}
.product-list ul li {
  padding: 0.5rem 0;
  color: #a0a2a9;
  font-size: 0.75rem;
  transition: all 0.5s;
}
.product-list ul li + li {
  margin-left: 1rem;
}
</style>