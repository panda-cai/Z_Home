const express=require("express");
//导入post解析模块
const bodyParser=require("body-parser");
//导入跨域模块
const cors=require("cors");
//导入user路由
const userRouter=require("./routers/user");
//创建服务器
const server=express();
//监听端口
server.listen(3001);
//挂载post解析模块
server.use(bodyParser.urlencoded({
	extended:false
}));
//配置跨域请求路径
server.use(cors({
	origin:["http://127.0.0.1:5050"],credentials:true
}));

// 挂载user路由
server.use("/user",userRouter);
