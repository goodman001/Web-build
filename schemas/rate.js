var mongoose=require('mongoose');
var RateSchema=new mongoose.Schema({
  target:String,
  username:String,
  score:Number,
    })
  module.exports=RateSchema;
