//导入模块  express  mysql  pool 
const express=require("express");
const mysql=require("mysql");
const pool=require("../pool");
//创建路由对象
var router=express.Router();
router.get("/login",(req,res)=>{
	res.send("相应回来的数据");
});

module.exports=router;
//抛出路由对象