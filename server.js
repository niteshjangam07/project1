var express=require("express");
var app=express();

var productdetails=function(req,resp)
{
var product=[
{id:1,productName:"abc",price:5000,likes:500},
{id:2,productName:"pqr",price:1000,likes:200},
{id:3,productName:"bbb",price:2000,likes:600}
];
resp.send(product);
};
app.get('/product',productdetails);

var server=app.listen(8000);
console.log("listening on port 8000");