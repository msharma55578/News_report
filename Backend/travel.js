var express=require("express");
var app=express();


var express=require("express");
var app=express();
let bodyParser=require("body-parser");
app.use(bodyParser)();

var MongoClient=require("mongodb").MongoClient;
var url="mongodb+srv://chander:mohit555@cluster0-kisru.mongodb.net/Report?retryWrites=true&w=majority"

MongoClient.connect(url,function(error,db){
    if(error) throw error;
    console.log("Databade connected");

    var dbo=db.db("Report");
    var myobj={story_title:" ",Description:" ",First_name:"chander",Last_name:"delhi"}

    dbo.collection("Reporter").insertOne(myobj,function(err,result){
        if(err) throw err;  
        console.log("collection created");
    })
})

app.listen(3000,()=>{
  console .log("Server Running");
});