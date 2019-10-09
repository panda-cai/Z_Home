<template>
    <div id="bg">
        <div id="header"> 
            <van-nav-bar title="用户注册" @click-left="onClickleft" left-arrow/>
        </div>
        <!-- <div class="img"></div> -->
        <div id="container"> 
           <div><input ref="uname" v-model="uname" type="text" placeholder="请填写您的用户名"></div>
            <div><input ref="phone" v-model="phone" type="text" placeholder="请填写您的手机号"></div>
            <div><input ref="upwd" v-model="upwd" type="password" placeholder="请填写您的密码"></div>
        </div>
        <div id="button">
            <van-button @click="regMsg" type="primary" size="large">注册</van-button>
        </div>
    </div>
</template>
<style scoped>
    #bg{
        display:flex;
        flex-direction:column;
        align-items: center;
				position: fixed;
				height: 100%;
				width: 100%;
    }
    #header{
        width:100%;
        height:6%;
    }
    .van-nav-bar{
        height:100%;
        /* background:#ffe971; */
        border:0;
        outline: 0;
    }
    .van-nav-bar .van-icon,.van-nav-bar__text{
        color:#777;
        font-weight:600;
    }
    .img{
        height:4.5rem;
        width:4.5rem;
        border-radius:2.25rem;
        background:url("http://127.0.0.1:8080/login/3.jpg") no-repeat;
        background-size:contain;
        margin-top:9rem;
    }
    #container{
        width:100%;
        height:30%;
        display:flex;
        flex-direction:column;
        /* align-items:center; */
        justify-content:space-around;
        margin-top:0.5rem;
    }
    #container div{
        width:100%;
        height:15%;
        padding:0 5%;
        box-sizing:border-box;
        display: flex;
        justify-content:space-around;
    }
    #container span{
        width:25%;
        font-size:1.2rem;
        color:#333;
        transform:translateY(0.5rem);
    }
    #container input{
        margin:0;
        padding:0;
        width:100%;
        height:80%;
        border:0;
        outline:0;
        border-bottom:3px solid #ff9704;
        font-size:1rem;
        color:#333;
    }
    #button{
        width:90%;
        height:6%;
    }
    #button .van-button--primary{
        background:#ff9704;
        border:0;
        width:100%;
        height:100%;
    }
</style>
<script>
    export default{
        data(){
            return{
                // Height:{height:"0"},
                uname:"",
                phone:"",
                upwd:"",
            }
        },
        mounted(){
            // this.getH();
            this.$refs.uname.focus();//进入页面让第一个输入框自动获取焦点
        },
        methods:{
            getH(){
                var h=window.innerHeight;
                this.Height.height=h+'px';
            },//获取所选型号的手机界面高度
            onClickleft(){
                this.$router.go(-1);
            },
            regMsg(){
                //验证输入的信息是否为空
                if(this.uname==""){
                    this.$toast("用户名不能为空")
                }else if(this.phone==""){
                    this.$toast("手机号不能为空")
                }
                else if(this.upwd==""){
                    this.$toast("密码不能为空")
                }else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                    //验证手机号码的格式是否正确
                    this.$toast("手机号码格式不正确")
                }else{
                    //验证通过之后发送ajax请求注册
                    var obj={uname:this.uname,phone:this.phone,upwd:this.upwd};
                    this.axios.post("/user/register",
                        this.qs.stringify(obj)).then(res=>{
                            if(res.data.code==-1){
                               this.$toast("该手机已被注册过") 
                            }else if(res.data.code==1){
                                this.$toast({
                                    message:"注册成功",
                                    duration:1000
                                })
                                setTimeout(()=>{
                                    this.$router.push("./login") 
                                },1000)         
                            }
                        })
                }
            },
        }
    }
</script>