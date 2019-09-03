<template>
  <div class="theme">
    <p>主题推荐</p>
    <ul class="theme-list">
      <li class="theme-item">
        <img src="images/server_16.png" alt="">
        <div class="theme-info">
          <p>沙发</p>
          <span>sofa</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_19.png" alt="">
        <div class="theme-info">
          <p>床</p>
          <span>bed</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_23.png" alt="">
        <div class="theme-info">
          <p>餐厅</p>
          <span>dining</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_24.png" alt="">
        <div class="theme-info">
          <p>玄关</p>
          <span>entrance</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_27.png" alt="">
        <div class="theme-info">
          <p>书房</p>
          <span>study</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_28.png" alt="">
        <div class="theme-info">
          <p>睡眠</p>
          <span>sleep</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_31.png" alt="">
        <div class="theme-info">
          <p>艺术</p>
          <span>arts</span>
        </div>
      </li>
      <li class="theme-item">
        <img src="images/server_32.png" alt="">
        <div class="theme-info">
          <p>氛围</p>
          <span>aura</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .theme{
    padding:0 8%;
  }
  .theme>p{
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
  }
  .theme-list{
    display: flex;
    flex-wrap: wrap;
  }
  .theme-item{
    display: flex;
    width: 50%;
    align-items: center;
  }
  .theme-item img{
    width: 50%;
  }
  .theme-info{
    margin-left:0.75rem; 
  }
  .theme-info>p{
    margin:0;
    font-size: 0.87rem;
    color:#000;
  }
  .theme-info>span{
    font-size: 0.75rem;
    color: #afb1b8;
    
  }
</style>