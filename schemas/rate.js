var mongoose=require('mongoose');
var RateSchema=new mongoose.Schema({
  tid: {type: mongoose.Schema.ObjectId, ref: 'User'},
  target:String,
  username:String,
  score:Number,
    })
  module.exports=RateSchema;
