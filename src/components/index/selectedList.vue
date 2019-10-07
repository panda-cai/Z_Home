<template>
  <div class="selected-list inner-border">
    <p class="title" v-show="top_title">{{top_title}}</p>
    <div class="title-img">
      <router-link to="/">
        <img :src="classimg" alt />
      </router-link>
    </div>
    <div class="product-list">
      <ul @click="changeid">
        <li data-id="group1" :class="group=='group1'?'active':''">{{class_list[0]}}</li>
        <li data-id="group2" :class="group=='group2'?'active':''">{{class_list[1]}}</li>
        <li data-id="group3" :class="group=='group3'?'active':''">{{class_list[2]}}</li>
        <li data-id="group4" :class="group=='group4'?'active':''">{{class_list[3]}}</li>
      </ul>
      <mt-tab-container v-model="group" swipeable>
        <mt-tab-container-item id="group1">
          <selectitem :main_id="4" :minor_id="12"></selectitem>
        </mt-tab-container-item>
        <mt-tab-container-item id="group2">
          <selectitem :main_id="4" :minor_id="12"></selectitem>
        </mt-tab-container-item>
        <mt-tab-container-item id="group3">
          <selectitem :main_id="4" :minor_id="12"></selectitem>
        </mt-tab-container-item>
        <mt-tab-container-item id="group4">
          <selectitem :main_id="4" :minor_id="12"></selectitem>
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
  },
  props:['top_title','class_list','classimg']
};
</script>
<style scoped>
.active {
  color: #000 !important;
  border-bottom: 2px solid #000 !important;
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
  border-bottom: 2px solid transparent;
  padding: 0.5rem 0;
  color: #a0a2a9;
  font-size: 0.75rem;
  /* transition: all 0.5s; */
}
.product-list ul li + li {
  margin-left: 1rem;
}
</style>