<template>
  <div id="bg">
    <div class="login-inner"></div>
    <div id="header">
      <!-- <van-nav-bar right-text="去注册" @click-right="onClickRight" left-arrow/> -->

      <div class="login-bg">
        <button class="close" @click="close">
          <van-icon name="cross" color="#000" />
        </button>
        <div>
          <h1>Hey~</h1>
          <h4>登录后可购买商品或查看更多内容</h4>
        </div>
      </div>
    </div>
    <!-- <div class="title">Hi~ 欢迎来到猫猫说</div> -->
    <div id="container">
      <div>
        <input ref="uname" type="text" v-model="uname" placeholder="请输入您的用户名" />
      </div>
      <div>
        <input type="text" v-model="phone" placeholder="请输入您的手机号" />
      </div>
      <div>
        <input type="password" v-model="upwd" placeholder="请输入您的密码" />
      </div>
    </div>
    <div id="button">
      <button @click="regLogin" class="btn">登录</button>
    </div>
    <router-link to="/register" class="register">没有账号？马上注册</router-link>
  </div>
</template>
<style scoped>
.register{
  color: #fff;
  font-size: 0.9rem;
}
.close {
  width: 2rem;
  height: 2rem;
  background: #fff;
  border: 0;
  margin-top: 1rem;
  opacity: 0.8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  width: 100%;
  height: 2.5rem;
  border: 0;
  background: #ff9704;
  color: #fff;
}
.login-bg {
  background: url("../../public/images/icon_login_bg.png") no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 1rem;
}
.login-bg h1 {
  margin: 0;
}
#bg {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fed136;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
}
#header {
  width: 90%;
  height: 50%;
  margin-top: 1rem;
}
.van-nav-bar {
  height: 100%;
  background: #ffe971;
  border: 0;
  outline: 0;
}
.van-nav-bar .van-icon,
.van-nav-bar__text {
  color: #777;
  font-weight: 600;
}
.title {
  width: 90%;
  font-size: 1.5rem;
  text-align: left;
  color: #999;
  margin-top: 9rem;
  font-weight: 600;
}
#container {
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5rem;
}
#container div {
  width: 100%;
  height: 2rem;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
}
#container input {
  margin: 0;
  padding-left: 1rem;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  /* border-bottom: 3px solid #ffe971; */
  font-size: 1rem;
  color: #333;
  /* box-shadow: normal */
}
input::-webkit-input-placeholder {
  color: #ff9704;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ff9704;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #ff9704;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ff9704;
}
#button {
  width: 90%;
  height: 6%;
}
#button .van-button--primary {
  background: #ffe971;
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      // Height:{height:"0"},
      uname: "",
      phone: "",
      upwd: ""
    };
  },
  mounted() {
    // this.getH();
    this.$refs.uname.focus();
  },
  methods: {
    close() {
      this.$router.push("/");
    },
    getH() {
      var h = window.innerHeight;
      this.Height.height = h + "px";
      console.log(this.Height.height);
    },
    onClickRight() {
      this.$router.push("./register");
    },
    regLogin() {
      if (this.uname == "") {
        this.$toast("用户名不能为空");
      } else if (this.phone == "") {
        this.$toast("手机号不能为空");
      } else if (this.upwd == "") {
        this.$toast("密码不能为空");
      } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        //验证手机号码的格式是否正确
        this.$toast("手机号码格式不正确");
      } else {
        var obj = { uname: this.uname, phone: this.phone, upwd: this.upwd };
        this.axios.post("/user/login", this.qs.stringify(obj)).then(res => {
          if (res.data.code == 1) {
            this.$toast({ message: "登录成功", duration: 2000 });
            setTimeout(() => {
              this.$router.push("./index");
            }, 2000);
          } else {
            this.$toast("用户名或密码错误");
          }
        });
      }
    }
  }
};
</script>