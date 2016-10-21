var express = require('express');
var router = express.Router();
var User = require("../models/user")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Personal Infomation' });
});

router.post('/userinfo', function(req, res, next) {
  var _name = req.body.name;
  var _age = req.body.age;
  var _gender = req.body.inlineRadioOptions;
  var _occupation = req.body.occupation;
  var _hometown = req.body.hometown;
  var ops = new Array();
  var op;
  var _tags = '';
  ops[0] = req.body.inlineCheckbox0;
  ops[1] = req.body.inlineCheckbox1;
  ops[2] = req.body.inlineCheckbox2;
  ops[3] = req.body.inlineCheckbox3;
  ops[4] = req.body.inlineCheckbox4;
  for (op in ops)
  {
     if(ops[op])
     {
        _tags = ops[op] + "#" + _tags; 
     }
  }
  var timestamp=new Date().getTime();
  var userinfo_=
  {
     id: timestamp,
     name: _name,
     age: _age,
     gender:_gender,
     occupation:_occupation,
     hometown:_hometown,
     tags:_tags
  };
  var user = new User(userinfo_);
  var flag = 0;
  var re;
  /*
  User.findOne({'name':_name},function(err,re){
      if (err) {
        console.log(err);
        return;
      }else
      {
         console.log('have exist');
         //res.send('注册成功');
      }
  });*/
  /*User.findOne({'name':_name},function(err,re){
     if (err) {
        console.log(err);
        return;
     }else
     {
	console.log(re["name"]);
      }
  });*/
  var usercount = 0;
  User.count({'name':_name},function(err,re){
     if (err) {
        console.log(err);
        return;
     }else
     {  
        usercount = re;
      }       
  });
  if(usercount >0)
  {
      User.update({'name': _name}, {'age': _age,'gender':_gender,'occupation':_occupation, 'hometown':_hometown,'tags':_tags}, function(err) {
         if(err){
	    console.log(err)
            return
         }
         console.log('更新成功')
      });
  }else
  {
  user.save(function(err,user){
     if (err) {
         console.log(err);
         return;
     }
     console.log('注册成功');
     res.send('注册成功');
  });
  }
  console.log(userinfo_);
  //res.render('register', { title: 'Personal Infomation' });
  });

module.exports = router;
